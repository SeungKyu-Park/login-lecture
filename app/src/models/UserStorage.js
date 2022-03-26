"use strict"

const fs = require('fs').promises;

// from object to class
// const users = {
//     id: ["woorimIT", "나개발", "김팀장"],
//     psword: ["1234", "1234", "123456"],
// };

class UserStorage {
 
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
    
    static #getUsers(data, isAll, fields) { //isAll
        const users = JSON.parse(data);
        if (isAll) return users; // 추가 for isAll
        const newUsers = fields.reduce( (newUsers, field) => {
            if (users.hasOwnProperty(field)) { 
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {}); 
        return newUsers; 
    }


    static getUsers(isAll, ...fields) { // isAll 추가 for 모든 데이타 그냥 다 가져오게
        return fs
        .readFile('./src/databases/users.json')
        .then( (data) => {
           return this.#getUsers(data, isAll, fields); //isAll 추가
        })
        .catch(console.error);   
    }  
 
    static getUserInfo(id) {
       return fs
        .readFile('./src/databases/users.json')
        .then( (data) => {
           return this.#getUserInfo(data, id);
        })
        .catch(console.error);      
    }

    static async save(userInfo) {
        const users = await this.getUsers(true); // "id", "psword", "name" removed and true added
        if (users.id.includes(userInfo.id)) { // 프론트에서 받은 userInfo.id가 데이터베이스에 include있는가 라는 
            throw Error("이미 존재하는 아이디입니다");
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile('./src/databases/users.json', JSON.stringify(users)); // 읽고 JSON문자열로 반환 -> 그래서 type error 없애자
        return { success: true };
    }
};

module.exports = UserStorage;