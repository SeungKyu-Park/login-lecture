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
    //console.log(req);
    //console.log(JSON.stringify(req));

    fetch('/login', {
        method: "POST",
        headers: {    // header라고 해도 fetch를 못하네.... 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
	.then((res) => {
		if(res.success) {        // 오 이래서  sucess를 객체 안에서 false / true로 만들어 줬구나 
            location.href = "/"; // 오 이런 식으로 리다이렉션 하는 구나 
		} else {
			alert(res.msg);
		}
	})
	.catch((err) => {console.error(new Error ('로그인 중 에러 발생'))}
	);
}
 