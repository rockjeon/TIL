# 생활코딩 - php

#### php 요약

* server side scipt : 서버 측 기술, 언어

* server 와 client 의 관계

* CGI 는 (common gateway interface) : server와 php엔진의 통신규약

* Web 을 위한 언어이며, 대부분 hosting 환경에서 사용 가능, interpreter
* phpbb : 포럼 게시판 (?)

* 단점: web only 

### 맥에 php 설치

* bitnami 홈페이지에서 MAMP 설치하기

> https://bitnami.com/stacks

* 안에 index file살펴봄

------

### 1.숫자와 문자

~~~php
<?php
 echo 6 ;//숫자 표현
  ?>

<?php
var_dump(6);//int(6)
  ?>
    
~~~

* `var_dump` 는 데이터 타입을 알 수 있다.

**문자**

~~~php
<?php   
   echo "Hello world";
?>
~~~

* 문자열의 결합은 php 에서는 `.` 이다. 

~~~php
<?php
echo '그는 "안녕하세요"라고 말했다.'
  ?>

  //or

  <?php
echo "그는 \"안녕하세요\"라고 말했다."
  ?>
    
~~~

### 2.변수

~~~php
<html>
<body>
<?php
$a = 1;
print $a + 1; #2
print "<br />";
print $a + 2; #3
?>
</body>
</html>
~~~

* echo 와 print 는 같다.
* 변수 할당은 $ 
  * $a = 1; a라는 변수에 1 대입. 
  * 주석: # , /* */

~~~php
<html>
<body>
<?php
$first = "coding";
print $first." everybody"; #coding everybody
?>
</body>
</html>
~~~

### 3.비교 

* 프로그래밍에서 비교란 주어진 값들이 같은지, 다른지, 큰지, 작은지를 구분하는 것을 의미한다. 이 때 비교 연산자를 사용하는데 비교 연산자의 결과는 true나 false 중의 하나다. true는 비교 결과가 참이라는 의미이고, false는 거짓이라는 뜻이다. 아래는 주요한 비교 연산자들의 종류와 그에 따른 예제들이다.

**==** 

~~~php
<html>
<body>
<?php
var_dump(1=="2"); #bool(false)
?>
</body>
</html>
~~~

**!=**

'!'는 부정을 의미한다. '같다'의 부정은 '같지 않다'이다. 이것을 기호로는 '!='로 표시한다. 아래의 결과는 !=의 결과인데 ==와 정반대의 결과를 보여준다.

~~~php
<html>
<body>
<?php
echo "1!=2 : ";
var_dump(1!=2);           #true
echo '<br />';
echo "1!=1 : ";
var_dump(1!==1);           #false
echo '<br />';
echo '"one"!="two" : ';
var_dump("one"!="two");   #true
echo '<br />';
echo '"one"!="one" : ';
var_dump("one"!="one");   #false
echo '<br />';
?>
</body>
</html>
~~~

### 4.입.출력 그리고 폼과 HTTP

프로그램은 입력 값을 가질 수 있다. 그리고 입력 값에 따라서 동작 방법이 달라지건나 입력된 값을 저장/삭제/출력 할 수 있다.

ex)

~~~php
<?php
echo $_GET['id'];
?>
~~~

ex)

`http://127.0.0.1:8080/number_string/number_string.php?name=sangwook`

? 후의 name 은 값의 이름이고, sangwook은 값이다.

~~~php
<?php
echo $_GET['id'].",". $_GET['password']
?>
~~~

`http://127.0.0.1:8080/number_string/number_string.php?id=sangwook&password=11111`

& : and

### 5.조건문

조건문은 if로 시작한다. if 뒤에 괄호가 오고, 괄호 안에 조건이 위치한다. 조건이 될 수 있는 값는 Boolean이다. Boolean의 값이 true라면 조건을 감싸고 있는 괄호 다음의 중괄호 구간이 실행된다.

~~~php
<$php
  if(true){
    echo 'result : true';
  }
  ?>
~~~

* php 의 조건문도 다른 언어와 똑같다 판단.

### 6.반복문

**while**

~~~php
<?php
  $i = 0;
  while($i <10){
      echo 'result';
      $i += 1;
  }
?>
~~~

**for**

~~~php
<?php
 for($i = 0; $i< 10; $i++){
   echo 'for 문 예시'
 }
 ?>
  
~~~



### 7.함수

* 코드에 대한 재활용성
* 정의(define), 호출(call) 

~~~php
<?php
 	function numbering() {
  $i = 0;
  while ($i < 10) {
    echo $i;
    $i += 1;
  }
} 
numbering();
 ?>
~~~

**함수의 입.출력**

함수의 핵심은 입력과 출력이다. 입력된 값을 연산해서 출력하는 것이 함수의 기본적인 역할이다. 

~~~php
<?php
  function getMember1() {
  		return 'sangwook'
}
getMember1();
?>
~~~

**입력**

인자(argument)는 한수로 유입되는 입력 값을 의미하는데, 어떤 값을 인자로 전달하느냐에 따라서 함수가 반환하는 값이나 메소드의 동작방법을 다르게 할 수 있다.

ex)인자가 1개인 경우. 

~~~php
<?php
function getArgument($arg) {
    #$arg = 1 ;
    return $arg;
}

print getArgument(1); #1 -> 함수 전체가 1이 된다.
print getArgument(2); #2 -> 함수 전체가 2가 된다.

?>
~~~

ex) 인자가 2개인 경우.

~~~php
<?php
function addMaker($arg1, $arg2) {
    return $arg1 + $arg2;
}
print addMaker(20, 20);

?>
~~~

ex)

~~~php
function get_argumnets($arg1 = 100) {
    return $arg1;
}
echo get_argumnets(1);
echo ',';
echo get_argumnets();
?>
~~~

* 지역변수와 전역변수 

~~~php
<?php
function get_arguments($arg){
    return $arg;
}
echo get_arguments();
echo $arg;

?>
~~~

### 8.배열

* 배열 문법

~~~php
<?php
$member = ['egoing', 'k8805', 'sorialgi'];
echo $member[0].'<br />';
echo $member[1].'<br />';
echo $member[2].'<br />';
?>
~~~

~~~php
<?php
function getMembers(){
    return ["dfcdf", "asdf", "wer"];
}
var_dump(getMembers());

?>
  # array(3) { [0]=> string(5) "dfcdf" [1]=> string(4) "asdf" [2]=> string(3) "wer" }
 
<?php
function getMembers(){
    return ["dfcdf", "asdf", "wer"];
}
echo getMembers()[1]; 

?>
# asdf
~~~

* 배열과 반복문 (배열 사용)

~~~php
<?php
function getMembers(){
    return ["dfcdf", "asdf", "wer"];
}
$members = getMembers();

for($i = 0; $i< count($members); $i++) {
    echo ucfirst($members[$i]).'<br />';
}

?>
~~~

* 배열의 제어

~~~php
#push 사용

<?php
$i = ["a", "b", "c", "d", "e"];
array_push($i, 'f');
var_dump($i);
?>
~~~

~~~php
<?php
$i = ["c", "b", "a", "e", "d", "z"];
sort($i);
var_dump($i);
?>
# 순차적으로 정리 가능.
~~~

> shift, unshift / push, pop 등이 있다. 다양한 방법이 있다(google -> php array function)

* 연관배열(associative array)

지금까지 살펴본 배열은 아이템에 대한 식별자로 ''숫자''를 사용했다. 데이터가 추가되면 배열 전체에서 중복되지 않는 인덱스가 자동으로 만들어져서 그 데이터에 대한 식별자가 되는 것이다. PHP에서는 인덱스로 문자를 사용하는 것도 가능하다. 일반적으로 다른 언어에서는 숫자를 인덱스로 사용하는 것을 일반적으로 배열, 혹은 indexed array라고 하고, 문자를 인덱스로 사용하는 것을 연관배열(associative array, hash, dictionary)라고 부르지만 PHP에서는 이를 특별히 구분하지 않고 있기 때문에 **하나의 배열의 키 값으로 숫자와 문자 모두를 사용할 수 있다.**

ex)

~~~php
<?php
$grades = array('sang' => 10, 'rockjoen'=>20);
foreach($grades as $key => $value){
    echo "key: {$key} value: {$value}<br />";
}
?>
# key: sang value: 10key: rockjoen value: 20
~~~

### 9.include 와 namespace

프로그램은 작고 단순한 것에서 크고 복잡한 것으로 진화한다. 그 과정에서 코드의 재활용성을 높이고, 유지보수를 쉽게 할 수 있는 다양한 기법들이 사용된다. 그 중의 하나가 코드를 여러개의 파일로 분리하는 것이다. 이를 통해서 얻을 수 있는 효과는 아래와 같다.

- 자주 사용되는 코드를 별도의 파일로 만들어서 필요할 때마다 **재활용할** 수 있다.
- 코드를 개선하면 이를 사용하고 있는 모든 애플리케이션의 동작이 개선된다.
- 코드 수정 시에 필요한 로직을 빠르게 찾을 수 있다.
- 필요한 로직만을 로드해서 메모리의 낭비를 줄일 수 있다.



**include** : php 에 또다른 php 파일을 코드 안으로 갖고 오는 행위.

~~~php
#greeting.php
<html>
<body>

<?php
function welcome() {
    return 'hello world';
}
?>
</body>
</html>
~~~

~~~php
<?php
include 'greeting.php';
echo welcome();
?>
#hello world
~~~

* include (warning)
* include_once : 1번 호출
* require (fatal)
* require_once: 1번 호출

**namespace**

네임스페이스가 무엇인가를 정의하기에 앞서서 파일을 생각해보자. 파일은 데이터를 보관하고 있는 일종의 컨테이너다. 그리고 이 컨테이너는 파일명으로 식별이 된다. 파일의 수가 많아지면서 파일을 관리하는 것이 점점 어려워진다. 그래서 고안된 것이 바로 디렉토리다. 디렉토리를 이용하면 같은 이름의 파일이 하나의 컴퓨터에 존재할 수 있다. 파일명의 충돌을 회피 할 수 있게 된 것이다. 네임스페이스란 간단하게 디렉토리와 같은 것이라고 생각하자.

~~~php
# greeting_en.php
<?php
namespace language\en;

function welcome () {
    return 'hello';
}
?>

# greeting_kr.php
<?php
namespace language\kr;

function welcome () {
    return '안녕';
}
?>

#call.php
<?php
require_once 'greeting_en.php';
require_once 'greeting_kr.php';

echo language\en\welcome();
echo language\kr\welcome();
?>
~~~

~~~php
#greeting_lan.php
<?php
namespace language\en;
function welcome(){
    return 'Hello world';
}
namespace language\ko;
function welcome(){
    return '안녕세계';
}

# call.php
<?php
require_once 'greeting_lang.php';
echo language\ko\welcome();
echo language\en\welcome();
?>
~~~

### 10.라이브러리와 확장기능

> http://us1.php.net/manual/en/

### 11. Composer

* 확장기능 관리자
  * php의 확장기능은 php의 기본 기능으로 제공되지 않는 기능을 제공한다.
* composer
  * php의 의존성 관리도구이다. 필요한 확장 기능을 쉽게 설치해주는 기능도 제공하지만, 프로젝트에서 필요한 확장기능을 통합해서 관리해주는 도구.

**composer** **사용법**

* Packagist
  * 컴포저의 메인 저장소다. 이곳을 통해서 다양한 패키지를 검색할 수 있다.

>  https://packagist.org/

* `composer.json` 파일을 만든 후 패키지 설정

  ~~~json
  {
      "require": {
          "michelf/php-markdown": "^1.9"
      }
  }
  
  ~~~

  

* 실행 방법 : `composer install`

~~~php
<?php
require 'vendor/autoload.php';
use Michelf\Markdown;
$markdown = Markdown::defaultTransform('#rockjeon');
echo $markdown
?>
~~~

### 12. 파일

* 파일 제어(파일 다루기)

**파일 복사하는 방법**

~~~php
<?php
$file = 'readme.txt';
$newFile = 'example.txt';

if(!copy($file, $newFile)) {
    echo "failed to copy $file...\n";
}
?>
~~~

**파일 삭제하는법**

~~~php
<?php
  unlink 'something.txt'
?>
~~~

파일의 대한 함수를 찾아 사용하면 됩니다.

**파일 읽고 쓰기**

* file_get_contents

~~~php
<?php
$file = './readme.txt';
echo file_get_contents($file);
?>
~~~

* file_put_contents

~~~php
<?php
$file = './writeme.txt';
file_put_contents($file, 'coding everybody');
?>
~~~

> 참고 : fopen 을 공부하자!!

#### 권한 (파일을 다루는 과정에서 발생할 수 있는 문제들)

`Warning : failed to open stream: permission denied.`

파일을 읽거나, 쓰거나 할때 권한에 대한 부분에 에러가 날 수 있다. 파일을 다루기 전 확인 할 수 있다.

ex) 읽기 가능 (is_readable)

~~~php
<?php
$filename = 'readme.txt';
if (is_readable($filename)) {
    echo 'The file is readable';
} else {
    echo 'The file is not readable';
}
?>
~~~

ex) 쓰기 가능(is_writable)

~~~php
<?php
$filename = 'writeme.txt';
if (is_writable($filename)) {
    echo 'The file is writable';
} else {
    echo 'The file is not writable';
}
?>
~~~

ex) 존재 여부(file_exists )

~~~php
<?php
$filename = 'readme.txt';
if (file_exists($filename)) {
    echo "The file $filename exists";
} else {
    echo "The file $filename is not exists";
}
?>
~~~

### 13. 디렉토리 제어

`getcwd()` : 현재 디렉토리를 통해서 현재 디렉토리를 알 수 있다. 

`chdir()` : 디렉토리 변경

~~~php
<?php
echo getcwd().'<br />';
chdir('../');
echo getcwd().'<br />';
?>
~~~

`scandir` 은 디렉토리를 탐색하는 기능이다. 

첫번째 인자는 탐색할 디렉토리의 경로, 두번째 인자는 정렬 방법이다.

~~~php
<?php
$dir    = './';
$files1 = scandir($dir);
$files2 = scandir($dir, 1);
 
print_r($files1);
print_r($files2);
?>
/*Array
(
    [0] => .
    [1] => ..
    [2] => call.php
    [3] => composer.json
    [4] => composer.lock
    [5] => readme.txt
    [6] => vendor
)
Array
(
    [0] => vendor
    [1] => readme.txt
    [2] => composer.lock
    [3] => composer.json
    [4] => call.php
    [5] => ..
    [6] => .
)*/
~~~

`mkdir`  : 디렉토리를 생성하는 내장함수.

첫번째 인자로 디렉토리의 이름, 두번째 인자로 디렉토리의 권한을 지정 할 수 있다. 세번째 인자의 값으로 true를 지정하면 첫번째 인자로 주어진 경로가 여러개의 디렉토리로 이루어져 있을 때 해당 디렉토리를 한번에 생성하는 기능을 제공한다.

### 14.파일 업로드

~~~html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
</head>   
<body>
<form enctype="multipart/form-data" action="1.php" method="POST">
   <input type="hidden" name="MAX_FILE_SIZE" value="30000" />
   <input name="userfile" type="file" />
   <input type="submit" value="upload" />
</form>
</body>
</html>
~~~

* input name="userfile" type="file" /



* input type="hidden" name="MAX_FILE_SIZE" value="30000" /
  * `input type="hidden` : 화면에 어떠한 부분도 표현되지 않고, 서버쪽으로 데이터 전송(필요에 의해서 서버에 보내는거)
  * `name="MAX_FILE_SIZE` : 사용자의 파일 크기

(순서)

1. input type="hidden" name="MAX_FILE_SIZE" value="30000" /
2.  input name="userfile" type="file" /

* form tag : 확인하기

**과정을 알아보자**

~~~php
#1.php
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
</head>   
<body>
<?php
ini_set("display_errors", "1"); # 설정 runtime , 1 = on 
$uploaddir = 'C:\BitNami\wampstack-5.4.20-0\apache2\htdocs\upload\file\\'; 
 #윈도우용입니다. (OS 마다 달라 질 수 있다.)
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);
# basename : 파일 이름 , 일종의 보완과 관련이 있다.
echo '<pre>';
if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    echo "파일이 유효하고, 성공적으로 업로드 되었습니다.\n";
} else {
    print "파일 업로드 공격의 가능성이 있습니다!\n";
}
echo '자세한 디버깅 정보입니다:';
print_r($_FILES);
print "</pre>";
?>
</body>
</html>
~~~

* $_FILE:임시 디렉토리 (php메뉴얼) -> boolean

* print_r : var_dump()

### 15. 이미지 다루기

* 설명은 주석

~~~php
<?php
header("Content-type: image/png");
$string = $_GET['text'];
$im     = imagecreatefrompng("button.png"); # 'png' 의 형식을 갖고 올거다 라는 내부 함수
$orange = imagecolorallocate($im, 60, 87, 156); # 첫번째 인자: 이미지의 식별자, RGB(red, green, blue)
$px     = (imagesx($im) - 7.5 * strlen($string)) / 2;
# 이미지 안에 텍스트를 가운데로 두기 위한 계산.
imagestring($im, 4, $px, 9, $string, $orange); # 이미지에 글씨를 쓸거다! 
imagepng($im); # 전송
imagedestroy($im); # 이미지 삭제

?>
~~~

### 16.문자열 처리

~~~php
<?php
echo 'hello world';
echo "hello world";
?>
~~~

~~~php
<?php
echo 'hello \'world\''; # 따움표 안에 따움표 넣기 위한 escaping
echo "hello \"world\"";
?>
~~~

줄바꿈

~~~php
<?php
echo "hello world\n";
echo 'hello world\n';
?>
~~~

문자열 안에서 변수를 사용 {. }

~~~php
<?php
$a = array('hello', 'world');
echo "생활코딩의 공식인사는 {$a[0]} {$a[1]}입니다"; # ("")
echo '생활코딩의 공식인사는 '.$a[0].' '.$a[1].'입니다'; #('')
?>
~~~

문자와 문자를 더 할때는 '.' 를 사용한다 (마침표)

~~~php
<?php
$a = "생활";
$b = "코딩";
echo $a.$b;
?>
~~~

### 17.정규 표현식 (추후에 다시 공부 )

* 문자를 처리할때 문자를 검색하고 치환하는 수단.(일종의 언어)

공부순서

1. https://opentutorials.org/module/622/5143

2. https://opentutorials.org/course/62/5141

### 18. 데이터베이스 (mysql)

> 참고: https://opentutorials.org/course/62/5155

### 19.PDO (우선 참고로 알아두자)

PDO(PHP Data Objects)란 여러가지 데이터베이스를 제어하는 방법을 표준화시킨 것이다. 데이터베이스는 다양한 종류가 있다. 그리고 종류에 따라서 서로 다른 드라이브를 사용해 왔는데 드라이브의 종류에 따라서 데이터베이스를 제어하기 위한 API가 달랐다. PDO를 사용하면 동일한 방법으로 데이터베이스를 제어할 수 있다.

### 20.쿠키와 세션

* 쿠키 (보완상 신뢰할수 없음)
  * 사용자의 data를 저장.
  * 쿠키 : client 쪽 저장
  * setCookie
  * $_COOKIE

~~~php
#cookie1.php
<?php
    setCookie('cookie1', '생활코딩');
    setCookie('cookie2', time(), time()+60);
?>
~~~

~~~php
#cookie2.php
<?php
echo $_COOKIE['cookie1']."<br />";
echo time()-$_COOKIE['cookie2'];
?>
~~~

* 세션
  * session
  * SID(session ID)를 식별자로 서버에 데이터를 저장
  * SID로는 쿠키나 도메인 파라미터를 사용
  * session_start(); 로 시작, 스크립트의 최상단에 위치해야 함
  * $_SESSION
  * 데이터는 서버 내에 파일이나 DB에 저장 함
  * 주로 사용자 인증시에 사용함

~~~php
<?php
session_save_path('./session'); # 저장되는 위치.
session_start(); # 로직의 초반에 써야함.
$_SESSION['title'] = '생활코딩';
?>
~~~



~~~php
<?php
ini_set("display_errors", "1");
session_save_path('./session');
session_start();
echo $_SESSION['title'];
echo file_get_contents('/ex.u/cep/cep/html/egoing/session/session/sess_'.session_id());
?>
~~~

### 21. 예제로 로그인과 로그아웃 기능

~~~html
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
    </head>
    <body>
        <form action="login_process.php" method="POST">
            <p><label>아이디</label><input type="text" name="id" /></p>
            <p><label>비밀번호</label><input type="text" name="pwd" /></p>
 
        <input type="submit" />
        </form>
    </body>
</html>
</html>
~~~

~~~php
<?php
session_start();
$id = 'rockjeon';
$pwd = 'rockjeonrockjeon';
if(!empty($_POST['id']) && !empty($_POST['pwd'])){
    if($_POST['id'] == $id && $_POST['pwd'] == $pwd){
        $_SESSION['is_login'] = true;
        $_SESSION['nickname'] = 'sangwook';
        header('Location: ./session.php');
        exit;
    }
}
echo '로그인 하지 못했습니다.';
?>
~~~

~~~php
<?php
session_start();
if(!isset($_SESSION['is_login'])){
    header('Location: ./login.html');
}
?>
<html>
    <body>
        <?php echo $_SESSION['nickname'];?>님 환영합니다<br />
        <a href="./logout.php">로그아웃</a>    
    </body>
</html>
~~~

~~~php
<?php
ini_set("display_errors", "1");
session_start();
session_destroy();
header('Location: ./login.html');
?>
~~~

### 22. 디버깅

* 버그: 의도치 않게 프로그램의 오동작
* 디버깅: 오류 찾는거
* 디버거: 디버그 찾는법

**log**

* console.log 같은거 같다.

**xdebug**





