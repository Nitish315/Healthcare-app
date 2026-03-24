import express from "express";
import {
  updatePassword,
  updateUser,
  userLogin,
  userRegistor,
} from "../controllers/userController.js";
import { userAuth } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";

const router = express();

//REGISTOR || POST
router.post("/register", userRegistor);
//Login || POST
router.post("/login", userLogin);

//Update Profile
router.patch("/update/:id", userAuth, upload.single("image"), updateUser);

//Update Password
router.patch("/update-password/:id", userAuth, updatePassword);

export default router;
