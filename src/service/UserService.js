import bcrypt from 'bcryptjs';
import mysql2 from 'mysql2';



const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',        // Tên người dùng MySQL
    database: 'jwt' // Tên cơ sở dữ liệu
});

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

const getUserList = () => {
    let users = [];
    connection.query(
        'Select * from users',
    )
}

module.exports = {
    createNewUser, getUserList
}