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
    it('limit이 정수가 아니면 400을 응답한다',done =>{
        request(app)
            .get('./users?limit=two')
            .expect(400)
    })
   }
   
   
})