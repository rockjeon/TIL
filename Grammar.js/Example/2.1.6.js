//EX1)
const condition = true; //true 면 reslove, false reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('sucess')
    } else {
        reject('fail')
    }
});

promise
    .then((message)=>{
        console.log(message) // 성공한경우
    })
    .catch((error)=>{
        console.error(error) // 실패한 경우
    })

/* EX2) callback 함수에 대한 이해
testCallback 함수를 정의 할 때 함수의 인자로 callback 이라는 매개변수를 정의 했습니다.
이 callback 은 함수로, testCallback 이 실행되면 함수안에서 다시 실행됩니다. callback()*/

const testCallback = function(callback){
    console.log('inside of testCallbac function')
    callback();
}
testCallback(function(){
    console.log('123123')
})


//EX3)
function fidAndSaveUSer(Users){
    Users.find({},(err,user)=>{ // 첫번째 콜백
        if(err){
            return console.error(err);
        }
        user.name = 'rockjeon'
        user.save((err)=>{ // 두번째 콜백
            if(err) {
                return console.error(err);

            }
            Users.findOne({gender: 'm'}, (err, user)=>{
                //생략
            })
        })
    })
}
//EX3에 대한 promise 사용
function findAndSaveUser(Users){
    Users.findone({})
    .then((user)=>{
        user.name = 'rockjeon'
        return user.save()
    })
    .then((user)=>{
        return Users.findOne({gender:'m'})
    })
    .then ((user)=>{
        //생략
    })
    .catch(err => {
        console.error(err);
    })
}

//promise 여러개를 한번에 실행
const promise1 = Promise.resolve('성공1')
const promise2 = Promise.resolve('성공2')
Promise.all([promise1, promise2])
    .then((result) =>{
        console.log(result)
    })
    .catch((error)=>{
        console.error(error)
    })