import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.handleHome);
  router.get("/user", homeController.handleUserPage);
  router.get("/login", homeController.handlelogin); //login page
  router.get("/register", homeController.handleRegister); //register page
  router.get("/dttd", homeController.handleDttd); //dttd
  router.get("/cv", homeController.handleCV); //cv
  router.post("/register/create-user", homeController.handelUserRegister);
  router.post("/user/create-user", homeController.handelUserCreate);
  router.get("/update-user/:id", homeController.handleUserPageUpdate);
  router.post("/user/update-user", homeController.handleUpdateUser);
  router.post("/delete-user/:id", homeController.handelDeleteUser);

  return app.use("/", router);
};

export default initWebRoutes;
