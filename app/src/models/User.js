"use strict"

const UserStorage = require('./UserStorage'); // UserStrage에서 정보 가져오고

class User {
    constructor(body) {
        this.body = body;
    }
    login() {
        const client = this.body;
        const { id, psword } = UserStorage.getUserInfo(client.id);
        console.log(id); //
        console.log(psword); //
        if(id) {
            if( id === client.id && psword === client.psword ) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다" };
        }
        return { success: false, msg: "존재하지 않는 아이디 입니다"};
    }

    register() {
        const client = this.body; // 함수안에서 다른 함수 안으로 들어갈수 없으니 다시 함수안에서 정의 그런데 constructor에서의 this.body는???
        UserStorage.save(client) // req,body에서 오는 정보를 입력 후 세이브 할 로직
    }
}

module.exports = User;

 