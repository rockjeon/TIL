const candyMachine = {
    status:{
        name:'rockjeon',
        count:1,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};
const {getCandy, status:{count}} = candyMachine;

const array = ['nodejs',{},10,true];
const [node, obj, , bool] = array;


