import express from "express";
import {
  getAllUsers,
  getLoginUser,
  getStats,
  getUserDetails,
  updatePassword,
  updateUser,
  userLogin,
  userRegistor,
} from "../controllers/userController.js";
import { isAdmin, userAuth } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";

// const router = express();
const router = express.Router(); 

//REGISTOR || POST
router.post("/register", userRegistor);
//Login || POST
router.post("/login", userLogin);

//Update Profile
router.patch("/update/:id", userAuth, upload.single("image"), updateUser);

//Update Password
router.patch("/update-password/:id", userAuth, updatePassword);

//GET ALL USERS || GET
router.get("/get-all", userAuth, isAdmin, getAllUsers);

//GET ALL STATS || GET
router.get("/get-stats", userAuth, isAdmin, getStats);

//GET USERS DETAILS || GET
router.get("/get-user/:id", userAuth, isAdmin, getUserDetails);

//GET LOGIN USER DETAILS || GET
router.get("/get-login-user/:id", userAuth, getLoginUser);

export default router;
