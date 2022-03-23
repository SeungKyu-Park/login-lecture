"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");


registerBtn.addEventListener("click", register);


function register() {
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value, 
    };
    console.log(req);

    fetch('/register', {
        method: "POST",
        headers: {    // header라고 해도 fetch를 못하네.... 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
	.then((res) => {
		if(res.success) {        // 오 이래서  sucess를 객체 안에서 false / true로 만들어 줬구나 
            location.href = "/login"; // 오 이런 식으로 리다이렉션 하는 구나 
		} else {
			alert(res.msg);
		}
	})
	.catch((err) => {console.error(new Error ('회원가입 중 에러 발생'))}
	);
}
 