const { resolveNaptr } = require('dns');
const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs');

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const productRoute = require('./routes/product/productRoute');
 const boardRoute = require('./routes/board/boardRoute');
 const userRoute = require('./routes/user/userRoute');


app.use('/', productRoute);
 app.use('/board', boardRoute);
 app.use('/user', userRoute);

//const mysql = require('mysql');
const dbmaria = require('./database/connectDB.js');

//세션처리
app.use(session({
    secret: 'secret code', //세션에 대한 키, 나중에 키에 대한 문자열 입력.
    resave: false, //request요청이 왔을 때 세션 다시저정하는 설정
    saveUninitialized: false, //세션에 저장할 내용이 없더라도 저장여부 확인
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 //쿠기 유효시간 1시간
    }
  }));

  
  app.use(express.json({
    limit: '50mb'
  }));
    
 
  const server = app.listen(3000, () => {

    console.log('Server started. port -------------> 3000.');
  });



  module.exports = app;