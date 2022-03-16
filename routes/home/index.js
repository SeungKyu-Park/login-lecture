"user strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl'); // 아! route folder에 같이 있구나
// 확실히 이건 확장자 js를 빼고 표현한 거구나 ./home.ctrl 

router.get('/' , ctrl.home) // home.ctrl.js에서 {hello, login}으로 빼서 ctrl로 가져 왔으니까 ctrl.home

router.get('/login', ctrl.login)

module.exports = router;