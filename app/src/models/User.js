"use strict"

const UserStorage = require('./UserStorage'); // UserStrage에서 정보 가져오고

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const { id, psword } = await UserStorage.getUserInfo(client.id);
        
        if(id) {
            if( id === client.id && psword === client.psword ) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다" };
        }
        return { success: false, msg: "존재하지 않는 아이디 입니다"};
    }

    async register() {
        const client = this.body; 
        try {
        const response = await UserStorage.save(client); // 데이타베이스가 처리할 시간을 줄수 있게
        return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }
}

module.exports = User;

