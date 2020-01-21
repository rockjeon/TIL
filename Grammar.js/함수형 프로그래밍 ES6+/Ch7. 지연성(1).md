# Ch7. 지연성(1)

* 7.1 range와 느긋한 L.range 
* take

> 모든 코드는 html `<script></script>` 에서 실습했습니다.



## 7.1 range와 느긋한 L.range

~~~javascript
const add = a, b => a + b

const range = l => {
    let i = -1
    let res = []
    while (++i < l){
        res.push(i)
    }
    return res
}

var list = range(4)
log(list) // [0, 1, 2, 3]
log(reduce(add, list)) //6
~~~

* 느긋한 L.range (제너레이터 함수)

~~~javascript
const add = a, b => a + b

const L ={}
L.range = function *(l){
    let i = -1
    while (++i < l){
        yeild i
    }
}

var list = L.range(4)
log(list)// L.range {<suspended>}-> iterator
log(reduce(add, list)) //6
~~~

< range 와 L.range 의 차이점 >

같은 결과값을 낸 이유는 reduce가 이터러블을 받기 때문이다. 그런데 range 와 L.range는 차이가 있다. range는 reduce의 list 를 전달하기 전에 range가 실행 됐을때 즉시 코드가 배열로 완전히 평가가 되었다. L.range는 `list.next()` 즉, list가 순회가 될때 실행 되는 것을 알 수 있다.  결과적으로 range 와 L.range 테스트를 해보면 L.range가 훨씬 효율적인걸 알수 있다.

~~~javascript
//test
function test(name, time, f) {
    console.time(name)
    while (time--)f()
    console.timeEnd(name)
}
test('range', 10, () => reduce(add, range(1000000)))// 약 489.68...
test('L.range', 10, () => reduce(add, L.range(1000000))) // 약 257.204...
~~~

## 7.2 take

* take 함수를 통해 짤라서 출력 할수 있다. 이터러블 프로토콜을 따르고, 이터러블을 받아서  안에 값을 next 를 통해 순회해서 꺼내서 push 하는 로직이다.  조합성이 좋다. 효율적이다.

~~~javascript
const take = (l, iter) => {
    let res = []
    for (const a of iter) {
        res.push(a)
        if (res.length == l ) return res
    }
    return res
}
log(take5, range(100))
~~~



