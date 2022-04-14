const { resolveNaptr } = require('dns');
const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs');
const cors = require('cors');
const port = 3000;
const bodyParser = require("body-parser");



//특정url일 경우에만 cors허용하도록 서버에 설정 , 'http://192.168.219.106:8081'
var allowlist = ['http://localhost:8081']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    console.log('origin: true')
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    console.log('origin: false')
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

// app.use(cors());
app.use(cors(corsOptionsDelegate));

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
    
 
  const server = app.listen(port, () => {

    console.log('Server started. port -------------> 3000.');
  });



  module.exports = app;