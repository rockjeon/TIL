const fruits = ['사과','바나나','파인애플','멜론','수박']
fruits.push("망고");
console.log(fruits);
console.log(fruits.pop()); // pop 마지막 아이템을 제거 합니다.
console.log(fruits.shift()); // 배열의 첫번째 아이템을 제거한다
console.log(fruits.unshift("딸기"));// 배열의 앞에 딸기 추가
console.log(fruits);
console.log(fruits.indexOf("바나나"));
console.log(fruits.shift());
console.log(fruits.splice(0,1)); // 기존 요소를 삭제하거나 교체 새 요소 추가
console.log(fruits);

const FruitsCopy = fruits.slice(1,3);
console.log(fruits)
console.log(FruitsCopy)

// *map 실습*
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x*2);
console.log(map1) // output : [2, 8, 18, 32]


// *filter* 
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const result = words.filter(word => word.length > 6);
console.log(result) // ["exuberant", "destruction", "present"]

// *find* -> find() 는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
const array2 = [5, 12, 8, 130, 44];
const found = array2.find(element => element > 10);
console.log(found) //12

// *key* -> 배열의 각 인덱스를 키 값으로 가지는 새로운 Array Iterator 객체 반환
const array3 = ['a','b','c'];
const ilterator = array3.keys();

for (const key of ilterator) {
    console.log(key)
}

// *concat* -> 배열 합치기
const array4 = ['a', 'b', 'c']
const array5 = ['d', 'e', 'f']

console.log(array4.concat(array5))

// *flat* -> 중첩 배열 이어 붙혀 주는 
// const array6 = [1, 2, 3 [4, 5, 6]];
// array6.flat();

// *etnries*  -> 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 객체를 반환
const array7 = ['a', 'b', 'c'];
const ilterator7 = array7.entries();
console.log(ilterator7.next().value)

//* includes *
const array8 = [1,2,3]
console.log(array8.includes(2))
