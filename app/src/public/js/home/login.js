"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector('#psword'),
    loginBtn = document.querySelector('button');

// console.log(id); 
// result: <input id='id' type="text" placeholder='아이디'>

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);
}

