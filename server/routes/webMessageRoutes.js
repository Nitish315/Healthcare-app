import express from "express";
import {
  createMessage,
  deleteWebMessage,
  getAllMessages,
} from "../controllers/webMessageController.js";
import {isAdmin, userAuth} from "../middlewares/authMiddleware.js"

const router = express.Router();

//Create Message || Post
router.post("/create", createMessage);

//Get All Messages|| Get
router.get("/get-all", getAllMessages);

//Delete Message|| Delete
router.delete("/delete/:id",userAuth, isAdmin, deleteWebMessage);

export default router;
