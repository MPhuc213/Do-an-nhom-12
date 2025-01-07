import UserService from "../service/UserService";

const handleHome = (req, res) => {
  return res.render("Home.ejs");
};

const handleUserPage = async (req, res) => {
  //moudule from database

  let userlist = await UserService.getUserList();
  return res.render("User.ejs", { userlist });
};

const handelUserCreate = (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  let phonenumber = req.body.PhoneNumber;
  let age = req.body.age;

  UserService.createNewUser(username, password, age, email, phonenumber);

  return res.redirect("/user");
};

const  handelDeleteUser = async (req,res) => {
  await UserService.deleteUser(req.params.id);
  return res.redirect("/user");
}

const handleregister = (req, res) => {
  return res.render("register.ejs");
};

const handlelogin = (req, res) => {
  return res.render("login.ejs");
};


module.exports = {
  handleHome,
  handleUserPage,
  handelUserCreate,
  handelDeleteUser,
  handleregister,
  handlelogin,
};
