# Ch.4 map, filter, reduce

* 4.1 map

* 4.2 filter

* 4.3 reduce

  

> 모든 코드는  html `<script></script>`에서 실습 했습니다.

## 4.1 map

예제를 통해 배워 볼 수 있다.

~~~javascript
//ex1)
const products = [
    {name: '발팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
	{name: '바지', price: 20000}
]

let names = []
for (const p of products){
    names.push(p.name)
}
log(names) // 이름들이 배열에 담겨 출력 된다.

let prices = []
for (const p of products){
    names.push(p.price)
}
log(prices) // 가격들이 배열에 담겨 출력 된다.


//ex2는 map 이라는 함수를 만들어서 출력하는 예제
const products = [
    {name: '발팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
	{name: '바지', price: 20000}
]

const map = (f, iter) =>{
    let res = []
	for (const a of iter){
    res.push(f(a))
  }
	return res;
}

log(map(p => p.name, products))
~~~

## 4.2 filter

* filter는 특정 데이터만 갖고 올 수 있다.
* 예제를 통해 배워 볼 수 있다.

~~~javascript
//ex1)
const products = [
    {name: '발팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
	{name: '바지', price: 20000}
]

let under20000 =[]
for(const p of products) {
    if(p.price<20000) under20000.push()
}
log(...unders20000)
~~~

~~~javascript
//ex2)
const products = [
    {name: '발팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
	{name: '바지', price: 20000}
]

const filter = (f,iter) => {
    let res = []
    for (const a of iter){ 
        if(f(a)) res.push(a)
    }
    return res;
}

log(filter(p => p.price <20000, products))
~~~

## 4.3 reduce

* 값을 축약해 나가는 함수.
* 예제를 들어 알아봅시다.  ex1 은 우리가 흔히 알 수 있는 배열들을 순회해서 더한 값을 출력하는 예제이고 ex2는 reduce라는 함수를 만들어 (reduce의 구조에 대해 알 수 있다.) 그걸 통해 같은 값을 표현 할 수 있다.

~~~javascript
//ex1)
const nums = [1, 2, 3, 4, 5];

let total = 0 ;
for(const a of nums){
    total=total+a           
}
console.log(total)
~~~

~~~javascript
//ex2)
const reduce = (f, acc, iter) =>{
    
    for(const a of iter){
    acc = f(acc, a)      
}
return acc

}
const a = [1, 2, 3, 4, 5]
const add = (a,b) => (a + b)
console.log(reduce(add, 0, a))
~~~

