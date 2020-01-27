# 면접준비 - js 질문

취업 및 이직을 위해 면접을 준비하는 자료를 시간날때 마다 정리 하려고 한다. 준비하면서 내가 부족한 부분이 뭔지 알 수 있을거 같다

> 참고: https://github.com/rockjeon/front-end-interview-handbook

* **자바스크립트**: 객체 기반의 스크립트 프로그래밍 언어이며 node 와 같은 런타임 환경과 같이 서버사이드 네트워킹 프로그래밍에도 사용된다. 특징은 빠르게 배우고 작성하기 위해 고안되었으며, 짧은 소스 코드 파일이나 REPL로 상호작용하는데 적합.

* **Node.js** : 확장성 있는 네트워크 앱 (server-side)에 사용되는 소프트웨어 플랫폼이며 Non-blocking I/O와 단일 스레드(스레드는 CPU의 이용의 기본 단위다.프로세스 내에서 프로그램 명령을 실행하는 기본 단위이자 흐름, 개체) 이벤트루프를 통한 높은 처리 성능을 가짐 

  * 참고 : 이벤트 루프는 콜 스택을 모니터하고 태스크 큐에서 수행할 작업이 있는지 확인하는 단일 스레드 루프입니다. 콜 스택이 비어 있고 태스크 큐에 콜백 함수가 있는 경우, 함수는 큐에서 제거되고 실행될 콜 스택으로 푸시됩니다.\

    > 참고: https://dongyeollee.github.io/2017/12/11/JS/EventLoop/

### 이벤트 위임

이벤트 위임은 이벤트 리스너를 하위 요소에 추가하는 대신 **상위 요소**에 추가하는 기법

리스너는 DOM의 event bubbling으로 인해 하위 요소에서 이벤트가 발생 될때마다 실행됨

장점

* 메모리 사용 공간이 줄어든다 - 이벤트 핸들러를 연결하지 않고, 상위 요소에 하나의 단일 핸들러만 필요하기 때문에
* 제거된 요소에서 핸들러를 해제하고 새 요소에 대해 이벤트를 바인딩할 필요가 없다.

> 참고 : [https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%9C%84%EC%9E%84---event-delegation](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/#이벤트-위임---event-delegation)



### this

> 참고: [https://github.com/FEDevelopers/tech.description/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94-this%EC%97%90-%EB%8C%80%ED%95%9C-%EC%84%A4%EB%AA%85-1](https://github.com/FEDevelopers/tech.description/wiki/자바스크립트에서-사용되는-this에-대한-설명-1)

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



* apply, call, bind 가 함수의 호출/생성에 사용되는 경우, 함수 내의 this는 인수로 전달된 객체입니다.

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
init() // rockjeon (displayName 함수 내의 console.log 문이 부모함수에서 정의한 변수 name의 값을 성공적으로 출력한다.)
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

### 호스트 객체와 내장객체의 차이점

* 내장 객체: ECMAScript 사양에 정의된 javascript 언어의 일부인 객체이다. (String, Math, RegExp, Object, Function)
* 호스트 객체: 런타임 환경에 의해 제공(window, XMLHTTPRequest)

### 호이스팅(Hoisting)

변수 선언의 동작을 설명하는데 사용되는 용어이다. `var` 키워드로 선언되거나 초기화된 변수는 현재 스코프(scope) 의 최상위까지 옮겨진다. 그러나 선언문만 호이스팅 되고 할당은 그대로 있게됨

~~~javascript
// var 선언이 호이스팅됩니다
console.log(foo) // undefined
var foo = 1
console.log(foo) // 1

// let/const 선언은 호이스팅되지 않습니다.
console.log(bar) // ReferenceError: bar is not defined
let bar = 2
console.log(bar) // 2
~~~

함수선언 : 함수 몸체가 호이스팅

변수선언형대: 작성된 함수 표현식은 변수 선언만 호이스팅

~~~javascript
// 함수 선언
console.log(foo) // [Function: foo]
foo() // 'FOOOOO'
function foo() {
  console.log('FOOOOO')
}
console.log(foo) // [Function: foo]

// 함수 표현식
console.log(bar) // undefined
bar() // Uncaught TypeError: bar is not a function
var bar = function() {
  console.log('BARRRR')
}
console.log(bar) // [Function: bar]
~~~

### == 와 === 의 차이점은?

* == 는 추상동등 연산자 : 타입 변환이 필요한 경우 타입 변환을 한 후에 동등한지 비교 할 것 입니다.

* ===는 완전 동등 연산자 : 타입 변환을 하지 않으므로 두 값이 같은 타입이 아닌경우 false 

~~~ javascript
1 == '1' //true
1 == [1] // true
0 == '' // true
0 == '0' //true
0 == false //true
~~~

### Callback 대신에 Promise를 사용할 때의 장점과 단점

장점

* 가독성 (콜백 지옥을 피할 수 있음)
* .then을 이용하여 연속적인 비동기 코드 작성 가능 (Ex1)
* promise.all()을 사용해 병렬 비동기 코드를 쉽게 작성(Ex2)

~~~javascript
//Ex1)
function fidAndSaveUSer(Users){
    Users.find({},(err,user)=>{ // 첫번째 콜백
        if(err){
            return console.error(err);
        }
        user.name = 'rockjeon'
        user.save((err)=>{ // 두번째 콜백
            if(err) {
                return console.error(err);

            }
            Users.findOne({gender: 'm'}, (err, user)=>{
                //생략
            })
        })
    })
}
// promise 사용
function findAndSaveUser(Users){
    Users.findone({})
    .then((user)=>{
        user.name = 'rockjeon'
        return user.save()
    })
    .then((user)=>{
        return Users.findOne({gender:'m'})
    })
    .then ((user)=>{
        //생략
    })
    .catch(err => {
        console.error(err);
    })
}

~~~

~~~javascript
//Ex2

//promise 여러개를 한번에 실행
const promise1 = Promise.resolve('성공1')
const promise2 = Promise.resolve('성공2')
Promise.all([promise1, promise2])
    .then((result) =>{
        console.log(result)
    })
    .catch((error)=>{
        console.error(error)
    })

~~~

단점

* 약간 복잡함
* ES2015를 지원하지 않는 이전 브라우저 사용시 불편함

### 오브젝트 속성 및 배열 항목을 반복할때 사용하는 언어

1. 오브젝트의 경우

* for in : 상속된 속성도 반복된다. (obj.hasOwnProperty(property)) 체크해야함
* Object.keys() - Object.keys(obj).forEach(function  (property) {....}). Object.keys()는 전달하는 객체의 열거 가능한 모든속성을 나열하는 정적 메서드
* Object.getOwnPropertyNames()- Object.getOwnPropertyNames(obj).forEach(function (property) {....}). Object.getOwnPropertyNames() 는 전달하는 객체의 열거 가능한 속성과 열거불가능한 모든 속성을 나열하는 정적 메서드

2. 배열의 경우

* for 반복 -for(var i = 0; i <arr.length ; i ++) var 이 함수 스코프로 블록 스코프가 아니다. 대부분 블록 스코프의 반복자 변수를 원할 것이란점. let 이 추가 됐고 , 이를 대신 사용할 것을 권장 
* forEach -arr.forEach(function (el, index) { ... }) 필요한 부분이 배열의 요소라면 index를 필요가 없기 때문에 편리하다.
* for- of : ES6는 string array map set 등과 같은 이터러블프로토콜을 준수하는 객체를 반복 할 수 있게 해준다. (for- of 는 루프에서 빠져 나올 수도 있고 더 한결하다.)

~~~javascript
//Arr 
const arr = [1,2,3]
for(const a of arr )console.log(a)

//Set
const set = new Set([1,2,3])
for(const a of set )console.log(a)

//Map
const map = new Map ([['a', 1], ['b' ,2], ['c',3]])
for(const a of map.keys())console.log(a)// a, b, c
for(const a of map.values())console.log(a) //1, 2, 3 
for(const a of map.entries())console.log(a) 
//['a', 1], ['b' ,2], ['c',3]
~~~

### 동기 & 비동기 함수의 차이점

동기함수는 블로킹이고 비동기는 블로킹이 아니다. 동기함수에서는 다음 명령문이 실행되기 전에 앞 명령문이 완료됩니다. 즉, 명령문의 순서대로 정확하게 평가되고 명령문 중 하나가 매우 오래 걸린다면 프로그램 일시 중지 됩니다.

반면에 비동기 함수는 일반적으로 파라미터를 통해서 콜백을 받고, 비동기 함수가 호출 된후 즉시 다음 줄 실행이 계속 된다. 예를들어 살펴 보면

1. readFileSync()  => 동기

~~~javascript
//test.txt
테스트 파일입니다.
//index.js

const fs = require('fs')
const file = fs.readFileSync('test.txt',{
    encoding:'utf8'
})
console.log(file) // 테스트 파일입니다. 
~~~

​	2. redFile()  =>비동기

~~~javascript
EX1)
const fs = require('fs')

const file = fs.readFile('test.txt', {
    encodin:'utf8'
}) //readFile 은 Worker 한테 job을 넘겨주고 다음 evevnt (console.log) 를 기다린다. 즉, 파일를 다 읽지도 않았고, worker로 넘기고 console.log 를 실행 시키려 한다.
	
console.log(file) // Undefined

EX2)
const fs = require('fs')

const callback = (err, file)=> {
    console.log(file)
}

fs.readFile('test.txt', {
    encodin:'utf8'
},callback) 

// EX1) 의 해결방법은 callback 함수: EventLoop가 파일을 읽으라고 했고 , worker한테 위임을 하고, EventLoop이 다른 event를 수신 하고 있을때 Worker는 다 읽으면 다시 EvnetLoop한테 알려줘야 하는데 그 방법을 callback 함수를 사용한다.      
~~~

### let, var, const를 사용하여 생성된 변수들의 차이점

var 키워드를 사용하여 선언된 변수는 함수가 생성된 함수나 함수 밖에서 생성된 함수에 전역 오브젝트로 적용된다. 그리고 변수는 호이스트 되도록 허용한다.

let, const 는 블록 스코프이다. let 은 변수의 값을 재할당할 수 있지만, const는 재할당 할 수 없다

----------------------

다시한번 정리 해보자!

1.EventLoop	

2.Hoisting

3.클로저

4.this

5.promise & async/await



