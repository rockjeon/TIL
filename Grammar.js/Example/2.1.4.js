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