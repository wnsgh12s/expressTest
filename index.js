const express = require('express')
const app = express()

app.listen(8080,()=>{
  console.log('8080포트로 접속완료')
})

app.get('/',function(요청,응답){
  응답.send('안녕..?')
})