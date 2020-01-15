# 리팩토링

* 실습으로 대체한다!



# 데이터베이스

간단한 DB 를 알아보자

* SQL
  * MySQL, PostgreSQL, Aurora
* NoSQL
  * MongoDB, DynamoDB
* In Momory DB]
  * Redis, Memcashed

## SQL 쿼리 기초

* insert users ('name') values ('Alice');
* select * from users;
* update users set name = 'bek' where id =1;
* delete from users where id =1;

## ORM

* 데이터베이스를 객체로 추상화해 논것을 ORM (Object Relational Mapping) 이라고 한다.
* 쿼리를 직접 작성하는 대신 ORM의 메소드로 데이터 관리할 수 있는 것이 장점이다.
* 노드에서 SQL  ORM 은 **시퀄라이져(Sequelize)**가 있다.

EX)

* insert users ('name') values ('Alice');

-> User.create({name:'Alice'})

* select * from users;

->User.findAll()

* update users set name = 'bek' where id =1;

-> User.update({name:'bek'}, {where:{id:1}})

* delete from users where id =1;

->User.destroy({where: {id:1}});

