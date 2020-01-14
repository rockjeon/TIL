# Express. js 역할 및 구조의 이해(강의2)

> 참고: Express 공식 사이트에서 공부를 하면 좋다.(google 검색)

Ex1) **console.log(req.url)** => localhost:3000

~~~javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
~~~

(결과)



* 터미널 창에 / 라고 뜸
* 터미널 창에 /users

![image-20200114124053360](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200114124053360.png)

localhost:3000 -> 터미널 : /

  ![image-20200114124109120](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200114124109120.png)

참고: postman 으로 clinet 측에서 요청해서 결과물을 본다.

Ex2)  **localhost:3000/users**

~~~javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World'); 
  } else if (req.url === '/users'){
    const users = [
        {name:'Alice'},
        {name: 'back'}
    ]
    res.statusCode = 200;
  	res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users)); 
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
~~~

![image-20200114125205569](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200114125205569.png)

(참고) curl 를 사용해도 됩니다!!



## Express js 기초

* 어플리케이션
  * 익스프레스 인스턴스를 어플리케이션이라 한다.
  * 서버에 필요한 기능인 미들웨어를 어플리케이션에 추가한다.
  * 라우팅 설정을 할 수 있다.
  * 서버를 요청 대기 상태로 만들 수 있다.
* 미들웨어
  * 미들웨어는 함수들의 연속이다.
  * 로깅 미들웨어
  * 써드파티 미들웨어를 사용해 보자.
  * 일반 미들웨어 vs 에러 미들웨어
* 라우팅
  * 요청 url에 대해 적절한 핸들러 함수로 연결해 주는 기능을 라우팅이라 한다.
  * 어플리케이션의 get(), post() 메소드로 구현할 수 있다.
  * 라우팅을 위한 전용 Router 클래스를 사용할 수도 있다.
* 요청/응답 객체
  * 클라이언트 요청 정보를 담은 객체를 요청(request) 객체라고 한다.
  * http 모듈의 request 객체를 래핑한 것이다.
  * req.params(), req.quert(), req.body() 메소드를 주로 사용한다.
* 응답객체
  * 클라이언트 응답 정보를 담은 객체를 응답(Response) 객체라고 한다.
  * http 모듈의 response 객체를 래핑한 것이다.
  * res.send(), res.status(), res.json() 메소드를 주로 사용한다.



**서버를 요청 대기 상태로 만들 수 있다. (실습)**

1. `npm i express` 로 설치  =>  node modules 폴더 생성

~~~javascript
const express = require ('express')
const app = express()

app.listen(3000, ()=> console.log('running')) //running : 요청 대기 상태
~~~

**나의 첫 번째 미들웨어 실습** 

~~~javascript
const express = require ('express')
const app = express()

//next -> callback
const mw = (req, res, next) => {
    console.log('mw!')
    next() //next 꼭 호출 해야한다.
}

app.use(mw) // 미들웨어 사용.

app.listen(3000, ()=> console.log('running'))
~~~

(결과)

![image-20200114131156690](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200114131156690.png)

**나의 두 번째 미들웨어 실습**

* 미들웨어는 **순서**가 중요하다!
* 미들웨어는 만들일은 많지 않다 - > npm 를 활용하자!

~~~javascript
const express = require ('express')
const app = express()

//next -> callback
const mw = (req, res, next) => {
    console.log('mw!')
    next() //next 꼭 호출 해야한다.
}
const mw2 = (req, res, next) => {
    console.log('mw2!')
    next() //next 꼭 호출 해야한다.
}

app.use(mw) // 미들웨어 사용.
app.use(mw2)

app.listen(3000, ()=> console.log('running'))
~~~

**미들웨어 morgan**

~~~javascript
const express = require ('express')
const logger = require('morgan')
const app = express()

app.use(logger('dev')) 

app.listen(3000, ()=> console.log('running'))
~~~

![image-20200114132015581](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200114132015581.png)

(참고) 요청에 대한 logger 를 관리해야한다.

**에러미들웨어** 

* 에러 미들웨어는 항상 사용되는게 아니다.

* 에러 미들웨어는 인자가 4개이다.
* 에러가 발생하지 않으면 스킵한다.

~~~javascript
const express = require ('express')
const logger = require('morgan')
const app = express()

const mw = (req, res, next)=> {
    throw Error('error')
}

const errorMw = (err, req, res, next)=> {
    console.log(err.message)
}

app.use(logger('dev'))
app.use(mw)
app.use(errorMw) 

app.listen(3000, ()=> console.log('running'))
~~~

![image-20200114132546925](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200114132546925.png)



**Hello world Express 버전**

~~~javascript
const express = require ('express')
const logger = require('morgan')
const app = express()
const users = [{name: 'Alice'}]

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users',(req, res) => res.json(users))
app.listen(3000, ()=> console.log('running'))

~~~

![image-20200114134321623](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200114134321623.png)



 

