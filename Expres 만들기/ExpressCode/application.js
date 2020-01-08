// Hello world 에서 사용한 http 모듈. 한번 더 추상화 하여 application 모듈로 감싸는 작업을 함

const http = require('http');

const Applicarion = () =>{
    const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type','text/plain')
       // res.end('Hello world\n')
        
        /*정적 파일 제공
        public 폴더를 만들어 정적 파일을 담고 요청이 있으면 이 폴더의 파일을 제공하도록 한다.
        파일 작업을 할꺼니까 fs 모듈을 사용
        */

        const filePath = path.join(__dirname,'../public/inedex.html')
        fs.readFile(filePath,(err, data)=>{
            if (err) throw err
            
            res.end(data)
        })
    
    
    });


    return {
        listen(port = 3000, hostname = '127.0.0.1', fn) {
            server.listen(port, hostname, fn)
        }
    }
}