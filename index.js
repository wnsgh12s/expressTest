const express = require('express')
const app = express()
const path = require('path')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const uri = process.env.URI


let db
  MongoClient.connect(uri, function(에러, client){
    if (에러) return console.log(에러)
    db = client.db('todoapp')
    db.collection('post').insertOne({이름: '준호', 나이: 20},(에러,결과)=>{
      console.log('저장완료')
    })
    app.listen(8080, function() {
      console.log('listening on 8080')
    })
  })

app.use(express.static(path.join(__dirname, 'my-app/build')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/my-app/build/index.html'));
});

//라우팅 리액트에게 넘기기
app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/my-app/build/index.html'));
});