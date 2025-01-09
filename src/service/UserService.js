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

const getUserById = async (id) => {
    const connection = await mysql2.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird});
    let users = [];
    try {
        const [rows, fields] = await connection.execute('Select * FROM users WHERE id=?', [id]);
        return rows;
    }catch(error){
        console.log("Error-information: ", error);
    }
};

const UpdateUserInfor = async (username,age,email,phone,id) =>{
    const connection = await mysql2.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird});
    try {    
        const [rows, fields] = await connection.execute('UPDATE users SET username = ?, age = ?, email = ?, phone = ? WHERE id= ?', [username,age,email,phone,id]);
    }catch(error){
        console.log("Error-information: ", error);
    }
};

module.exports = {
    createNewUser, getUserList,deleteUser, getUserById,UpdateUserInfor,
}