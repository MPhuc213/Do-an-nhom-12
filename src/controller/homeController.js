import UserService from "../service/UserService";

const handleHome = (req, res) => {
  return res.render("Home.ejs");
};

const handleUserPage = async (req, res) => {
  //moudule from database

  let userlist = await UserService.getUserList();
  return res.render("user.ejs", { userlist });
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

const handelDeleteUser = async (req, res) => {
  await UserService.deleteUser(req.params.id);
  return res.redirect("/user");
};

const handleUserPageUpdate = async (req, res) => {
  let id = req.params.id;
  let user = await UserService.getUserById(id);
  let userData = {};
  if (user && user.length > 0) {
    userData = user[0];
  }
  return res.render("user-update.ejs", { userData });
};

const handleUpdateUser = async (req, res) => {
  let username = req.body.username;
  let age = req.body.age;
  let email = req.body.email;
  let phone = req.body.PhoneNumber;
  let id = req.body.id;
  await UserService.UpdateUserInfor(username, age, email, phone, id);
  return res.redirect("/user");
};
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
  handleUserPageUpdate,
  handleUpdateUser,
};
