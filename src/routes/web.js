import express from "express";
import homeController from '../controller/homeController';
const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeController.handleHome);
    router.get("/user", homeController.handleUserPage);
    router.post("/users/create-user", homeController.handelUserCreate);
    router.post("/delete-user/:id", homeController.handelDeleteUser);

    return app.use("/", router);
}

export default initWebRoutes;
