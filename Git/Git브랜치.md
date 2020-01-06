## Git 브랜치

> 출처: [https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%99%80-Merge-%EC%9D%98-%EA%B8%B0%EC%B4%88](https://git-scm.com/book/ko/v2/Git-브랜치-브랜치와-Merge-의-기초)



모든 버전 관리 시스템은 브랜치를 지원한다. 개발을 하다 보면 코드를 여러 개로 복사해야 하는 일이 자주 생긴다. 코드를 통째로 복사하고 나서 원래 코드와는 상관없이 독립적으로 개발을 진행할 수 있는데, 이렇게 독립적으로 개발하는 것이 브랜치다.



**새 브랜치 생성하기**

브랜치를 하나 새로 만들면 어떨까. 브랜치를 하나 만들어서 놀자. 아래와 같이 `git branch` 명령으로 `testing` 브랜치를 만든다.

```console
$ git branch testing
```

새로 만든 브랜치도 지금 작업하고 있던 마지막 커밋을 가리킨다.

![한 커밋 히스토리를 가리키는 두 브랜치](https://git-scm.com/book/en/v2/images/two-branches.png)

*한 커밋 히스토리를 가리키는 두 브랜치*

지금 작업 중인 브랜치가 무엇인지 Git은 어떻게 파악할까. 다른 버전 관리 시스템과는 달리 Git은 *HEAD*라는 특수한 포인터가 있다. 이 포인터는 지금 작업하는 로컬 브랜치를 가리킨다. 브랜치를 새로 만들었지만, Git은 아직 `master` 브랜치를 가리키고 있다. `git branch` 명령은 브랜치를 만들기만 하고 브랜치를 옮기지 않는다.

![현재 작업 중인 브랜치를 가리키는 HEAD](https://git-scm.com/book/en/v2/images/head-to-master.png)

*현재 작업 중인 브랜치를 가리키는 HEAD*

`git log` 명령에 `--decorate` 옵션을 사용하면 쉽게 브랜치가 어떤 커밋을 가리키는지도 확인할 수 있다.

```console
$ git log --oneline --decorate
f30ab (HEAD -> master, testing) add feature #32 - ability to add new formats to the central interface
34ac2 Fixed bug #1328 - stack overflow under certain conditions
98ca9 The initial commit of my project
```

“master” 와 “testing” 이라는 브랜치가 `f30ab` 커밋 옆에 위치하여 이런식으로 브랜치가 가리키는 커밋을 확인할 수 있다.

**브랜치 이동하기**

`git checkout` 명령으로 다른 브랜치로 이동할 수 있다. 한번 `testing` 브랜치로 바꿔보자.

```console
$ git checkout testing
```

이렇게 하면 HEAD는 testing 브랜치를 가리킨다.

![HEAD는 testing 브랜치를 가리킴](https://git-scm.com/book/en/v2/images/head-to-testing.png)

*HEAD는 testing 브랜치를 가리킴*

자, 이제 핵심이 보일 거다! 커밋을 새로 한 번 해보자.

```console
$ vim test.rb
$ git commit -a -m 'made a change'
```

![HEAD가 가리키는 testing 브랜치가 새 커밋을 가리킴](https://git-scm.com/book/en/v2/images/advance-testing.png)

*HEAD가 가리키는 testing 브랜치가 새 커밋을 가리킴*

이 부분이 흥미롭다. 새로 커밋해서 `testing` 브랜치는 앞으로 이동했다. 하지만, `master` 브랜치는 여전히 이전 커밋을 가리킨다. `master` 브랜치로 되돌아가보자.

```console
$ git checkout master
```

![HEAD가 Checkout 한 브랜치로 이동함](https://git-scm.com/book/en/v2/images/checkout-master.png)

*HEAD가 Checkout 한 브랜치로 이동함*

방금 실행한 명령이 한 일은 두 가지다. `master` 브랜치가 가리키는 커밋을 HEAD가 가리키게 하고 워킹 디렉토리의 파일도 그 시점으로 되돌려 놓았다. 앞으로 커밋을 하면 다른 브랜치의 작업들과 별개로 진행되기 때문에 `testing` 브랜치에서 임시로 작업하고 원래 `master` 브랜치로 돌아와서 하던 일을 계속할 수 있다.



### Merge vs Rebase

-----

**1.Merge** 

먼저 지금 작업하는 프로젝트에서 이전에 `master` 브랜치에 커밋을 몇 번 했다고 가정한다.

![현재 커밋 히스토리](https://git-scm.com/book/en/v2/images/basic-branching-1.png)



*현재 커밋 히스토리*

이슈 관리 시스템에 등록된 53번 이슈를 처리한다고 하면 이 이슈에 집중할 수 있는 브랜치를 새로 하나 만든다. 브랜치를 만들면서 Checkout까지 한 번에 하려면 `git checkout` 명령에 `-b` 라는 옵션을 추가한다.

```console
$ git checkout -b iss53
Switched to a new branch "iss53"
```

위 명령은 아래 명령을 줄여놓은 것이다.

```console
$ git branch iss53
$ git checkout iss53
```

![브랜치 포인터를 새로 만듦](https://git-scm.com/book/en/v2/images/basic-branching-2.png)

*브랜치 포인터를 새로 만듦*

`iss53` 브랜치를 Checkout 했기 때문에(즉, `HEAD` 는 `iss53` 브랜치를 가리킨다) 뭔가 일을 하고 커밋하면 `iss53` 브랜치가 앞으로 나아간다.

```console
$ vim index.html
$ git commit -a -m 'added a new footer [issue 53]'
```

![진행 중인 `iss53` 브랜치](https://git-scm.com/book/en/v2/images/basic-branching-3.png)

*진행 중인 `iss53` 브랜치*

다른 상황을 가정해보자. 만드는 사이트에 문제가 생겨서 즉시 고쳐야 한다. 버그를 해결한 Hotfix에 `iss53` 이 섞이는 것을 방지하기 위해 `iss53` 과 관련된 코드를 어딘가에 저장해두고 원래 운영 환경의 소스로 복구해야 한다. Git을 사용하면 이런 노력을 들일 필요 없이 그냥 `master` 브랜치로 돌아가면 된다.

그렇지만, 브랜치를 이동하려면 해야 할 일이 있다. 아직 커밋하지 않은 파일이 Checkout 할 브랜치와 충돌 나면 브랜치를 변경할 수 없다. 브랜치를 변경할 때는 워킹 디렉토리를 정리하는 것이 좋다. 이런 문제를 다루는 방법은(주로, Stash이나 커밋 Amend에 대해) 나중에 [Stashing과 Cleaning](https://git-scm.com/book/ko/v2/ch00/_git_stashing) 에서 다룰 것이다. 지금은 작업하던 것을 모두 커밋하고 `master` 브랜치로 옮긴다:

```console
$ git checkout master
Switched to branch 'master'
```

이때 워킹 디렉토리는 53번 이슈를 시작하기 이전 모습으로 되돌려지기 때문에 새로운 문제에 집중할 수 있는 환경이 만들어진다. Git은 자동으로 워킹 디렉토리에 파일들을 추가하고, 지우고, 수정해서 Checkout 한 브랜치의 마지막 스냅샷으로 되돌려 놓는다는 것을 기억해야 한다.

이젠 해결해야 할 핫픽스가 생겼을 때를 살펴보자. `hotfix`라는 브랜치를 만들고 새로운 이슈를 해결할 때까지 사용한다.

```console
$ git checkout -b hotfix
Switched to a new branch 'hotfix'
$ vim index.html
$ git commit -a -m 'fixed the broken email address'
[hotfix 1fb7853] fixed the broken email address
 1 file changed, 2 insertions(+)
```

![`master` 브랜치에서 갈라져 나온 hotfix 브랜치](https://git-scm.com/book/en/v2/images/basic-branching-4.png)

*`master` 브랜치에서 갈라져 나온 hotfix 브랜치*

운영 환경에 적용하려면 문제를 제대로 고쳤는지 테스트하고 최종적으로 운영환경에 배포하기 위히 `hotfix` 브랜치를 `master` 브랜치에 합쳐야 한다. `git merge` 명령으로 아래와 같이 한다.

```console
$ git checkout master
$ git merge hotfix
Updating f42c576..3a0874c
Fast-forward
 index.html | 2 ++
 1 file changed, 2 insertions(+)
```

Merge 메시지에서 “fast-forward” 가 보이는가. `hotfix` 브랜치가 가리키는 `C4` 커밋이 `C2` 커밋에 기반한 브랜치이기 때문에 브랜치 포인터는 Merge 과정 없이 그저 최신 커밋으로 이동한다. 이런 Merge 방식을 “Fast forward” 라고 부른다. 다시 말해 A 브랜치에서 다른 B 브랜치를 Merge 할 때 B 브랜치가 A 브랜치 이후의 커밋을 가리키고 있으면 그저 A 브랜치가 B 브랜치와 동일한 커밋을 가리키도록 이동시킬 뿐이다.

이제 `hotfix`는 `master` 브랜치에 포함됐고 운영환경에 적용할 수 있는 상태가 되었다고 가정해보자.

![Merge 후 `hotfix` 같은 것을 가리키는 `master` 브랜치](https://git-scm.com/book/en/v2/images/basic-branching-5.png)

*Merge 후 `hotfix` 같은 것을 가리키는 `master` 브랜치*

급한 문제를 해결하고 `master` 브랜치에 적용하고 나면 다시 일하던 브랜치로 돌아가야 한다. 이제 더 이상 필요없는 `hotfix` 브랜치는 삭제한다. `git branch` 명령에 `-d` 옵션을 주고 브랜치를 삭제한다.

```console
$ git branch -d hotfix
Deleted branch hotfix (3a0874c).
```

자 이제 이슈 53번을 처리하던 환경으로 되돌아가서 하던 일을 계속 하자.

```console
$ git checkout iss53
Switched to branch "iss53"
$ vim index.html
$ git commit -a -m 'finished the new footer [issue 53]'
[iss53 ad82d7a] finished the new footer [issue 53]
1 file changed, 1 insertion(+)
```

![master와 별개로 진행하는 iss53 브랜치](https://git-scm.com/book/en/v2/images/basic-branching-6.png)

*master와 별개로 진행하는 iss53 브랜치*

위에서 작업한 `hotfix` 가 `iss53` 브랜치에 영향을 끼치지 않는다는 점을 이해하는 것이 중요하다. `git merge master` 명령으로 `master` 브랜치를 `iss53` 브랜치에 Merge 하면 `iss53` 브랜치에 `hotfix` 가 적용된다. 아니면 `iss53` 브랜치가 `master` 에 Merge 할 수 있는 수준이 될 때까지 기다렸다가 Merge 하면 `hotfix` 와 `iss53` 브랜치가 합쳐진다.

53번 이슈를 다 구현하고 master 브랜치에 Merge 하는 과정을 살펴보자. `iss53` 브랜치를 `master` 브랜치에 Merge 하는 것은 앞서 살펴본 `hotfix` 브랜치를 Merge 하는 것과 비슷하다. `git merge` 명령으로 합칠 브랜치에서 합쳐질 브랜치를 Merge 하면 된다.

```console
$ git checkout master
Switched to branch 'master'
$ git merge iss53
Merge made by the 'recursive' strategy.
index.html |    1 +
1 file changed, 1 insertion(+)
```

`hotfix` 를 Merge 했을 때와 메시지가 다르다. 현재 브랜치가 가리키는 커밋이 Merge 할 브랜치의 조상이 아니므로 Git은 'Fast-forward’로 Merge 하지 않는다. 이 경우에는 Git은 각 브랜치가 가리키는 커밋 두 개와 공통 조상 하나를 사용하여 3-way Merge를 한다.

![커밋 3개를 Merge](https://git-scm.com/book/en/v2/images/basic-merging-1.png)

*커밋 3개를 Merge*

단순히 브랜치 포인터를 최신 커밋으로 옮기는 게 아니라 3-way Merge 의 결과를 별도의 커밋으로 만들고 나서 해당 브랜치가 그 커밋을 가리키도록 이동시킨다. 그래서 이런 커밋은 부모가 여러 개고 Merge 커밋이라고 부른다.

![Merge 커밋](https://git-scm.com/book/en/v2/images/basic-merging-2.png)

**2.Rebse**

Git에서 한 브랜치에서 다른 브랜치로 합치는 방법으로는 두 가지가 있다. 하나는 Merge 이고 다른 하나는 Rebase 다. 이 절에서는 Rebase가 무엇인지, 어떻게 사용하는지, 좋은 점은 뭐고, 어떤 상황에서 사용하고 어떤 상황에서 사용하지 말아야 하는지 알아 본다.

앞의 살펴본 예제로 다시 돌아가 보자. 두 개의 나누어진 브랜치의 모습을 볼 수 있다.

![두 개의 브랜치로 나누어진 커밋 히스토리](https://git-scm.com/book/en/v2/images/basic-rebase-1.png)

*두 개의 브랜치로 나누어진 커밋 히스토리*

이 두 브랜치를 합치는 가장 쉬운 방법은 앞에서 살펴본 대로 `merge` 명령을 사용하는 것이다. 두 브랜치의 마지막 커밋 두 개(`C3`, `C4`)와 공통 조상(`C2`)을 사용하는 3-way Merge로 새로운 커밋을 만들어 낸다.

![나뉜 브랜치를 Merge 하기](https://git-scm.com/book/en/v2/images/basic-rebase-2.png)

*나뉜 브랜치를 Merge 하기*

비슷한 결과를 만드는 다른 방식으로, `C3` 에서 변경된 사항을 Patch로 만들고 이를 다시 `C4` 에 적용시키는 방법이 있다. Git에서는 이런 방식을 *Rebase* 라고 한다. `rebase` 명령으로 한 브랜치에서 변경된 사항을 다른 브랜치에 적용할 수 있다.

위의 예제는 아래와 같은 명령으로 Rebase 한다.

```console
$ git checkout experiment
$ git rebase master
First, rewinding head to replay your work on top of it...
Applying: added staged command
```

실제로 일어나는 일을 설명하자면 일단 두 브랜치가 나뉘기 전인 공통 커밋으로 이동하고 나서 그 커밋부터 지금 Checkout 한 브랜치가 가리키는 커밋까지 diff를 차례로 만들어 어딘가에 임시로 저장해 놓는다. Rebase 할 브랜치(역주 - experiment)가 합칠 브랜치(역주 - master)가 가리키는 커밋을 가리키게 하고 아까 저장해 놓았던 변경사항을 차례대로 적용한다.

![`C4`의 변경사항을 `C3`에 적용하는 Rebase 과정.](https://git-scm.com/book/en/v2/images/basic-rebase-3.png)

*C4`의 변경사항을 `C3`에 적용하는 Rebase 과정*

그리고 나서 `master` 브랜치를 Fast-forward 시킨다.

```console
$ git checkout master
$ git merge experiment
```

![master 브랜치를 Fast-forward시키기](https://git-scm.com/book/en/v2/images/basic-rebase-4.png)

### 리모트 브랜치

---

리모트 트래킹 브랜치는 리모트 브랜치를 추적하는 레퍼런스이며 브랜치다. 리모트 트래킹 브랜치는 로컬에 있지만 임의로 움직일 수 없다. 리모트 서버에 연결할 때마다 리모트의 브랜치 업데이트 내용에 따라서 자동으로 갱신될 뿐이다. 리모트 트래킹 브랜치는 일종의 북마크라고 할 수 있다. 리모트 저장소에 마지막으로 연결했던 순간에 브랜치가 무슨 커밋을 가리키고 있었는지를 나타낸다.

리모트 트래킹 브랜치의 이름은 `/` 형식으로 되어 있다. 예를 들어 리모트 저장소 `origin` 의 `master` 브랜치를 보고 싶다면 `origin/master` 라는 이름으로 브랜치를 확인하면 된다. 다른 팀원과 함께 어떤 이슈를 구현할 때 그 팀원이 `iss53` 브랜치를 서버로 Push 했고 당신도 로컬에 `iss53` 브랜치가 있다고 가정하자. 이때 서버의 `iss53` 브랜치가 가리키는 커밋은 로컬에서 `origin/iss53`이 가리키는 커밋이다.

다소 헷갈릴 수 있으니 예제를 좀 더 살펴보자. `git.ourcompany.com` 이라는 Git 서버가 있고 이 서버의 저장소를 하나 Clone 하면 Git은 자동으로 `origin` 이라는 이름을 붙인다. `origin` 으로부터 저장소 데이터를 모두 내려받고 `master` 브랜치를 가리키는 포인터를 만든다. 이 포인터는 `origin/master` 라고 부르고 멋대로 조종할 수 없다. 그리고 Git은 로컬의 `master` 브랜치가 `origin/master` 를 가리키게 한다. 이제 이 `master` 브랜치에서 작업을 시작할 수 있다.

![Clone 이후 서버와 로컬의 master 브랜치](https://git-scm.com/book/en/v2/images/remote-branches-1.png)

*Clone 이후 서버와 로컬의 master 브랜치*

로컬 저장소에서 어떤 작업을 하고 있는데 동시에 다른 팀원이 `git.ourcompany.com` 서버에 Push 하고 `master` 브랜치를 업데이트한다. 그러면 이제 팀원 간의 히스토리는 서로 달라진다. 서버 저장소로부터 어떤 데이터도 주고받지 않아서 `origin/master` 포인터는 그대로다.

![로컬과 서버의 커밋 히스토리는 독립적임](https://git-scm.com/book/en/v2/images/remote-branches-2.png)

*로컬과 서버의 커밋 히스토리는 독립적임*

리모트 서버로부터 저장소 정보를 동기화하려면 `git fetch origin` 명령을 사용한다. 명령을 실행하면 우선 “origin” 서버의 주소 정보(이 예에서는 `git.ourcompany.com`)를 찾아서, 현재 로컬의 저장소가 갖고 있지 않은 새로운 정보가 있으면 모두 내려받고, 받은 데이터를 로컬 저장소에 업데이트하고 나서, origin/master 포인터의 위치를 최신 커밋으로 이동시킨다.

![`git fetch` 명령은 리모트 브랜치 정보를 업데이트](https://git-scm.com/book/en/v2/images/remote-branches-3.png)

*`git fetch` 명령은 리모트 브랜치 정보를 업데이트*

리모트 저장소를 여러 개 운영하는 상황을 이해할 수 있도록 개발용으로 사용할 Git 저장소를 팀 내부에 하나 추가해 보자. 이 저장소의 주소가 `git.team1.ourcompany.com` 이며 [Git의 기초](https://git-scm.com/book/ko/v2/ch00/ch02-git-basics-chapter)에서 살펴본 `git remote add` 명령으로 현재 작업 중인 프로젝트에 팀의 저장소를 추가한다. 이름을 `teamone` 으로 짓고 긴 서버 주소 대신 사용한다.

![서버를 리모트 저장소로 추가](https://git-scm.com/book/en/v2/images/remote-branches-4.png)

*서버를 리모트 저장소로 추가*

서버를 추가하고 나면 `git fetch teamone` 명령으로 `teamone` 서버의 데이터를 내려받는다. 명령을 실행해도 `teamone` 서버의 데이터는 모두 `origin` 서버에도 있는 것들이라서 아무것도 내려받지 않는다. 하지만, 이 명령은 리모트 트래킹 브랜치 `teamone/master` 가 `teamone` 서버의 `master` 브랜치가 가리키는 커밋을 가리키게 한다.

![`teamone/master` 의 리모트 트래킹 브랜치](https://git-scm.com/book/en/v2/images/remote-branches-5.png)

*`teamone/master` 의 리모트 트래킹 브랜치*



정리

* branch 개념을 파악했다.(매우 기본적)

* merge & rebase 차이점 파악

* remote / branch 파악

   