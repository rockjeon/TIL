## Git 브랜치

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



### Git 브랜치- 브랜치와 Merge의 기초

-----

