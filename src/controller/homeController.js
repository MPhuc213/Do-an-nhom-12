const handleHome = (req,res) => {
    return res.render("Home.ejs");
}

const handleUser = (req,res) => {
    //moudule from database
    return res.render("User.ejs");
}

const handleregister = (req,res) => {
    return res.render("register.ejs");
}

const handlelogin = (req,res) => {
    return res.render("login.ejs");
}


module.exports = {
    handleHome, handleUser, handleregister, handlelogin
}