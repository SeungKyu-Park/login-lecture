"user strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl'); // 아! route folder에 같이 있구나
// 확실히 이건 확장자 js를 빼고 표현한 거구나 ./home.ctrl.js

router.get('/', ctrl.output.home); // home.ctrl.js에서 module.exports = {hello, login}으로 빼서 ctrl로 가져 왔으니까 ctrl.home
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register)

router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register)

module.exports = router;

//console.log("helelel");