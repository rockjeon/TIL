# 면접준비 - js 질문

취업 및 이직을 위해 면접을 준비하는 자료를 시간날때 마다 정리 하려고 한다. 준비하면서 내가 부족한 부분이 뭔지 알 수 있을거 같다

> 참고: https://github.com/rockjeon/front-end-interview-handbook

* 이벤트 위임
* this
* 프로토타입 상속 

### 이벤트 위임

이벤트 위임은 이벤트 리스너를 하위 요소에 추가하는 대신 **상위 요소**에 추가하는 기법

리스너는 DOM의 event bubbling으로 인해 하위 요소에서 이벤트가 발생 될때마다 실행됨

장점

* 메모리 사용 공간이 줄어든다 - 이벤트 핸들러를 연결하지 않고, 상위 요소에 하나의 단일 핸들러만 필요하기 때문에
* 제거된 요소에서 핸들러를 해제하고 새 요소에 대해 이벤트를 바인딩할 필요가 없다.

> 참고 : [https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%9C%84%EC%9E%84---event-delegation](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/#이벤트-위임---event-delegation)



### this

* 함수를 호출할 때 `new` 키워드를 사용하는 경우, 함수 내부에 있는 `this`는 완전히 새로운 객체입니다.

~~~javascript
function exmaple () {
    console.log(this)
    this.value = 10
    console.log(this)

}
new exmaple() ;
//exmaple {}
//exmaple { value: 10 }
~~~



* apply`, `call`, `bind 가 함수의 호출/생성에 사용되는 경우, 함수 내의 this는 인수로 전달된 객체입니다.

* obj.method()와 같이 함수를 메서드로 호출하는 경우, `this`는 함수가 프로퍼티인 객체 (이름과값 또는 object reference - 프로퍼티 값이 변한 후에도 object는 그대로 남아있다) 입니다.

~~~javascript
const obj = {
    value: 1,
    printThis: function(){
        console.log(this)
    }
}
obj.printThis()
//{ value: 1, printThis: [Function: printThis] }
~~~



*  함수가 자유함수로 호출되는 경우, 즉, 위의 조건 없이 호출되는 경우 `this`는 전역 객체입니다. 브라우저에서는 `window` 객체입니다. 엄격 모드(`'use strict'`) 일 경우, `this`는 전역 객체 대신 `undefined`가 됩니다.
*  위의 규칙 중 다수가 적용되면 더 상위 규칙이 승리하고 `this`값을 설정합니다.
*  함수가 ES2015 화살표 함수인 경우 위의 모든 규칙을 무시하고 생성된 시점에서 주변 스코프의 `this`값을 받습니다.

### 프로토타입 상속-작동법

객체는 다른 객체에 대한 참조인 프로토타입(prototype) 프로퍼티를 가지고 있습니다. 객체의 프로퍼티에 접근할때 해당 객체에 해당 프로퍼티가 없다면 엔진은 객체의 프로토타입과 프로토타입 of 프로토타입 등을 찾는다.

### null, undefiend, undeclared

* undeclared 변수 : 생성되지 않은 식별자에 값을 할당할때 생성됩니다.
* undefiend : 변수는 선언 되었지만, 값이 할당되지 않았을때 생성됩니다.
* null : null 값이 명시적으로 할당된 것 입니다.값을 나타내지 않으며 명시적으로 할당됐다는 점에서 undefined 와 다르다. null 은 (===) 를 사용하여 비교 하면 된다.

### 클로저는 무엇?

클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다. 우선 클로저를 이해하기 전에 자바스크립트가 어떻게 변수의 유효범위를 지정하는지 알아야한다.