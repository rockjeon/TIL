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
    res.json(users.slice(0, limit))
})



module.exports = app