import { Router } from "express";
import UserControler from "../controller/UserController";

const router = Router();
const usersController = new UserControler();

router.get("/", usersController.get);
router.post("/", usersController.createUser);

export default router;
