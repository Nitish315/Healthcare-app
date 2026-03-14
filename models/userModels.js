import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: [true, "Name is Required"] },
    password: { type: String, require: [true, "Password is Required"] },
    email: { type: String, require: [true, "Email is Require"], unique: true },
    image: { type: String },
    phone: { type: String },
    address: { type: String },
    dob: { type: String },
    gender: { type: String },
    isAdmin: { type: Boolean },
  },
  { timestamps: true },
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
