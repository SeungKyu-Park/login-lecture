"use strict"

const UserStorage = require('./UserStorage'); // UserStrage에서 정보 가져오고

class User {
    constructor(body) {
        this.body = body;
    }
    login() {
        const body = this.body;
        const { id, psword } = UserStorage.getUserInfo(body.id);
        console.log(id); //
        console.log(psword); //
        if(id) {
            if( id === body.id && psword === body.psword ) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다"}
        }
        return { success: false, msg: "존재하지 않는 아이디 입니다"};
    }
}

module.exports = User;

