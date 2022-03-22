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
    login: (req, res) => { // 객체안 함수는 ":" , 객체는 "=" 인가 ?? 
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);



        // 20장 에서 썻지만 21장에선 새 로직만듬
        // const id = req.body.id
        // const psword = req.body.psword
        // const users = UserStorage.getUsers('id','psword');

        // const response = {};
        // if(users.id.includes(id)) {        // 리팩토링 할꺼니까 .. 그냥 .. 봐라
        //     const idx = users.id.indexOf(id);
        //     if (users.psword[idx] === psword) { // oops '=' so far
        //         response.success = true; // true false 는 '' 붙이면 안된다 왜냐면 if('false') 도 true이니까 ..
        //         return res.json(response);
        //     }
        // }
        // // if 에서 false여서 return 안 되면 밑 코드가 실행
        // response.success = false;
        // response.msg = 'Login Failed'; // 오 ... .json()에 인자가 있으면 그걸 json 형태로 해주고 없으면 그 자체 res 을 해주나보구나 ...
        // return res.json(response);
    },
}

module.exports = {
    output,
    process,
}

