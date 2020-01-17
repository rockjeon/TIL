# Ch3. 제너레이터와 이터레이터

* 3.1 제너레이터와 이터레이터
* 3.2 odds
* 3.3 for...of, 전개 연산자, 구조분해, 나머지 연산자

> 코드는 html `<script></script>`  실습했습니다. 



## 3.1 제너레이터와 이터레이터

* 제너레이터: 이터레이터이자 이터러블을 **생성** 하는 함수 
* 정리 하자면 iterator 는 [Symbol.iterator] 를 갖고 있고, 이것의 실행 결과는 자기 자신이다.
* 제너레이터는 well-formed 이터레이터를 리턴하는 함수.

* 제너레이터의 return 값은 순회 하지 않는다. 또한 문장으로 표현 한다고도 말할 수 있다.
* 자바스크립트에서는 이터러블이면  순회 할 수 있고, 제너레이터는 이런 문장을 값으로 만들수 있고 문장을 통해서 순회할 수 있는 값을 만들수 있기 때문에 제너레이터를 통해 어떠한 값이든 순회 할 수 있다는 것이다. ( 어떠한 값도 순회할 수 있다고 보면 된다.)



## 3.2 odds

* 제너레이터를 통해 홀수만 순회하는 예제 (예제를 통해 제너레이터를 이해 할 수 있다.)

~~~javascript
function *odds() {
    yield 1;
    yield 3;
    yield 5;    
}
let iter2 = odds();
log(iter2.next()) //1 3 5
------------------------------------------------
//ex2
function *odds(l) {
    for(let i = 0; i<l; i++) {
        if(i % 2) yield i 
    }   
}
let iter2 = odds(10);
log(iter2.next())
log(iter2.next())
log(iter2.next())
log(iter2.next())
log(iter2.next())
log(iter2.next())
-----------------------------------------------------
//ex3-> ex2 와 동일한 결과 값을 낸다.
function *infinity(i = 0) {
    while (true) yield i++ 
}
function *limit(l, iter) {
    for (const a of iter) {
        yield a;
        if (a == l) return
    }
}
function *odds(l) {
  for(const a of infinity[1]){
      if(a % 2) yield a 
      if(a == l) return
  }
}
let iter2 = odds(10);
log(iter2.next())
log(iter2.next())
log(iter2.next())
log(iter2.next())
log(iter2.next())
log(iter2.next())
~~~

## 3.3 for...of , 전개연산자, 구조 분해 , 나머지 연산자

* 제너레이터는 for...of 와 같이 이터러블/이터레이터 프로토콜을 따른다면 함께 잘 사용될 수 있다. 
* 예제를 통해 익힐수 있다.

~~~javascript
log(...odds(10)) // 1 3 5 7 9
log([...odds(10), ...odds(20)]) // 1 3 5 7 9 1 3 5 7 9 11 13 15 17 19

const [head, ...tail] = odds(5)
log(head)//1
log(tail)// [3,5]

const [a, b, ...rest] = odds(10)
log(a) //1
log(b) //3
log(rest) // [ 5, 7, 9]

~~~

