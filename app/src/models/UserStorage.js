"use strict"

// from object to class
// const users = {
//     id: ["woorimIT", "나개발", "김팀장"],
//     psword: ["1234", "1234", "123456"],
// };

class UserStorage {
    static #users = {
        id: ["woorimIT", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        nams: ["우리밋", "나개발", "김팀장"],
    }
    
    static getUsers(...fields) {
        const users = this.#users; // 이렇게도 쓰네 .. 
        const newUsers = fields.reduce( (newUsers, field) => { // 차근 차근 보자
            if (users.hasOwnProperty(field)) { 
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {}); 
        return newUsers; // 여기서 다시 return 해주는 게 좀 이상하다 (없으면 undefined)
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // -> [id, psword]
        const userInfo = usersKeys.reduce( (newUser , info) => {
            newUser[info] = users[info][idx];
            // ex) newUser["id"] = user["id"][0] -> 이건 "woorimIT"
            //     newUser["psword"] = user["psword"][0] -> 이건 "1234"
            return newUser;
        }, {});
        return userInfo; // return 이 newUser가 아니라 userInfo네... 
    }
};

module.exports = UserStorage;


