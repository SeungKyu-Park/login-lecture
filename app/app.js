const express = require('express');
const app = express();
const home = require('./src/routes/home')
const bodyParser = require('body-parser');


app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public/`));
app.use(bodyParser.json()); // body-parser는 미들웨어로 사용해야 한다
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', home);


module.exports = app;