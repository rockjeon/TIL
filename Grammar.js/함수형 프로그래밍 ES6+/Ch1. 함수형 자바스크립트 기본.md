# Ch1. 함수형 자바스크립트 기본

* 1.1 평가와 일급
* 1.2 일급 함수
* 1.3 고차 함수 

> 모든 코드는 html `<script></script>` 에서 실습했습니다.



## 1.1평가와 일급

* 평가 : 코드가 계산 되어 값을 만드는 것 즉 ,어떤 코드가 평가 되어 값을 냄.
* 일급
  * 값으로 다룰 수 있다.
  * 변수에 담을 수 있다.
  * 함수의 인자로 사용될 수 있다.
  * 함수의 결과로 사용 될 수 있다.

~~~javascript
Ex)
const a = 10 // 변수에 담을 수 있다 
const add10 = a => a +10 //함수의 인자로 사용 될 수 있다.
const r = add10(a) //결과 20
~~~



## 1.2일급 함수

* 자바스크립트는 일급함수 -> 함수를 값으로 다룰 수 있다는 뜻 이다. 즉, 변수에 함수를 값으로 다뤄서 담을 수 있다는 뜻이다.
* 조합성과 추상화의 도구 ( 많은 조합성을 만들고, 추상화의 많은 도구로 사용하고 있다.)

~~~javascript
Ex)
const add5 = a => a+5
console.log(add5) // a => a+5
console.log(add5(5)) //결과 10

const f1 = () => () => 1;
console.log(f1())

const f2 = f1();
log(f2) // () => 1
log(f2()) //1 

~~~

즉, f1 라는 함수에 함수를 담고, 다시 f2라는 함수에 f1 함수를 담아 조합성을 만들고, 내가 원할때 값으로 표현 할 수 있다.

## 1.3 고차 함수

* 함수를 값으로 다루는 함수

  * 함수를 인자로 받아서 실행해 주는 함수

    Ex1) apply1 이라는 함수

    ~~~javascript
    const apply1 = f => f(1); // apply1 라는 함수는 f 라는 함수를 받아서 1이라는 함수를 적용하는 함수.
    
    const add2 = a => a + 2;
    log(apply(add2)) // 3
    ~~~

    Ex2) times 라는 함수 (어플리케이티브 함수)

    ~~~javascript
    const times = (f, n) => {
        let i = -1
        while (++i< n) f(i)
    }
    times(log, 3)// 0,1,2
    ~~~

* 함수를 만들어서 리턴하는 함수 (클로저를 만들어 리턴하는 함수)

  Ex) addMaker 라는 함수

  ~~~javascript
  const addMaker = a => b => a + b // b => a +b 는 a 를 기억하는 클로저!!! 
  const add10 = addMaker(10)
  log(add10) // b=> a + b
  log(add10(5)) // 15
  ~~~







