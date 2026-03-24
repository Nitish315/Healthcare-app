import express from "express";
import { isAdmin, userAuth } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";
import { addDoctor } from "../controllers/doctorController.js";

const router = express.Router();

//ADD DOCTOR || POST
router.post("/add", userAuth, isAdmin, upload.single("image"), addDoctor);

export default router;
