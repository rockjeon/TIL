# Node.js 기반의 REST API 서버개발-김정환님 (강의1)

* 테스트주도개발(TDD)로 Node.js를 이용해 API 서버개발을 학습할 수 있는 세미나 입니다. 

* 자바스크립트 기술로 구현된 Node.js와 대표적인 웹 프레임웍인 Express.js의 기본 원리를 이해한다.
* 이를 기반으로 모바일과 웹서비스에서 사용하는 REST API 개발 방법을 학습합니다.

## 개발 환경 

* node 설치 (v10.16.0)
* VScode
* 터미널
* Git ( 옵션 )



## Node.js 의기초

* 브라우저 밖에서 자바스크립트 코드를 실행한다.
* 크롬에서 사용하는 V8 엔진 사용
* 이벤트 기반의 비동기 I/O 프레임워크 
  * EventLoop -> client 요청하면 event가 발생하고 ->EventLoop(로직) 생성-> client
  * 무거운일 (파일을 읽거나/DB조회등) -> Event Loop ->Non-blocking Worker -> Event Loop    ->client
  * 싱글스레드 
  * 쉽게 이해하자[ 동기: 하나씩 처리 / 비동기: 

* 모듈 시스템

  * 브라우저에서는 윈도우 컨텍스트를 사용하거나, RequireJS 같은 의존성 로더사용.
  * 노드는 파일형태로 모듈을 분리 할 수 있는 CommonJS로 구현

  1. 기본모듈

  ~~~javascript
  const util = require('util') // util( node 모듈 ) 
  
  const name = 'world'
  const msg = util.format('Hello %s',name)
  
  console.log(msg) // Hello world
  ~~~

  2. 서브파티 라이브러리 (ex. Express )
  3. 사용자 모듈
     * 직접 사용자가 만들어서 사용 할 수 도 있다. (참고 : 경로를 설정해야한다.)

  ~~~javascript
  //math.js
  const math = {
      add(a,b){
          return a + b
      }
  }
  module.export = math
  
  //index.js
  const math = require('./math')
  console.log(math.add(1,2)) //3
   
  ~~~



## 비동기 세계

* 노드는 기본적으로 비동기로 동작함.

  * node를 하려면기본적으로 비동기에 대해 고민할 필요가 있다.
* readFile() vs readFileSync() [ 동기 vs 비동기]

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



**서버를 띄어보자! ( Hello world)** 

~~~javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // res: 응답객체 req: 요청객체 
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
~~~

![image-20200114114515656](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200114114515656.png)

**postman 사용!**  => client 에서 요청을 해보자! ( curl 과 같은 기능)

![image-20200114114556894](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200114114556894.png)

