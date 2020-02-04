## 1.Angular 소개

* 구글의 자바스크립트 프레임워크.
* 정적타입, Typescript 를 주력 언어로 채택 (Ts 학습 요망)



## 2. Angular와 AngularJS의 차이점

* Angular는 컴포넌트 기반 개발 (CBD)
* 선택적 데이터 바인딩을 지원하고 디렉티브와 서비스, 의존성 주입은 간소화
* 주력 언어 Typescript 대규모 개발에 적합한 m정적 타입과 인터페이스 
* ECMAscript6 -> 모듈, 클래스 & ECMAScript7의 데코레이터 지원

## 3.Angular 의 장점

* 컴포넌트가 개발의 중심 (CBD)
* TypeScript의 도입
  * 다양한 도구의 지원, 높은 수준의 인텔리센스, 코드 어시스트, 타입체크,리펙토링등을 지원
  * 코드의 가독성, 컴파일 단계에서 오류 포착
* Angular CLI 를 통해 개발 환경 구축을 지원

## 4.Angular CLI 

* 기본적으로 필요한 기능의 구현체를 정형화된 구조로 제공

  * Angular 프로젝트 스캐폴딩(scaffolding) 을 생성, 실행, 빌드 & 커멘드-라인 인터페이스

* Angular CLI 가 지원하는 기능

  * 프로젝트생성
  * 컴포넌트, 디렉티브, 파이프, 서비스, 클래스, 인터페이스 등의 구성추가
  * LiveReload를 지원하는 내장 개발 서버를 사용한
  * E2E 테스트 환경 지원

* CLI 설치

  > 참고 : https://poiemaweb.com/angular-cli

* Angular CLI가 내장하고 있는 개발용 서버는 코드의 변경을 감지하여 자동으로 브라우저를 리로드하는 LiveReload 기능을 제공한다. (즉, 코드 바꿔도 자동으로 바꿔 준다는 뜻)