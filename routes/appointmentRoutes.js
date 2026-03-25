import express from "express";
import { isAdmin, userAuth } from "../middlewares/authMiddleware.js";
import { bookAppointment, getAllAppointments } from "../controllers/appointmentsController.js";

const router = express.Router();

//CREATE || POST
router.post("/create", userAuth,isAdmin, bookAppointment);

//GET ALL || GET
router.get("/get-all", userAuth,isAdmin, getAllAppointments);

export default router;
