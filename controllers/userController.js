import userModel from "../models/userModels.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export const userRegistor = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //validation
    if (!name || !email || !password) {
      res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = { name, email, password: hashedPassword };
    //save user
    const newUser = new userModel(userData);
    const user = await newUser.save();

    res.status(201).send({
      success: true,
      message: "Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      error,
    });
  }
};

//LOGIN
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      res.status(400).send({
        success: false,
        message: "Please Add Email Or Password",
      });
    }

    //find user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    //match password
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      return res.status(402).send({
        success: false,
        message: "Invalid Credential",
      });
    }

    //token creation
    const token = JWT.sign({ id: user?._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    }); //Expires in 7 days
    //response
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      error,
    });
  }
};

//Update User Details

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "User Id Not Found",
      });
    }
    const { name, phone, dob, image, gender, address } = req.body;
    const photoToBase64 = req.file && req.file.buffer.toString("base64");
    const user = await userModel.findByIdAndUpdate(
      id,
      { $set: { name, dob, address, phone, gender, image: photoToBase64 } },
      { returnOriginal: false },
    );
    res.status(200).send({
      success: true,
      message: "Profile Update Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong in update User Api",
      error,
    });
  }
};

//password reset

export const updatePassword = async (req, res) => {
  try {
    //user id
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "user id Not Found",
      });
    }
    //req.body
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Old and New Password",
      });
    }

    //find User
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(402).send({
        success: false,
        message: "User Not Found",
      });
    }

    //Check Old Password
    const isMatch = await bcrypt.compare(oldPassword, user?.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Incorrect Old Password",
      });
    }
    //Again Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    //Update user
    user.password = hashedPassword;
    await user.save();

    res.status(200).send({
      success: true,
      message: "Password Updates Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update Password",
      error,
    });
  }
};
