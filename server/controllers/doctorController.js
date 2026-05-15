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
    res.status(500).send({
      success: false,
      message: "Error in Add Doctor Api",
      error: error.message,
    });
  }
};

//Get all Doctors
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    res.status(200).send({
      success: true,
      message: "All Doctors List",
      totalCount: doctors.length,
      doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get All Doctor Api",
      error: error.message,
    });
  }
};

//Get Doctor Detail
export const getDoctorDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Add Doctor Id",
      });
    }
    //Find Doctor
    const doctor = await doctorModel.findById(id);
    if (!doctor) {
      return res.status(404).send({
        success: false,
        message: "No Doctor Found With This Id",
      });
    }
    res.status(200).send({
      success: true,
      message: "Details Fetched Successfully",
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get  Doctor Details Api",
      error: error.message,
    });
  }
};

//Update Doctor
export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Add Doctor Id",
      });
    }
    const data = req.body;
    const photoBase64 = req.file && req.file.buffer.toString("base64"); //To Update Photo
    const doctor = await doctorModel.findByIdAndUpdate(
      id,
      { $set: data },
      { returnOriginal: false },
    );
    res.status(200).send({
      success: true,
      message: "Doctor Details Updated",
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update  Doctor Details Api",
      error: error.message,
    });
  }
};

//Delete Doctor
export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Add Doctor Id",
      });
    }
    await doctorModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Doctor Has Been Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update  Doctor Details Api",
      error: error.message,
    });
  }
};

//Update Available Status

export const updateAvailabeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Add Doctor Id",
      });
    }
    const { availableStatus } = req.body;
    if (!availableStatus) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Available Status ",
      });
    }
    const doctor = await doctorModel.findByIdAndUpdate(
      id,
      { $set: {available:availableStatus} },
      { returnOriginal: false },
    );
    res.status(200).send({
      success: true,
      message: "Doctor Available Status Has Been Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update Update Doctor Api",
      error: error.message,
    });
  }
};
