import JWT from "jsonwebtoken";
import userModel from "../models/userModels.js";
import { response } from "express";
//user Auth
export const userAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(202).send({
        success: false,
        message: "Not Authorized User",
      });
    }
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in User Auth",
      error,
    });
  }
};

//Admin Auth
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user.id);
    if (user.isAdmin === !true) {
      return res.status(402).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(402).send({
      success: false,
      message: "Error in Admin Auth",
      error,
    });
  }
};
