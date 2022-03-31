"use strict"

const db = require('../config/db')

// from object to class
// const users = {
//     id: ["woorimIT", "나개발", "김팀장"],
//     psword: ["1234", "1234", "123456"],
// };

class UserStorage {
 
    // static #getUserInfo(data, id) {
    //     const users = JSON.parse(data);
    //     const idx = users.id.indexOf(id);
    //     const usersKeys = Object.keys(users); // -> [id, psword]
    //     const userInfo = usersKeys.reduce( (newUser , info) => {
    //         newUser[info] = users[info][idx];
    //         return newUser;
    //     }, {});
    //     return userInfo;
    // }
    
    // static #getUsers(data, isAll, fields) { //isAll
    //     const users = JSON.parse(data);
    //     if (isAll) return users; // 추가 for isAll
    //     const newUsers = fields.reduce( (newUsers, field) => {
    //         if (users.hasOwnProperty(field)) { 
    //             newUsers[field] = users[field];
    //         }
    //         return newUsers;
    //     }, {}); 
    //     return newUsers; 
    // }


    static getUsers(isAll, ...fields) { 

    }  
 
    static getUserInfo(id) {
      return new Promise( (resolve, reject) => {
        const query = "SELECT * FROM users WHERE id =?;"
        db.query(query, [id], (err, data) => {
            if (err) reject(`${err}`);
            resolve(data[0]);
        });
      });      
    }

    static async save(userInfo) {
        return new Promise( (resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);"
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => { // 입력 후 그 값을 보낼 필요가 없어 data removed
                if (err) reject(`${err}`);
                resolve( { success: true } ); // 왠지 알겠지?!!!
            });
          });      
    }
};

module.exports = UserStorage;