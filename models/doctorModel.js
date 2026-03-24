import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, require: [true, "Name is Required"] },
    about: { type: String, require: [true, "About is Required"] },
    degree: { type: String, require: [true, "degree is Required"] },
    speciality: { type: String, require: [true, "speciality is Required"] },
    experience: { type: Number, require: [true, "experience is Required"] },
    fees: { type: Number, require: [true, "fees is Required"] },
    email: { type: String, require: [true, "Email is Require"], unique: true },
    image: { type: String },
    phone: { type: String },
    address: { type: String },
    dob: { type: String },
    gender: { type: String },
    available: { type: Boolean, default: true },
  },

  { timestamps: true },
);

const doctorModel = mongoose.model("doctor", doctorSchema);

export default doctorModel;
