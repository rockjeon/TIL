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

~~~javascript
function init () {
    var name = 'rockjeon' // name은 init에 의해 생성된 지역 변수
    function displayName () { //display는 내부 함수 클로저!!!
        console.log(name)
    }
    displayName()
}
init() // rockjeon (displayName 함수 내의 alert문이 부모함수에서 정의한 변수 name의 값을 성공적으로 출력한다.)
~~~

자.. init 은 지역변수 name과 함수 displayName을 생성

displayName은 init 안에 정의된 내부 함수 -> init 함수 본문에서만 사용가능

여기서 중요한건 displayName 내부엔 자신만의 지역 변수가 없다. 그런데 함수 내부에서 외부 함수의 변수에 접근할 수 있다. -> 만약 displayName이 자신만의 name 변수를 가질려면 this.name을 사용했을 것 이다.

~~~javascript
function makeFunc () {
    const name = "rockjeon"
    function displayName () {
        console.log(name)
    }
    return displayName
}

const myFunc = makeFunc() 

myFunc() // rockjeon 
~~~

displayName 함수가 실행되기 전에 외부함수 makeFunc로 부터 리턴되어 myFunc 변수에 저장된다. 몇몇 프로그래밍 언어는 makeFunc 함수 실행이 끝나면 name 변수에 더 이상 접근할 수 없게 될거라 생각 할 수 있으나 자바스크립트는 다르다. 그 이유는 함수를 리턴하고, 리턴하는 함수가 클로저를 형성하기 때문이다. **클로저는 함수와 함수가 선언된 어휘적 환경 조합니다.** 이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다. 즉 , 위의 예시로 예를 들자면 myFunc은 makeFunc이 실행될 때 생성된 displayName 함수의 인스턴스에 대한 참조! displayName의 인스턴스는 변수 name이 있는 어휘적 환경에 대한 참조! 이런 이유들로 myFunc 이 호출될때 변수 name은 사용 할 수 있는 상태로 남는다.

### forEach() & map()

forEach()

* 배열의 요소를 반복
* 각 요소에 대해 콜백을 실행
* 값을 반환하지 않음

~~~javascript
const a = [1, 2, 3]
const doubled = a.forEach((num,index) => {
    //num나 index로 무언가 합니다.
}
console.log(doubled) // undefined
~~~

map()

* 배열의 요소를 반복
* 각 요소에서 함수를 호출하여 결과로 새 배열을 작성하여 각 요소를 새 요소에 매핑

~~~javascript
const a = [1, 2, 3]
const doubled = a.map(num => {
     return num * 2
})
console.log(doubled) // [2, 4, 6]
~~~

가장 큰 차이점은 배열을 반환 한다는 것이다. 결과가 필요하지만 원본 배열을 변경하고 싶지 않다면, 좋은 선택이 될 것 이다. 그러나 단순히 배열을 반복할 필요가 있다면, forEach가 좋은 선택이 될 것 이다.

### function Person(){}, 

### var person = Person(), 

### var person = new Person()의 차이점은 무엇인가요?

이 질문은 굉장해 애매합니다. 질문의 의도에 대한 저의 최선의 추측은 JavaScript의 생성자에 대해 묻는 것입니다. 엄밀히 말하면, `function Person(){}`은 정상적인 함수 선언일 뿐입니다. 이 컨벤션은 함수생성자로 사용하기 위해 함수이름에 PascalCase를 사용합니다.

`var person = Person()`은 생성자가 아니며 `Person`을 함수로 호출합니다. 함수를 생성자로 사용하려는 경우에 이렇게 호출하는 것은 일반적인 실수입니다. 일반적으로 생성자는 아무것도 반환하지 않으므로 일반 함수처럼 생성자를 호출하면 `undefined`가 반환되고 지정된 변수에 할당됩니다.

`var person = new Person()`은 `Person.prototype`을 상속받은 `new` 연산자를 사용하여 `Person` 객체의 인스턴스를 생성합니다. 또 다른 방법은 `Object.create`를 사용하는 것입니다: `Object.create(Person.prototype)`.

```javascript
function Person(name) {
  this.name = name
}

var person = Person('John')
console.log(person) // undefined
console.log(person.name) // Uncaught TypeError: Cannot read property 'name' of undefined

var person = new Person('John')
console.log(person) // Person { name: "John" }
console.log(person.name) // "john"
```

