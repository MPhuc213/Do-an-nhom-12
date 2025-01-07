import bcrypt from 'bcryptjs';
import mysql2 from 'mysql2/promise';
import bluebird from 'bluebird';




const salt = bcrypt.genSaltSync(10);

const hashUserPassWord = (userPassword) => {
    return bcrypt.hashSync(userPassword, salt);
}

const createNewUser = async (username,password,age,email,phone)=> {
    let hashPass = hashUserPassWord(password);
    const connection = await mysql2.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird});
    const [rows, fields] = await connection.execute('INSERT INTO users (username, password, age, email, phone) VALUES (?, ?, ?, ?, ?)',[username,hashPass, age, email, phone]);
}

const getUserList = async () => {
    const connection = await mysql2.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird});
    let users = [];
    try {
        const [rows, fields] = await connection.execute('Select * from users');
        return rows;
    }catch(error){
        console.log("Loi: ", error);
    }
}

const deleteUser = async (id) => {
    // ;
    const connection = await mysql2.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird});
    let users = [];
    try {
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?', [id]);
        return rows;
    }catch(error){
        console.log("Loi: ", error);
    }

}

module.exports = {
    createNewUser, getUserList,deleteUser
}