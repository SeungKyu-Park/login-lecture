'use strict';

const output = {
    home: (req, res) => {
        res.render('home/index.ejs')
    },
    login: (req, res) => {
        res.render('home/login.ejs');
    }   
};

const process = {
    login: (req, res) => {
        console.log(req.body);
    }
}

module.exports = {
    output,
    process,
}