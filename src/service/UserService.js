import bcrypt from 'bcryptjs';
import mysql2 from 'mysql2/promise';
import bluebird from 'bluebird';




const salt = bcrypt.genSaltSync(10);

const hashUserPassWord = (userPassword) => {
    return hashUserPassWord = bcrypt.hashSync(userPassword, salt);
}

const createNewUser = (username,password,age,email,phone)=> {
    let hashPass = hashUserPassWord(password);
    connection.query(
        'INSERT INTO users (username, password, age, email, phone) VALUES (?, ?, ?, ?, ?)',[username, hashPass, age, email, phone],
    )
}

const getUserList = async () => {
    const connection = await mysql2.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird});
    let users = [];
    // connection.query(
    //     'Select * from users',
    //     function(err,results){
    //         if(err){
    //             console.log(err);
    //             return users;
    //         }

    //         return users = results;
    //     }
    // )

    try {
        const [rows, fields] = await connection.execute('Select * from users');
        return rows;
    }catch(error){
        console.log("Loi: ", error);
    }
}

module.exports = {
    createNewUser, getUserList
}