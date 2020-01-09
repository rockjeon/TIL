## Grammar JS (ES6)

> 출처
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals
* Node.js 교과서 - 조현영

#### 변수

* var : 변수를 선언 추가로 동시에 초기값
* let : 블록 범위(scope) 지역변수 선언 추가로 동시에 값 초기화
* const : 블록 범위 읽기 전용 상수 선언

~~~javascript
Ex) 
if(true){
    var x = 3;
}
console.log(x);

if(true){
    const y = 3;
}
console.log(y); // y is not defined
 ~~~~
var 는 함수 스코프를 가지므로 if문의 블록과 관계없이 접근 할 수 있다. 그러나 let, const는 블록 스코프를 가지므로 블록 밖에서는 변수에 접근 할 수 없다.
let 과 const 의 차이는 const는 한 번 대입하면 다른 값을 대입할 수 없다. 따라서 const 사용, 대입이 필요하면 let

### 템플릿 문자열
~~~javascript
const x =1; 
const y =2;
const result = 3;

const string = `${x}더하기${y} 는 ${result}`

console.log(string); //1더하기2 는 3
~~~

### 객체 리터널
~~~javascript
var sayNode = function(){
    console.log('Node');
}

var es = 'ES';
var oldObject = {
    sayJS: function()   {
        console.log('js')
    },
    sayNode: sayNode,
} 

oldObject[es + 6] = 'fantastic'

oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6)

//Node, js, fantastic
const newObject = {
    sayJS() {
        console.log('js')
    },
    sayNode, 
    [es + 6]: 'fantastic'
}

newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
~~~
### 화살표 함수
~~~javascript
//add1,add2,add3,add4 같은 기능 함수

function add1 (x, y) {
    return x + y ;
}

const add2 = (x,y) => {
    return x + y ;
}

const add3 = (x, y) => x+y ;

const add4 = (x, y) => (x + Y);

// not1, not2 같은기능 
function not1 (x) {
    return !x;
}
const not2 = x => !x;

// this
const relationship2 = {
    name:'Jeon',
    frineds:['a','b','c'],
    logFriends(){
        this.frineds.forEach(friend => {
            console.log(this.name, friend)
        })
    }
}
relationship2.logFriends();
~~~

### 비구조화 할당

~~~javascript
const candyMachine = {
    status:{
        name:'rockjeon',
        count:3,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};
const {getCandy, status:{count}} = candyMachine;

//
const array = ['nodejs',{},10,true];
const [node, obj, , bool] = array;
~~~
### 프로미스
