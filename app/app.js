"use strict";


// 모듈
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
//dotenv.config( { path: 경로 } ) 와 같은 식으로 .env의 파일 경로를 지정해줄 수도 있으며

const app = express();

// 라우팅
const home = require('./src/routes/home')
 
// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public/`));
app.use(bodyParser.json()); // body-parser는 미들웨어로 사용해야 한다
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', home); // use -> 미들 웨어를 등록해주는 매서드


module.exports = app;