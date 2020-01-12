## 알고리즘 풀때 좋을듯! - javascript

### - 계속 풀면서 업데이트 하기

**1. match**

- 숫자, 문자 구분없이 사용 가능.
- 사용사례. 2진수에서 1의 개수 구하기. 
- match(+ 정규식)를 사용하여 간단하게 처리 가능. 
- null 처리 주의 필요.



**2.isNaN**

- \- 숫자를 체크할때 사용 (Not a Number)
- \- isNaN("123") //false - 숫자로 변환되어 처리됨
- \- isNaN(123) // false - 숫자이므로 false
- \- isNaN("asdf") // true - 숫자가 아니므로 true

**3. repeat**

- 특정 문자열을 특정 개수만큼 반복한 새문자열을 반환
- "*".repeat(3); // ***

**4.split**

- 문자열을 특정 문자를 기준으로 구분하여 배열을 만들어 반환
- var a = 15830;
  var b = a.toString().split(""); // [1, 5, 8, 3, 0]

**5. join**

- 배열을 구성하는 요소들을 특정 문자를 기준으로 구분하여 문자열로 만들어 반환
- var b = [1, 5, 8, 3, 0];
  var c = b.join(''"); // 15830
- ""를 넣지 않으면 , 를 사용하여 구분한 문자열이 출력됩니다. // 1,5,8,3,0

**6.sort & reverse**

- 배열의 요소를 정렬합니다.
- var a = [1, 5, 2, 9, 6];
  a.sort(); // a = [1, 2, 5, 6, 9]
- a.reverse(); // a = [9, 6, 5, 2, 1]
- 주의할 점은 12보다 2가 더 우선순위가 높게 정렬된다는 점 입니다.
  var a = [1, 3, 12, 2, 4];
  a.sort(); // [1, 12, 2, 3, 4];
- sort() 메소드에 매개변수로 정렬 함수를 넣어 오름차순 또는 내림차순 정렬을 구현할 수 있습니다.

**7. substr**

- 문자열에서 특정부분만 잘라낼때 사용하는 메소드 입니다.
- substr(startIndex, length);
- 첫번째 매개변수로 잘라낼 시작 index를 설정합니다.
- 두번째 매개변수로 잘라낼 문자열의 길이(length)를 설정합니다.
- 만약, 두번째 매개변수가 없다면 해당 문자열의 끝까지 잘라냅니다.
- a = "abcde";
- a.substr(1, 2); // bc

**8. substring**

- 문자열에서 특정부분만 잘라낼때 사용하는 메소드입니다.
- substring(startIndex, lastIndex);
- 첫번째 매개변수로 잘라낼 시작 index를 설정합니다.
- 두번째 매개변수로 잘라낼 마지막 index를 설정합니다.
- 만약, 두번째 매개변수가 없다면 해당 문자열의 마지막 인덱스까지 잘라냅니다.
- a = "abcde";
- a.substring(1, 2); // b
- 주의할 점은 startIndex와 lastIndex의 순서가 바뀌어도 값은 동일합니다. 즉, 최소값을 startIndex로 설정합니다. 
- index의 값이 음수가 들어오면 0으로 치환됩니다.
- a.substring(2, 1); // b





**9. slice**

- 문자열에서 특정부분만 잘라낼때 사용하는 메소드로 substring과 유사합니다.
- 차이점은 음수가 들어갔을때 length+index로 처리되어 마지막 문자를 제거할때 자주 사용됩니다.
- a = "abcde";
- a.slice(0, -1); // "abcd"





**10. Math.min, Math.max**

- 최소갑, 최대값을 구할때 사용하면 유용합니다.
- 주어지는 두개의 매개변수가 어느쪽이 더 크고, 더 작은지 판단할때 사용합니다.





**11. Array.prototype.map**

- map 메소드는 배열 내의 모든 요소 각각에 대하여 callback 함수를 호출하고 그 결과를 모아서 새로운 배열을 반환합니다.
- 배열의각 요소값의 타입을 캐스팅해야 한다고 하면, for문으로 순회하면 변경할 필요없이 map을 사용하여 간단하게 해결이 가능합니다.
- var numberList = [1, 4, 9, 16];
- var sqrtList = numberList.map((item) => item = Math.sqrt(item));





**12. Number.isInteger()**

- 정수 체크
- var a = 144, b = 145;
- var aa = Math.sqrt(144), Math.sqrt(145);
- Number.isInteger(aa); // true
- Number.isInteger(bb); // false