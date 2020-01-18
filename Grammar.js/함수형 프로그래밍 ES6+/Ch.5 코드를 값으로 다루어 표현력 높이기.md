# Ch.5 코드를 값으로 다루어 표현력 높이기

* 5.1 go
* 5.2 pipe
* 5.3 go 함수를 이용해 좋은 코드 만들기
* curry 함수

## 5.1 go

* 코드를 값으로 다루어 표현력 높이기.
* 첫번째 인자값을 받고,  두번째부터 함수를 받아 순차적으로 연산한다.

ex) go 라는 함수 만들기.

~~~javascript
//ex1)
go(
	0,
    a => a + 1,
    a => a + 10,
    a => a + 100,
    log) //이러한 로직의 함수를 ex2)에 만들고 싶다. 결과)111

//ex2)
const go = (...args) => reduce((a, f) =>f(a), args)// args를 하나로 만들기 때문에 reduce 사용
 go(
	0,
    a => a + 1,
    a => a + 10,
    a => a + 100,
    log) 

~~~

## 5.2 pipe

* pipe 는 go 함수와 다르게 함수를 리턴하는 함수이다. 합성된 함수를 만드는 것 이다.

~~~javascript
const go = (...args) => reduce((a, f) =>f(a), args)// args를 하나로 만들기 때문에 reduce
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
go(
	add(0, 1)
    a => a + 1,
    a => a + 10,
    a => a + 100,
    log) // args를 하나로 만들기 때문에 reduce

const f = pipe(
	(a, b) => a + b;
    a => a + 10,
    a => a + 100,
)
log(f(0, 1))

~~~

## 5.3 go 함수를 이용해 좋은 코드 만들기

~~~javascript
//ex1)
log(
	reduce(
    	add,
        map(p => p.price, 
           filter(p => p.price<20000, products))))
~~~

~~~javascript
//ex2)
//ex1의 함수를 go 함수를 이용해서 좋은 코드로 만들어 봅시다.
go(
	products,
    products => filter(p => p.price < 20000, products), //필터를 걸어주고
    products => map(p => p.price, products), //map 으로 뽑고 
    prices => reduce(add, prices), // reduce 로 하나를 만들어 
	log) // 출력한다.
~~~

## 5.4 curry 함수

* curry는 함수를 값으로 다루면서 받아둔 함수를 내가 원할때 평가 하는 함수. 함수를 받아서 함수를 리턴하고, 인자를 받아서 나중에 평가 시키는 함수.
* 함수에 인자를 하나씩 적용해 나가다가 함수의 본체를 실행하는 기법.

~~~javascript
//ex1
const curry = f => 
(a, ...) => .length ? f(a, ...) : (...) => f(a, )

//ex2
go(
	products,
    products => filter(p => p.price < 20000, products), //필터를 걸어주고
    products => map(p => p.price, products), //map 으로 뽑고 
    prices => reduce(add, prices), // reduce 로 하나를 만들어 
	log) // 출력한다.

//curry 함수를 이용하면 코드가 훨씬 간결해진다. *(map, filter, reduce 함수에 curry 함수를 걸어줘야 한다.)
go(
	products,
    filter(p => p.price<2000),
    map(p => p.price),
    reduce(add),
	log)
~~~

