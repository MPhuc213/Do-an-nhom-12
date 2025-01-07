import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',        // Tên người dùng MySQL
    database: 'jwt' // Tên cơ sở dữ liệu
});


const handleHome = (req,res) => {
    return res.render("Home.ejs");
}

const handleUserPage = (req,res) => {
    //moudule from database
    return res.render("User.ejs");
}

const handelUserCreate = (req,res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let phonenumber = req.body.PhoneNumber;

    

    connection.query(
        'INSERT INTO users (username, password, email, phone) VALUES (?, ?, ?, ?)',[username, password, email, phonenumber],
        function (err, results,fields){
            console.log(results);
            console.log(fields);
        }
    )
    console.log(">>> Check request ", req.body);
    return res.send("handelUserCreate");
}

const handleregister = (req,res) => {
    return res.render("register.ejs");
}

const handlelogin = (req,res) => {
    return res.render("login.ejs");
}


module.exports = {
    handleHome, handleUserPage, handelUserCreate, handleregister, handlelogin
}