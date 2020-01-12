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

/*callback 함수에 대한 이해
testCallback 함수를 정의 할 때 함수의 인자로 callback 이라는 매개변수를 정의 했습니다.
이 callback 은 함수로, testCallback 이 실행되면 함수안에서 다시 실행됩니다. callback()*/

const testCallback = function(callback){
    console.log('inside of testCallbac function')
    callback();
}
testCallback(function(){
    console.log('123123')
})

//callback 예시
function findAndSaveUser(Users) {
    Users.findOne({}, (err,user)=>{ //첫 번째 콜백
        if (err) {
            return console.error(err)
        }
    user.name ='rockjeon';
    return user.save();
    })
    .then((user)=>{
        return Users.findOne({gender:'m'});
    })
    //생략
    .catch(err => {
        console.error(err)
    })
}