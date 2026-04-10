import appointmentModel from "../models/apointmentsModel.js";
import userModel from "../models/userModels.js";
import doctorModel from "../models/doctorModel.js";

//create
export const bookAppointment = async (req, res) => {
  try {
    const { userId, doctorId, amount, slotDate, slotTime } = req.body;
    if (!userId || !doctorId || !amount || !slotDate || !slotTime) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const appointment = new appointmentModel({
      userId,
      doctorId,
      slotDate,
      slotTime,
      amount,
    });
    await appointment.save();
    res.status(201).send({
      success: true,
      message: "Appointment Booked Successfully",
      appointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Appointment Api",
      error: error.message,
    });
  }
};

//Get All Appointments
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    res.status(200).send({
      success: true,
      message: "All Appointmens",
      totalCount: appointments.length,
      appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Getting All Appointment Api",
      error: error.message,
    });
  }
};

//get details
export const getAppointmentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Appointment Id",
      });
    }
    const appointment = await appointmentModel.findById(id);
    if (!appointment) {
      return res.status(404).send({
        success: false,
        message: "No Appointment Found with This Id",
      });
    }
    //Find User and Doctor
    const user = await userModel.findOne({ _id: appointment?.userId });
    const doctor = await doctorModel.findOne({ _id: appointment?.doctorId });
    
    res.status(200).send({
      success: true,
      message: "Appointment Details Fetched Successfully",
      
      appointmentDetails: {
        clientName: user?.name,
        clientPhone: user?.phone,
        clientEmail: user?.email,

        doctorName: doctor?.name,
        doctorPhone: doctor?.phone,
        doctorEmail: doctor?.email,

        bookingDate: appointment?.slotDate,
        bookingTime: appointment?.slotTime,
        amount: appointment?.amount,
        bookingStatus: appointment?.status,
        paymentMode: appointment?.payment,
        createdAt: appointment?.createdAt,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Get Appointment Details Api",
      error: error.message,
    });
  }
};

//Change Status
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params; //getting id
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Appointment Id",
      });
    }
    const { appointmentStatus } = req.body;
    if (!appointmentStatus) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Appointment Status",
      });
    }
    const appointment = await appointmentModel.findByIdAndUpdate(
      id,
      { $set: { status: appointmentStatus } },
      { returnOriginal: false },
    );
    res.status(200).send({
      success: true,
      message: "Appointment Status Has Been Updated",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Update  All Appointment Api",
      error: error.message,
    });
  }
};

//user Appointment
export const getUserAppointment = async (req, res) => {
  try {
    const { id } = req.params; //getting id
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Appointment Id",
      });
    }
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    const appointment = await appointmentModel.find({ userId: user?._id });
    res.status(200).send({
      success: true,
      message: "Your Appointments",
      totalCount: appointment.length,
      appointment,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Get All Appointment Api",
      error: error.message,
    });
  }
};

//Get User Appointment Details
//get details
export const getUserAppointmentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Appointment Id",
      });
    }
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "No User Found with This Id",
      });
    }
    //Find User and Doctor
    const appointment = await appointmentModel.findOne({ userId: user?._id });
    const doctor = await doctorModel.findOne({ _id: appointment?.doctorId });
    res.status(200).send({
      success: true,
      message: "Appointment Details Fetched Successfully",
      appointmentDetails: {
        doctorName: doctor?.name,
        doctorPhone: doctor?.phone,
        doctorEmail: doctor?.email,

        bookingDate: appointment?.slotDate,
        bookingTime: appointment?.slotTime,
        amount: appointment?.amount,
        bookingStatus: appointment?.status,
        paymentMode: appointment?.payment,
        createdAt: appointment?.createdAt,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Get Appointment Details Api",
      error: error.message,
    });
  }
};


//Update User Booking Status
export const cancelAppointment = async (req,res)=>{
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Appointment Id",
      });
    }
    const appointment = await appointmentModel.findById(id)
    if(!appointment){
      return res.status(404).send({
        success: false,
        message: "No Appointment Found With This Id",
      });
    }
    await appointment.updateOne({$set:{status:'cancel'}})
     res.status(200).send({
      success: true,
      message: "Appointment Cancelled Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Cancel Appointment Api",
      error: error.message,
    });
  }
}