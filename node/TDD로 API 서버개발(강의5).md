# TDD로 API 서버개발

**첫 API 테스트 만들기** 

* 성공
  * 유저 객체를 담은 배열로 응답한다.
  * 최대 limit 갯수만큼 응답한다.
* 실패
  *  limit이 숫자형이 아니면 400 을 응답한다
  * offset이 숫자형이 아니면 400을 응답한다.

실습1)

~~~javascript
//index.spex.js

const assert = require('assert')
const should = require('should')
const request = require('supertest')
const app = require('./index')

describe('GET /users', () => {
   describe('성공',()=>{
    it('배열을 반환한다.', (done) => {
        request(app) // 서버가 띄어짐
         .get('./users')
         .end((err, res) => {
            //if(err) throw err
             res.body.should.be.instanceOf(Array)
             res.body.forEach(user =>{
                 user.should.have.property('name')
             })
             done()
         });
     });
     it('최대 limit 갯수만큼 응답한다', done => {
         request(app)
         .get('./users?limit=2')
         .end((err, res) => {
             res.body.should.have.lengthOf(2)
             
             done();
         });
     });
   })
  
   describe('실패'),()=>{
    it('limit이 정수가 아니면 400을 응답한다', done =>{
        request(app)
            .get('./users?limit=two')
            .expect(400)
            .end(done)
      })
   }
   
   
})
// 성공 배열을 반환한다
//실패 limit이 정수가 아니면 400을 응답한다.
~~~

실습2)

400 에러가 발생할수 있도록 기존 코드를 수정해 보시오!(Hint : express reference status 참고  )

~~~javascript
//index.js
const express = require ('express')
const morgan = require('morgan')
const app = express()
const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bek'},
    {id: 3, name: 'Chris'}
]

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res) => {
    req.query.limit =  req.query.limit || 10  
    const limit = parseInt(req.query.limit, 10) //limit은 문자열로 왔으니 바꿔주기
    if (Number.isNaN(limit)) { 
        res.status(400).end()
    } else {
        res.json(users.slice(0, limit))
    }   
    
    
    
})



module.exports = app

~~~

~~~javascript
const assert = require('assert')
const should = require('should')
const request = require('supertest')
const app = require('./index')

describe('GET/ users', () => {
   describe('성공',()=>{
    it('배열을 반환한다.', (done) => {
        request(app) // 서버가 띄어짐
         .get('./users')
         .end((err, res) => {
            
             res.body.should.be.instanceOf(Array)
             res.body.forEach(user =>{
                 user.should.have.property('name')
             })
             done()
         });
     });
     it('최대 limit 갯수만큼 응답한다', done => {
         request(app)
         .get('./users?limit=2')
         .end((err, res) => {
             res.body.should.have.lengthOf(2)
             
             done();
         });
     });
   })
  
   describe('실패'),()=>{
    it('limit이 정수가 아니면 400을 응답한다', done =>{
        request(app)
            .get('./users?limit=two')
            .expect(400)
            .end(done)
      })
   }
   
   
})
~~~

