import express from "express";
import { isAdmin, userAuth } from "../middlewares/authMiddleware.js";
import {
  bookAppointment,
  cancelAppointment,
  getAllAppointments,
  getAppointmentDetails,
  getUserAppointment,
  getUserAppointmentDetails,
  updateAppointmentStatus,
} from "../controllers/appointmentsController.js";

const router = express.Router();

//CREATE || POST
router.post("/create", userAuth, isAdmin, bookAppointment);

//GET ALL || GET
router.get("/get-all", userAuth, isAdmin, getAllAppointments);

//GET DETAILS || GET
router.get("/get-details/:id", userAuth, isAdmin, getAppointmentDetails);

//UPDATE STATUS || PATCH
router.patch("/update-status/:id", userAuth, isAdmin, updateAppointmentStatus);

//GET ALL USER APPOINTMENT || GET
router.get("/get-user-appointment/:id", userAuth, getUserAppointment);

//GET USER APPOINTMENT DETAILS || GET
router.get(
  "/get-user-appointment-details/:id",
  userAuth,
  getUserAppointmentDetails,
);

//CANCEL USER APPOINTMENT || POST
router.post("/cancel/:id",userAuth,cancelAppointment)

export default router;
