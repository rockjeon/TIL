## Git 명령어

> 출처:[https://git-scm.com/book/ko/v2/Appendix-C%3A-Git-%EB%AA%85%EB%A0%B9%EC%96%B4-%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B3%A0-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8%ED%95%98%EA%B8%B0](https://git-scm.com/book/ko/v2/Appendix-C%3A-Git-명령어-공유하고-업데이트하기)



> * git 명령어 정리 및 개념 (나를 위한 명령어 정리)
>   * 프로젝트 가져오기와 생성하기
>   * 스냅샷다루기
>   * Branch와 Merge
>   * 공유하고 업데이트하기
> * 많이 부족하지만 필요한 명령어 업데이트 꾸준히 하기



### git config

Git에는 설정할 수 있는 값이 수백 가지에 달한다. 사용자의 취향에 따라 다르게 동작하도록 설정할 수 있다. 이 명령으로 사용자이름이나 터미널 색깔, 편집기 등을 설정한다. 저장소마다 다르게 혹은 글로벌하게 설정할 수 있는데 각각 설정파일이 다르다.

`git config` 명령은 이 책의 모든 장에서 사용한다.

Git을 처음 사용할 때 이름, 이메일 주소, 편집기는 어떻게 설정하는지는 [Git 최초 설정](https://git-scm.com/book/ko/v2/ch00/_first_time)에서 설명한다.

어떻게 단축 명령어를 만드는지는 [Git Alias](https://git-scm.com/book/ko/v2/ch00/_git_aliases)에 있다. 매번 긴 옵션을 줄줄 입력하지 않아도 된다.

`git pull` 명령을 실행할 때 `--rebase` 옵션으로 동작하게 하는 방법은 [Rebase 하기](https://git-scm.com/book/ko/v2/ch00/_rebasing)에 있다.

HTTP 암호를 저장하는 방법은 [Credential 저장소](https://git-scm.com/book/ko/v2/ch00/_credential_caching)를 보면 된다.

Git에 데이터를 넣고 꺼낼 때 사용하는 Smudge와 Clean 필터를 설정하는 방법은 [키워드 치환](https://git-scm.com/book/ko/v2/ch00/_keyword_expansion)에 있다.

마지막으로 `git config` 명령 자체에 대한 설명은 [Git 설정하기](https://git-scm.com/book/ko/v2/ch00/_git_config)에 있다.



## 프로젝트 가져오기와 생성하기

### git init

프로젝트 디렉토리로 가서 `git init`이라고 실행한다. 디렉토리에 Git 저장소가 새로 만들어지고 프로젝트를 버전 관리할 수 있다.

### git clone

`git clone` 은 사실 다른 명령어를 몇 개 실행한다. 디렉토리를 만들고 디렉토리로 들어가고 나서 `git init` 명령으로 빈 Git 저장소를 만든다. 그다음 입력한 URL을 `origin` 이라는(기본값) 이름의 리모트로 추가하고(`git remote add`) `git fetch` 명령으로 리모트 저장소에서 데이터를 가져온다. 마지막으로 최종 커밋을 워킹 디렉토리에 Checkout 한다(`git checkout`).

`git clone` 명령은 이 책 어디에서나 볼 수 있는 명령이지만 가장 설명이 잘된 몇 곳을 소개한다.

이 명령은 [기존 저장소를 Clone 하기](https://git-scm.com/book/ko/v2/ch00/_git_cloning)에서 설명했고 바로 따라 할 수 있는 예제도 보여준다.



## 스냅샷 다루기

### git add

`git add` 명령은 워킹 디렉토리에서 Staging Area(“index”)로 컨텐트를 추가하는 명령어다. `git commit` 명령은 오로지 Staging Area만 바라보기 때문에 `git add` 명령으로 커밋할 스냅샷을 잘 다듬어야 한다. 

### git status

`git status` 명령은 워킹 디렉토리와 Staging Aread의 상태를 보여준다. Modified 상태이거나 Unstaged 상태인 파일이 무엇인지 Staged 상태이지만 아직 커밋하지 않은 파일은 무엇인지 보여준다. Staging Area에 파일을 넣고 꺼내는 방법에 대한 힌트도 보여준다.

### git diff

`git diff` 명령은 두 트리 개체의 차이를 보고 싶을 때 사용한다. 워킹 디렉토리와 Staging Area를 비교할 수 있고(`git diff`) Staing Area와 마지막 커밋을 비교할 수 있다(`git diff --staged`). 그리고 두 커밋을 비교할 수 있다(`git diff master branchB`).

### git difftool

`git difftool` 명령은 단순히 외부 diff 도구를 실행해준다. `git diff`는 Git에 들어 있는 기능을 사용하는 것이고 외부 diff 도구로 두 트리를 비교하고 싶을 때 사용한다.

### git commit

`git commit` 명령은 `git add`로 Staging Area에 넣은 모든 파일을 커밋한다. 데이터베이스에는 하나의 스냅샷으로 기록된다. 그리고 현 브랜치가 새 커밋을 가리키게 한다.

### git reset

`git reset` 명령은 되돌리는 명령이다. 단어가 의미하는 그대로라고 생각하면 된다. `HEAD` 포인터를 옮기는 것과 관련돼 있고 Staging Area(`index`)를 되돌릴 수 있고 `--hard` 옵션을 주면 워킹 디렉토리도 되돌린다. `--hard` 옵션을 잘못 사용하면 작업물을 잃어버릴 수도 있기 때문에 이 명령을 잘 이해하고 있어야 한다.

`git reset`은 무엇보다도 `git add`로 추가한 파일을 Unstage 하는데 사용한다. 

`git reset --hard` 명령으로 충돌 시 Merge를 취소할 수 있다. `git merge --abort` 로도 같은 일을 할 수 있는데 이 명령은 `git reset` 명령어의 Wrapper다. 

### git rm

`git rm` 명령은 Staging Area나 워킹 디렉토리에 있는 파일을 삭제하는 데 사용한다. `git add` 명령과 비슷하게 파일의 삭제를 Stage 하는 기능이다.  Staging Area와 워킹 디렉토리 모두에서 파일을 삭제하는 방법과 `--cached` 옵션을 주고 Staging Area에 있는 파일만 지우고 워킹 디렉토리의 파일은 남겨두는 방법도 설명한다. 

## Branch와Merge

### git branch

`git branch` 명령은 브랜치를 관리하는 도구다. 이 명령은 브랜치를 모두 보여주고 브랜치를 새로 만들고 브랜치를 삭제하고 브랜치 이름을 변경한다.

[Git 브랜치](https://git-scm.com/book/ko/v2/ch00/ch03-git-branching)에서 `branch` 명령을 설명하는데 이 명령을 한 장에 걸쳐서 설명한다. 브랜치를 만드는 것은 [새 브랜치 생성하기](https://git-scm.com/book/ko/v2/ch00/_create_new_branch)에서 설명하고 브랜치를 보여주거나 삭제하는 기능은 [브랜치 관리](https://git-scm.com/book/ko/v2/ch00/_branch_management)에서 설명한다.

`git branch -u` 명령으로 트래킹 브랜치를 만드는 것을 [브랜치 추적](https://git-scm.com/book/ko/v2/ch00/_tracking_branches)에서 보여준다.

내부적으로 어떤 일이 벌어지는지는 [Git Refs](https://git-scm.com/book/ko/v2/ch00/_git_refs)에서 설명한다.

### git checkout

`git checkout` 명령은 브랜치를 변경하고 해당 파일을 워킹 디렉토리로 복사한다.

[브랜치 이동하기](https://git-scm.com/book/ko/v2/ch00/_switching_branches)에서 `git branch` 명령을 설명하면서 이 명령도 설명한다.

[브랜치 추적](https://git-scm.com/book/ko/v2/ch00/_tracking_branches)에서 `--track` 옵션을 주고 트래킹 브랜치를 만드는 방법을 설명한다.

[충돌 파일 Checkout](https://git-scm.com/book/ko/v2/ch00/_checking_out_conflicts)를 통해 이 명령에 `--conflict=diff3`을 주면 충돌 표시된 파일을 재현할 수 있다.

마지막으로 `git checkout`이 어떻게 구현됐는지는 [HEAD](https://git-scm.com/book/ko/v2/ch00/ref_the_ref)를 참고한다.

### git merge

`git merge`는 다른 브랜치를 현재 Checkout된 브랜치에 Merge 하는 명령이다. Merge 하고 나서 현재 브랜치가 Merge 된 결과를 가리키도록 옮긴다.

`git merge` 명령은 [브랜치의 기초](https://git-scm.com/book/ko/v2/ch00/_basic_branching)에서 설명한다. 이 책의 여러 곳에서 `merge` 명령을 사용하지만 [브랜치의 기초](https://git-scm.com/book/ko/v2/ch00/_basic_branching)에서 설명한 것에서 크게 벗어나지 않는다. `git merge ` 명령을 실행하면 해당 브랜치가 Merge 된다.

[고급 Merge](https://git-scm.com/book/ko/v2/ch00/_advanced_merging)에서는 `-Xignore-space-change` 옵션을 사용하는 방법이나 `--abort` 플래그로 Merge를 중단하는 방법 등을 설명한다.

Merge 하기 전에 서명을 검사하는 방법도 설명한다. GPG 서명은 [커밋에 서명하기](https://git-scm.com/book/ko/v2/ch00/_signing_commits)에서 설명한다.

마지막으로 Subtree를 Merge 하는 것은 [서브트리 Merge](https://git-scm.com/book/ko/v2/ch00/_subtree_merge)에서 배운다.

### git mergetool

`git mergetool` 명령은 외부 Merge Helper를 실행해 준다. Merge 하다가 문제가 생겼을 때 사용한다.

[충돌의 기초](https://git-scm.com/book/ko/v2/ch00/_basic_merge_conflicts)에서 살짝 맛을 보여주고 [다른 Merge, Diff 도구 사용하기](https://git-scm.com/book/ko/v2/ch00/_external_merge_tools)에서 자신의 외부 Merge 도구를 설정하는 방법을 설명한다.

### git log

`git log` 명령은 프로젝트 히스토리를 시간의 역순으로 보여준다. 

넘겨준 Ref를 따라 히스토리를 보여주는데 Ref를 한 개가 아니라 여러 개 넘길 수도 있다. Ref를 넘겨 주지 않으면 HEAD가 가리키는 브랜치의 히스토리를 보여준다. 또 이 명령으로 여러 브랜치들 사이의 차이를 커밋 단위로 볼 수 있다.

이 책에서 프로젝트 히스트리를 보여줄 때마다 이 명령을 사용한다고 봐도 된다.

[커밋 히스토리 조회하기](https://git-scm.com/book/ko/v2/ch00/_viewing_history)에서 이 명령을 깊게 다뤘다. 

`-p`와 `--stat` 옵션을 주면 각 커밋 사이에 생긴 변화를 확인할 수 있다. `--pretty`와 `--oneline` 옵션을 주면 히스토리를 좀 더 깔끔하게 볼 수 있다. 이 옵션은 Author나 날짜를 중심으로 히스토리를 보여준다.

[새 브랜치 생성하기](https://git-scm.com/book/ko/v2/ch00/_create_new_branch)을 보면 `--decorate` 옵션을 주고 히스토리에 브랜치 포인터가 함께 보이도록 하는 방법이 나온다. `--graph` 옵션을 추가하면 히스토리가 어떻게 진행됐는지도 볼 수 있다.

[비공개 소규모 팀](https://git-scm.com/book/ko/v2/ch00/_private_team)과 [범위로 커밋 가리키기](https://git-scm.com/book/ko/v2/ch00/_commit_ranges)에서 `branchA..branchB` 문법을 사용하는 방법을 설명한다. `branchB`에만 있고 `branchA`에는 없는 커밋만 걸러서 볼 수 있다. [범위로 커밋 가리키기](https://git-scm.com/book/ko/v2/ch00/_commit_ranges)에서 이 문법을 다양하게 조합하는 방법을 설명한다.

### git stash

`git stash` 명령은 아직 커밋하지 않은 일을 저장하는 데 사용된다. 작업 중인 워킹 디렉토리를 저장한다.

[Stashing과 Cleaning](https://git-scm.com/book/ko/v2/ch00/_git_stashing)에서 설명한다.

### git tag

`git tag` 명령은 히스토리에서 특정부분을 북마크하는 기능이다. 일반적으로 배포할 때 사용한다.

이 명령은 [태그](https://git-scm.com/book/ko/v2/ch00/_git_tagging)에서 자세히 설명하고 [릴리즈 버전에 태그 달기](https://git-scm.com/book/ko/v2/ch00/_tagging_releases)에 보면 구체적인 사례도 보여준다.

태그에 GPG 서명을 하려면 `-s` 플래그를 주면 되고 `-v` 플래그를 주면 서명을 검증할 수 있다. [내 작업에 서명하기](https://git-scm.com/book/ko/v2/ch00/_signing)에서 다룬다.

## 공유하고 업데이트하기

### git fetch

`git fetch` 명령은 로컬 데이터베이스에 있는 것을 뺀 리모트 저장소의 모든 것을 가져온다.

[리모트 저장소를 Pull 하거나 Fetch 하기](https://git-scm.com/book/ko/v2/ch00/_fetching_and_pulling)에서 이 명령을 설명하고 [리모트 브랜치](https://git-scm.com/book/ko/v2/ch00/_remote_branches)에 보면 참고할 수 있는 예제가 더 있다.

[프로젝트에 기여하기](https://git-scm.com/book/ko/v2/ch00/_contributing_project)에도 좋은 예제가 많다.

Ref를 한 개만 가져오는 방법은 [Pull Request의 Ref](https://git-scm.com/book/ko/v2/ch00/_pr_refs)에서 설명하고 번들에서 가져오는 방법은 [Bundle](https://git-scm.com/book/ko/v2/ch00/_bundling)에서 설명한다.

Fetch 하는 기본 Refspec을 수정하는 방법은in [Refspec](https://git-scm.com/book/ko/v2/ch00/_refspec)에서 설명한다. 원하는 대로 수정할 수 있다.

### git pull

`git pull` 명령은 `git fetch` 와 `git merge` 명령을 순서대로 실행하는 것뿐이다. 그래서 해당 리모트에서 Fetch 하고 즉시 현 브랜치로 Merge를 시도한다.

[리모트 저장소를 Pull 하거나 Fetch 하기](https://git-scm.com/book/ko/v2/ch00/_fetching_and_pulling)에서 이 명령을 사용하는 방법을 다뤘고 정확히 무엇을 Merge 하는 지는 [리모트 저장소 살펴보기](https://git-scm.com/book/ko/v2/ch00/_inspecting_remote)에서 설명한다.

[Rebase 한 것을 다시 Rebase 하기](https://git-scm.com/book/ko/v2/ch00/_rebase_rebase)에서 그 어렵다는 Rebase를 다루는 방법을 설명한다.

저장소 URL을 주고 한 번만 Pull 해 올 수 있다는 것을 [리모트 브랜치로부터 통합하기](https://git-scm.com/book/ko/v2/ch00/_checking_out_remotes)에서 설명한다.

`--verify-signatures` 옵션을 주면 Pull 할 때 커밋의 PGP 서명을 검증한다. PGP 서명은 [커밋에 서명하기](https://git-scm.com/book/ko/v2/ch00/_signing_commits)에서 설명한다.

### git push

`git push` 명령은 리모트에는 없지만, 로컬에는 있는 커밋을 계산하고 나서 그 차이만큼만 Push 한다. Push를 하려면 원격 저장소에 대한 쓰기 권한이 필요하고 인증돼야 한다.

[리모트 저장소에 Push 하기](https://git-scm.com/book/ko/v2/ch00/_pushing_remotes)에서 `git push` 명령으로 브랜치를 원격 저장소에 Push 하는 방법을 설명한다. 조금 깊게 브랜치를 하나씩 골라서 Push 하는 방법은 [Push 하기](https://git-scm.com/book/ko/v2/ch00/_pushing_branches)에서 설명한다. 자동으로 Push 하도록 트래킹 브랜치를 설정하는 방법은 [브랜치 추적](https://git-scm.com/book/ko/v2/ch00/_tracking_branches)에서 설명한다. `git push --delete` 명령으로 원격 서버의 브랜치를 삭제하는 방법은 [리모트 브랜치 삭제](https://git-scm.com/book/ko/v2/ch00/_delete_branches)에서 설명한다.

[프로젝트에 기여하기](https://git-scm.com/book/ko/v2/ch00/_contributing_project)에서는 `git push`를 주구장창 사용한다. 리모트를 여러 개 사용해서 브랜치에 작업한 내용을 공유하는 것을 보여준다.

### git remote

`git remote` 명령은 원격 저장소 설정인 리모트의 관리 도구다. 긴 URL 대신 “origin” 처럼 이름을 짧게 지을 수 있다. 그리고 URL대신 짧은 리모트 이름을 사용한다. `git remote` 명령으로 이 리모트를 여러 개 만들어 관리할 수 있다.

이 리모트를 조회하고 추가하고 삭제하고 수정하는 방법은 [리모트 저장소](https://git-scm.com/book/ko/v2/ch00/_remote_repos)에서 잘 설명한다.

이 명령은 `git remote add  ` 형식으로 사용하고 이 책에서 자주 사용된다.

### git show

`git show` 명령은 Git 개체를 사람이 읽을 수 있도록 요약해서 보여준다. 태그나 커밋 정보를 보고 싶을 때 이 명령을 사용한다.

[Annotated 태그](https://git-scm.com/book/ko/v2/ch00/_annotated_tags)을 보면 Annotated 태그의 정보를 보여주는 예제가 나온다.

[리비전 조회하기](https://git-scm.com/book/ko/v2/ch00/_revision_selection)에서 이 명령을 사용하는 것을 보여준다.

Merge 하다가 충돌이 났을 때 특정 버전의 파일 내용을 `git show`로 꺼내 볼 수 있다. [수동으로 Merge 하기](https://git-scm.com/book/ko/v2/ch00/_manual_remerge)에서 이 점을 설명한다.

### git shortlog

`git shortlog` 명령은 `git log` 명령의 결과를 요약해서 보여 준다고 생각하면 된다. 옵션도 `git log` 명령의 것과 매우 비슷하다. 이 명령은 Author 별로 커밋을 묶어서 보여준다.

이 명령은 Changelog 파일을 만들 때 유용한 데 [Shortlog 보기](https://git-scm.com/book/ko/v2/ch00/_the_shortlog)에서 보여준다.

### git describe

`git describe` 명령은 커밋과 관련된 정보를 잘 조합해서 사람이 읽을 수 있는 스트링을 만들어 준다. 커밋 SHA-1처럼 식별 가능하고 사람이 이해할 수 있는 정보가 필요할 때 사용한다.

