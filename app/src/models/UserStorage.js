"use strict"

const fs = require('fs').promises;

// from object to class
// const users = {
//     id: ["woorimIT", "나개발", "김팀장"],
//     psword: ["1234", "1234", "123456"],
// };

class UserStorage {
    // static #users = { // 26장에서 이 데이타 이동 to users.json
    //     id: ["woorimIT", "나개발", "김팀장"],
    //     psword: ["1234", "1234", "123456"],
    //     nams: ["우리밋", "나개발", "김팀장"],
    // }

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // -> [id, psword]
        const userInfo = usersKeys.reduce( (newUser , info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
    
    static getUsers(...fields) {
        // const users = this.#users; // 이렇게도 쓰네 .. 
        const newUsers = fields.reduce( (newUsers, field) => { // 차근 차근 보자
            if (users.hasOwnProperty(field)) { 
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {}); 
        return newUsers; // 여기서 다시 return 해주는 게 좀 이상하다 (없으면 undefined)
    }

    static getUserInfo(id) {
        // const users = this.#users;
       return fs
        .readFile('./src/databases/users.json')
        .then( (data) => {
           return this.#getUserInfo(data, id);
        })
        .catch(console.error)
       
    }



        // , (err, data) => {
        //     if (err) throw err;
        //     const users = JSON.parse(data);
        //     const idx = users.id.indexOf(id);
        //     const usersKeys = Object.keys(users); // -> [id, psword]
        //     const userInfo = usersKeys.reduce( (newUser , info) => {
        //         newUser[info] = users[info][idx];
        //         return newUser;
        //     }, {});
        //     return userInfo; // 음 .. newUser는 밖으로 못나올꺼 같네 .. 그래서 userInfo 변수를 ...
        // })
   
};

module.exports = UserStorage;


