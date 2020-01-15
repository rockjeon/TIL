# GET / user / :id

예를 들면 특정회원에게 회원정보를 보여주거나 할때 특정 user data를 갖고 와야한다. 즉, 모든 user의 정보를 갖고 오는게 아니고 특정 유저의 대한 data를 갖고 올때.

* success
  * id가 1인 유저 객체를 반환한다.
* error 
  * id가 숫자가 아닐경우 400으로 응답한다.
  * id로 유저를 찾을수 없을 경우 404 로 응답한다.

성공 case

~~~javascript
//index.js
const express = require ('express')
const logger = require('morgan')
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
app.get('/users/:id', (req,res) =>{
    const id = parseInt(req.params.id, 10)
    const user =users.filter(user => user.id ===id) [0]
    res.json(user)


})
module.exports = app
~~~

~~~javascript
//index.spec.js
const assert = require('assert')
const should = require('should')
const request = require('supertest')
const app = require('./index')

describe('GET /users', () => {
   describe('성공',()=>{
    it('배열을 반환한다.', (done) => {
        request(app) // 서버가 띄어짐
         .get('/users')
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
         .get('/users?limit=2')
         .end((err, res) => {
             res.body.should.have.lengthOf(2)
             
             done();
         });
     });
   })
  
   describe('실패'),()=>{
    it('limit이 정수가 아니면 400을 응답한다', done =>{
        request(app)
            .get('/users?limit=two')
            .expect(400)
            .end(done)
      })
   }    
})

// 성공사례 
describe('GET /users/:id', () =>{
    describe('성공', () =>{
        it('유저 객체를 반환한다', done =>{
            request(app)
            .get('/users/1')
            .end((err, res)=>{
                res.body.should.have.property('id', 1)
                done()
            })

            
        })
    })
    describe('실패', ()=>{

    })

 })

~~~

실패case (에러 처리)

~~~javascript
//index.js 

const express = require ('express')
const logger = require('morgan')
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
app.get('/users/:id', (req,res) =>{
    const id = parseInt(req.params.id, 10)
    if(Number.isNaN(id)){
        res.status(400).end()
        return
    }
    const user =users.filter(user => user.id ===id) [0]
    if(!user){
        return res.status(404).end()
    }

    res.json(user)
})
module.exports = app
~~~

~~~javascript
//index.spec.js
const assert = require('assert')
const should = require('should')
const request = require('supertest')
const app = require('./index')

describe('GET /users', () => {
   describe('성공',()=>{
    it('배열을 반환한다.', (done) => {
        request(app) // 서버가 띄어짐
         .get('/users')
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
         .get('/users?limit=2')
         .end((err, res) => {
             res.body.should.have.lengthOf(2)
             
             done();
         });
     });
   })
  
   describe('실패'),()=>{
    it('limit이 정수가 아니면 400을 응답한다', done =>{
        request(app)
            .get('/users?limit=two')
            .expect(400)
            .end(done)
      })
   }    
})

// 성공사례 
describe('GET /users/:id', () =>{
    describe('성공', () =>{
        it('유저 객체를 반환한다', done =>{
            request(app)
            .get('/users/1')
            .end((err, res)=>{
                res.body.should.have.property('id', 1)
                done()
            })

            
        })
    })
    describe('실패', ()=>{
        it('id가 숫자가 아닐경우 400 응답', (done)=> {
            request(app)
                .get('/users/one')
                .expect(400)
                .end(done)
        })
        it('찾을수 없는 id일 경우 404 응답', (done)=> {
            request(app)
            .get('/users/9')
            .expect(404)
            .end(done)
        })
    })

 })

~~~

# DELETE /users/:id

유저를 지우는 실습.

* success
  * 204를 응답한다.
* error
  * id가 숫자가 아닐경우 400 으로 응답한다.

~~~javascript
//index.js
const express = require ('express')
const logger = require('morgan')
const app = express()
let users = [
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
app.get('/users/:id', (req,res) =>{
    const id = parseInt(req.params.id, 10)
    if(Number.isNaN(id)){
        res.status(400).end()
        return
    }
    const user =users.filter(user => user.id ===id) [0]
    if(!user){
        return res.status(404).end()
    }

    res.json(user)
})
app.delete('/users/:id',(req, res) => {
    const id = paseInt(req.params.id, 10)
    if (Number.isNaN(id)){
        res.status(400).end()
        return
    }
    users = users.filter(user =>user.id !==id) // 변수 users 원래 상수 (const) 로 지정했으나, let 으로 변경!!

})

module.exports = app
~~~

~~~javascript
//index.spec.js

const assert = require('assert')
const should = require('should')
const request = require('supertest')
const app = require('./index')

describe('GET /users', () => {
   describe('성공',()=>{
    it('배열을 반환한다.', (done) => {
        request(app) // 서버가 띄어짐
         .get('/users')
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
         .get('/users?limit=2')
         .end((err, res) => {
             res.body.should.have.lengthOf(2)
             
             done();
         });
     });
   })
  
   describe('실패'),()=>{
    it('limit이 정수가 아니면 400을 응답한다', done =>{
        request(app)
            .get('/users?limit=two')
            .expect(400)
            .end(done)
      })
   }    
})

// 성공사례 
describe('GET /users/:id', () =>{
    describe('성공', () =>{
        it('유저 객체를 반환한다', done =>{
            request(app)
            .get('/users/1')
            .end((err, res)=>{
                res.body.should.have.property('id', 1)
                done()
            })

            
        })
    })
    describe('실패', ()=>{
        it('id가 숫자가 아닐경우 400 응답', (done)=> {
            request(app)
                .get('/users/one')
                .expect(400)
                .end(done)
        })
        it('찾을수 없는 id일 경우 404 응답', (done)=> {
            request(app)
            .get('/users/9')
            .expect(404)
            .end(done)
        })
    })

 })

describe('DELETE /users/:id', () => {
    describe('성공', ()=>{
        it('204 응답을 한다.', done=> {
            request(app)
            .delete('/users/3')
            .expect(204)
            .end(done)
        })
    describe('실패', ()=>{
        it('id가 숫자가 아닐경우 400이다.', done =>{
            request(app)
            .delete('/users/three')
            .expect(404)
            .end(done)
        })
    })
    })
} )
~~~

# POST /users

* success
  * 201 상태코드를 반환한다.
  * 생성된 유저 객체를 반환한다.
  * 입력한 name을 반환한다.
* error 
  * name파라매터 누락시 400을 반환한다.
  * name이 중복일 경우 409를 반환한다.

~~~javascript
//index.js
const express = require ('express')
const logger = require('morgan')
const app = express()
const bodyParser = require('body-parser')

let users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bek'},
    {id: 3, name: 'Chris'}
]

app.use(logger('dev'))
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 

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
app.get('/users/:id', (req,res) =>{
    const id = parseInt(req.params.id, 10)
    if(Number.isNaN(id)){
        res.status(400).end()
        return
    }
    const user =users.filter(user => user.id ===id) [0]
    if(!user){
        return res.status(404).end()
    }

    res.json(user)
})
app.delete('/users/:id',(req, res) => {
    const id = paseInt(req.params.id, 10)
    if (Number.isNaN(id)){
        res.status(400).end()
        return
    }
    users = users.filter(user =>user.id !==id) // 변수 users 원래 상수 (const) 로 지정했으나, let 으로 변경!!

})
app.post('/users',(req, res)=> {
    const name = req.body.name
    if (!name) {
        return res.status(400).end()
    }
    
    const found = users.filter(user => user.name === name).length
    if (found) {
        return res.status(409).end()
    }

    const id = Date.now()
    const user = {id, name}
    users.push(user)
    res.status(201).json(user)
})

module.exports = app
~~~

~~~javascript
//index.spec.js

const assert = require('assert')
const should = require('should')
const request = require('supertest')
const app = require('./index')

describe('GET /users', () => {
   describe('성공',()=>{
    it('배열을 반환한다.', (done) => {
        request(app) // 서버가 띄어짐
         .get('/users')
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
         .get('/users?limit=2')
         .end((err, res) => {
             res.body.should.have.lengthOf(2)
             
             done();
         });
     });
   })
  
   describe('실패'),()=>{
    it('limit이 정수가 아니면 400을 응답한다', done =>{
        request(app)
            .get('/users?limit=two')
            .expect(400)
            .end(done)
      })
   }    
})

// 성공사례 
describe('GET /users/:id', () =>{
    describe('성공', () =>{
        it('유저 객체를 반환한다', done =>{
            request(app)
            .get('/users/1')
            .end((err, res)=>{
                res.body.should.have.property('id', 1)
                done()
            })

            
        })
    })
    describe('실패', ()=>{
        it('id가 숫자가 아닐경우 400 응답', (done)=> {
            request(app)
                .get('/users/one')
                .expect(400)
                .end(done)
        })
        it('찾을수 없는 id일 경우 404 응답', (done)=> {
            request(app)
            .get('/users/9')
            .expect(404)
            .end(done)
        })
    })

 })

describe('DELETE /users/:id', () => {
    describe('성공', ()=>{
        it('204 응답을 한다.', done=> {
            request(app)
            .delete('/users/3')
            .expect(204)
            .end(done)
        })
    describe('실패', ()=>{
        it('id가 숫자가 아닐경우 400이다.', done =>{
            request(app)
            .delete('/users/three')
            .expect(404)
            .end(done)
        })
    })
    })
} )

describe('POST /users', ()=>{
    describe('성공',()=>{
        it('201을 응답 , 생성된 유저 객체를 반환한다.', done =>{
            request(app)
            .post('/users').send({name: 'Daniel'})
            .expect(201).end()
            .end((err, res)=>{
                res.body.should.have.property('name', 'Daniel')
                done()
            })
     })
        
})

    describe('실패',()=>{
        it('name이 없으면 400', done =>{
            request(app)
            .post('/users').send({})
            .expect(400).end(done)
        })
        it('name이 중복 되면 409 응답', done=>{
            request(app)
                .post('/users').send({name:'Alice'})
                .expect(409).end(done)
        })
    })


})

~~~



