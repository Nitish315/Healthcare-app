import doctorModel from "../models/doctorModel.js";

//add Doctors
export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      degree,
      fees,
      about,
      gender,
      phone,
      address,
      image,
      speciality,
      experience,
      dob,
    } = req.body;
    if (
      !name ||
      !email ||
      !degree ||
      !fees ||
      !about ||
      !gender ||
      !phone ||
      !address ||
      !speciality ||
      !experience ||
      !dob
    ) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const photoBase64 = req.file && req.file.buffer.toString("base64");
    const doctorData = {
      name,
      email,
      degree,
      fees,
      about,
      gender,
      phone,
      address,
      image: photoBase64,
      speciality,
      experience,
      dob,
    };
    const doctor = new doctorModel(doctorData);
    await doctor.save();

    res.status(201).send({
      success: true,
      message: "Doctor Created",
      doctor,
    });
  } catch (error) {
    console.log(error);
    console.log("ERROR MSG:", error.message);
    res.status(500).send({
      success: false,
      message: "Error in Add Doctor Api",
      error: error.message,
    });
  }
};
