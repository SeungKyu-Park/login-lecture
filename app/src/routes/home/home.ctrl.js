'use strict';

const output = {
    home: (req, res) => {
        res.render('home/index.ejs')
    },
    login: (req, res) => {
        res.render('home/login.ejs');
    }   
};

const users = {
    id: ["woorimIT", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id
        const psword = req.body.psword
        
        if(users.id.includes(id)) {        // 리팩토링 할꺼니까 .. 그냥 .. 봐라
            const idx = users.id.indexOf();
            if (users.psword[idx] = psword) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "Login failed"
        })
    },
}

module.exports = {
    output,
    process,
}

