const express = require('express')
const app = express()
const path = require('path')

app.listen(8080,()=>{
  console.log('8080포트로 접속완료')
})

app.use(express.static(path.join(__dirname, 'my-app/build')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/my-app/build/index.html'));
});

//라우팅 리액트에게 넘기기
app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/my-app/build/index.html'));
});