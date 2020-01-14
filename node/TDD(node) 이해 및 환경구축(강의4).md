## 테스트 주도 개발

* TDD로 개발하자.
* mocha, should, superTest

#### Mocha

* 테스트 코드를 돌려주는 테스트 러너
* 테스트 꾸러미 : 테스트 환경으로 모카에서는 describe() 으로 구현한다.
* 테스트 케이스 : 실제 테스트를 말하며 모카에서는 it() 으로 구현한다.

환경구축

1.mocha 설치 : `npm i mocha --save-dev`

![image-20200114142432458](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200114142432458.png)

(참고) 개발환경에서 필요하기 때문에 `--save-dev` 사용



2. // index.spec.js 라는 파일을 만들어 준다. (mocha test를 할 시 spec라는 표현을 주로 씀)

~~~javascript
// index.spex.js 파일
const assert = require('assert')

describe('GET / users',() => {
    it('배열을 반환한다.',() => {
        assert.equal(1,1)
    })
})
~~~

3. package.json 에서 "scripts" 부분을 수정한다.

![image-20200114143257758](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200114143257758.png)

4. `npm test` 입력

![image-20200114143329214](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200114143329214.png)

#### Should 

* should 는 검증 라이브러리다. **( mocha 는 test 를 돌려주고, should 로 검증한다!!!)**
* `npm i should --save-dev` 로 설치

~~~javascript
const assert = require('assert')
const should = require('should')

describe('GET / users',() => {
    it('배열을 반환한다.',() => {
        //assert.equal(1,1)
    	(1).should.equal(1)
    })
})
~~~



#### SuperTest(API 통합 테스트를 할거다 우리는!! 그러면 superTest 다.)

* 단위 테스트 : 함수의 기능테스트
* 통합 테스트: API의 기능 테스트 ( node 에서  통합 테스트 하는건 "supertest")
* 슈퍼테스트는 익스프레스 통합 테스용 라이브러리다.
* 내부적으로 익스프레스 서버를 구동시켜 실제 요청을 보낸뒤 결과를 검증한다.

~~~javascript
//index 파일
const express = require ('express')
const logger = require('morgan')
const app = express()
const users = [{name: 'Alice'}]

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res) => res.json(users))
//app.listen(3000, ()=> console.log('running'))

module.exports = app
~~~

~~~javascript
//index.spec.js
const assert = require('assert')
const shoould = require('should')
const request = require('supertest')
const app = require('./index')

describe('GET /users', () => {
    it('배열을 반환한다.', (done) => {
       request(app) // 서버가 띄어짐
        .get('./users')
        .end((err, res) => {
          console.log(res.body)
            
            done()
        })
    })
})

~~~





