## Javascript 자료구조(실습)

> 출처 :https://github.com/rayleighko/js4newbie/blob/master/JS_Data_scructure/README.md

* 실습목표: 
  * Javascript 를 활용해 흔히 '자료구조'라고 부르는 데이터의 형태를 구현해보자!

### Array, 배열

---------------------

자바스크립트의 Array는 순수한 '배열'이 아닌 링크드 리스트 기반 Hash Map입니다. 하지만 여기서는 Array를 하나의 배열로 생각하고 간단한 예제를 진행하도록 하겠습니다. 또한, Array를 관리하는 내장 함수를 학습하도록 합니다.

### 배열 요구사항

- JS의 Array를 이용해 길이 5 이상의 string 배열 만들기

- JS의 Array를 이용해 기본적인 내장 함수(push, pop, shift, unshift, indexOf, splice, slice) 사용해보기

- JS의 Array를 이용해 심화적인 내장 함수(map, filter, find, keys, concat, flat, entries, includes) 사용해보기

  ~~~javascript
  
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
  } // 0, 1, 2
  
  // *concat* -> 배열 합치기
  const array4 = ['a', 'b', 'c']
  const array5 = ['d', 'e', 'f']
  
  console.log(array4.concat(array5)) //[a,b,c,d,e,f]
  
  // *flat* -> 중첩 배열 이어 붙혀 주는 
  // const array6 = [1, 2, 3 [4, 5, 6]];
  // array6.flat();
  
  // *etnries*  -> 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 객체를 반환
  const array7 = ['a', 'b', 'c'];
  const ilterator7 = array7.entries();
  console.log(ilterator7.next().value)// (0,'a')
  
  //includes -> 배열에 특정 요소를 포함 하고 있는지 확인
  const array8 = [1,2,3]
  console.log(array8.includes(2)) //true
  
  
  
  ~~~

  

## List, 리스트

자바스크립트의 Array는 순수한 '배열'이 아닌 링크드 리스트 기반 Hash Map입니다. 하지만 여기서는 일부러 Linked List를 직접 구현해보도록 하겠습니다(Array List는 생략).

### 리스트 요구사항

- 하나의 연속되는 항목들이 포인터로 연결된다.
- 마지막 항목은 Null을 가리킨다.
- 프로그램이 수행되는 동안 크기가 커지거나 작아질 수 있다.
- (시스템 메모리가 허용하는 한) 필요한 만큼 길어질 수 있다.
- 메모리 공안을 낭비하지 않는다(하지만 포인터를 위한 추가의 메모리를 필요로 한다).
- 데이터의 삽입과 삭제가 가능해야 함.

하나의 노드는 다음과 같은 모양을 가진다.

[![list-node](https://camo.githubusercontent.com/86a772373dee79464894f4e467cd956eddc5c520/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d687474702533412532462532466366696c6532312e75662e746973746f72792e636f6d253246696d61676525324632373637423533423537453844313436304331443130)](https://camo.githubusercontent.com/86a772373dee79464894f4e467cd956eddc5c520/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d687474702533412532462532466366696c6532312e75662e746973746f72792e636f6d253246696d61676525324632373637423533423537453844313436304331443130)

또한, 각 노드는 다음과 같은 모양으로 연결된다.

[![list-nodes](https://camo.githubusercontent.com/6ab949914eae91951f4d9e3f5813815987693c21/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d687474702533412532462532466366696c6532392e75662e746973746f72792e636f6d253246696d61676525324632353335344133383537453844313543314341364446)](https://camo.githubusercontent.com/6ab949914eae91951f4d9e3f5813815987693c21/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d687474702533412532462532466366696c6532392e75662e746973746f72792e636f6d253246696d61676525324632353335344133383537453844313543314341364446)



## Queue, 큐

### 큐 요구사항

- FIFO(First In First Out) 형태로 데이터의 삽입과 삭제가 일어난다.
- 데이터를 삽입하는 enqueue와 삭제하는 dequeue을 구현한다.



## Stack, 스택

### 스택 요구사항

- LIFO(Last In First Out) 형태로 데이터의 삽입과 삭제가 일어난다.
- 데이터를 삽입하는 push와 삭제하는 pop을 구현한다.



## Graph, 그래프

여러 그래프 형태 중 무방향성 그래프이자 인접 리스트인 그래프를 구현하는 것을 목적으로 한다.

### 그래프 요구사항

- 하나의 노드는 특정한 값을 가지고 있다.
- 하나의 노드는 하나 이상의 엣지를 가질 수 있다. 단, null도 허용한다.
- 그래프의 데이터는 선언 시 결정된다. 단, 추가 혹은 삭제 기능을 포함해 구현하면 좋다.



## Tree, 트리

여러 트리 형태 중 가장 기본적인 트리의 형태를 구현하는 것을 목적으로 한다.

### 트리 요구사항

- 하나의 노드는 특정한 값을 가지고 있다.
- 하나의 노드는 하나 이상의 자식을 가질 수 있다. 단, null도 허용한다.
- 트리의 데이터는 선언 시 결정된다. 단, 추가 혹은 삭제 기능을 포함해 구현하면 좋다.



