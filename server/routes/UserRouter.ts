import { Router } from "express";
import UserControler from "../controller/UserController";

const router = Router();
const usersController = new UserControler();

router.get("/", usersController.get);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

export default router;
