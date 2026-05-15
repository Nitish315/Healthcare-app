import express from "express";
import { isAdmin, userAuth } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";
import { addDoctor, deleteDoctor, getAllDoctors, getDoctorDetails, updateAvailabeStatus, updateDoctor } from "../controllers/doctorController.js";

const router = express.Router();

//ADD DOCTOR || POST
router.post("/add", userAuth, isAdmin, upload.single("image"), addDoctor);

//GET ALL DOCTOR || GET
router.get("/get-all", getAllDoctors);

//GET DOCTOR DETAILS || GET
router.get("/get-details/:id", getDoctorDetails);

//UPDATE DOCTOR DETAILS || PATCH
router.patch("/update/:id",userAuth,isAdmin,upload.single("image"), updateDoctor);

//DELETE DOCTOR DETAILS || DELETE
router.delete("/delete/:id",userAuth,isAdmin, deleteDoctor);

// DOCTOR AVAILABLE STATUS || PATCH
router.patch("/update-status/:id",userAuth,isAdmin, updateAvailabeStatus);

export default router;
