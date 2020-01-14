# REST API(강의3)

**1.HTTP 요청**

* 모든 자원은 명사로 식별한다.

* HTTP 경로로 자원을 요청한다.

  * ex) 만약에 users 추가 혹은 수정 하려고 하면 어떻게 해야할까.?

    GET /users , POST / users 등등..

    GET/users/{id}

**2.HTTP 상태코드(대표적인것만!)**

• 1xx: 아직 처리중  (잘 안씀...)                                    

• 2xx: 자, 여기있어! (성공)

• 3xx: 잘 가~ 

• 4xx: 니가 문제임

• 5xx: 내가 문제임

• 200: 성공(success), GET, PUT
• 201: 작성됨(created), POST
• 204: 내용 없음 (No Conent), DELETE

• 400: 잘못된 요청 (Bad Request)
• 401: 권한 없음 (Unauthorized)
• 404: 찾을 수 없음 (Not found)
• 409: 충돌 (Conflict)

• 500: 서버 에러 (Interel server error)

