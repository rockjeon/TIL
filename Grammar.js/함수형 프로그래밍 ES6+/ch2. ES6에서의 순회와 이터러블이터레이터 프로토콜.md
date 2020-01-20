# Ch2. ES6에서의 순회와 이터러블/이터레이터 프로토콜

* 2.1 기존과 달라진 ES6 에서의 리스트 순회
* 2.2 Array, Set , Map
* 2.3  사용자 정의 
* 2.4 전개 연산자

> 모든 코드는 `<script></script>` 안에서 작성한 코드 입니다.

## 2.1 기존과 달라진 ES6 에서의 리스트 순회

* 리스트 순회는 상당히 중요하다.
* 리스트 순회가 ES6 가 되면서 많이 달라졌고 많은 발전을 이루었다.

~~~javascript
//기존의 list 순회
const list = [1, 2, 3, 4]
for(var i = 0; i< list.length ; i++ ) {
    log(list[i])
}

//ES6 순회 방법 , for..of 
for(const a of list){
    log(a)
}

~~~

## 2.2 Array, Set, Map

~~~javascript
//Arr 
const arr = [1,2,3]
for(const a of arr )log(a)

//Set
const set = new Set([1,2,3])
for(const a of set )log(a)

//Map
const map = new Map ([['a', 1], ['b' ,2], ['c',3]])
for(const a of map.keys() log(a) // a, b, c
for(const a of map.values()log(a) //1, 2, 3 
for(const a of map.entries() log(a)//['a', 1], ['b' ,2], ['c',3]
~~~

* ES6 에서의 순회는 위에 순회하는 ES5 의 for 문이랑 같은 원리로 순회하는 것 이 아니다!!

  * for of 문은 기존의 ES5 방법이랑 다르다!!

* for of 문은 `Symbol.iterator` 라는 symbol 이 있다. ES6에 추가됨.  `Symbol.iterator` 은 어떤 객체의 키로 사용 될 수 있다.

  ~~~javascript
  const arr = [1, 2, 3]
  log(arr[Symbol.iterator]) // 함수가 들어있음을 할 수 있다.
  arr[Symbol.iterator] = null; // arr is not iterator
  ~~~

즉, Array & Set & Map 은 이터러블/이터레이터 프로토콜을 따른다.

* 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator] 함수 를 가진 값.
* 이터레이터: {value, done} 객체를 리턴함. next() 를 가진값
* 즉, 이터러블/ 이터레이터 프로토콜은 이터러블을 for...of, 전개 연산자와 함께 동작 하도록 규약

~~~javascript
arr[Symbol.iterator] // 함수가 들어 있음을 알수있다.
let iterator = arr[Symbol.iterator]();
iterator.next() // {vlue:1, done: false }
iterator.next() // {vlue:2, done: false }
iterator.next() // {vlue:3, done: false }
~~~

Arr, Set, Map 모두 같은 원리다.



## 2.3 사용자 정의

~~~ javascript
//iterable 에 대해서 좀 더 정확히 이해할수 있는 예제
const iterable = {
    [Symbol.iterator](){
        let i = 3
        return{
            next() {
                return i==0 ? {done: true }:{value:i--, done: false}
            },
        	[Symbol.iterator]() { return this } // well-formed iterable
        }
    }
}
let iterator = iterable[Symbol.iterator]()
for (const a of iterable) log(a)

~~~

iterator 이면서 iterable인 객체를 well-formed iterable이라고 한다. 즉, 자기 자신의 상태를 기억할 수 있다는 뜻.

## 2.4 전개 연산자

* 전개 연산자도 이터러블/이터레이터 프로토콜을 따른다. 이터러블 / 이터레이터 프로토콜을 따르는 펼치는 연산자 라고 생각한다.

Ex)

~~~javascript
const a = [1, 2]
log(...a) // 1 2 
log([...a...[3, 4]]) // 1 2 3 4 
~~~

