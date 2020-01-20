# Ch6 장바구니 예제

* 6.1 총 수량, 총 가격
* 6.2 HTML 로 출력하기

> 코드는 html  `<script></script>` 에서 실습 했습니다.



## 6.1 총 수량, 총 가격

~~~javascript
const products = [
    {name: '발팔티', price: 15000, quantity: 1},
    {name: '긴팔티', price: 20000, quantity: 2},
    {name: '핸드폰케이스', price: 15000, quantity: 3},
    {name: '후드티', price: 30000, quantity: 4},
	{name: '바지', price: 25000, quantity: 5}
]
//case1.
const add = (a, b) => (a + b)

const totalQuantity = pipe(
  map(p => p.quantity),
  reduce(add)// 총 수량
 	
  log(totalQuantity(products))

const totalPrice = pipe(
	map(p.price * p.quantity)
    reduce(add)

log(totalPrice(products)) // 합산된 모든 가격이 출력

//case2. 중복을 줄이고 좀 더 추상화 시켜보자!(코드를 간결하게 해보자) *curry 사용

const add = (a, b) => a + b

const sum = curry((f, iter) => go(
	iter,
    map(f)
    reduce(add)))

const totalQuantity = sum(p => p.quantity)

const totalPrice = sum(p => p.price * p.quantity)
~~~

