import express from "express";
import { createUser, listUsers, loginUser, forgotPassword } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/users", listUsers);
router.post("/forgotpassword", forgotPassword);

export default router;
