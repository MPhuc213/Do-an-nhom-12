import UserService from '../service/UserService';



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
    let age = req.body.age;



    UserService.createNewUser(username,password,age,email,phonenumber);


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