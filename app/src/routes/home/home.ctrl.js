'use strict';

const User = require('../../models/User');

// 21장 부터 여기서 직접 접근하지 않는다
//const UserStorage = require('../../models/UserStorage');

const output = {
    home: (req, res) => {
        res.render('home/index') // 23강 까까지  file.ejs 확장자 명까지 다 했었네 이제 지움
    },
    login: (req, res) => {
        res.render('home/login');
    },
    register: (req, res) => {
        res.render('home/register')
    },
};

const process = {
    login: async (req, res) => { // 객체안 함수는 ":" , 객체는 "=" 인가 ?? 
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);    
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);    
    }
}

module.exports = {
    output,
    process,
}

