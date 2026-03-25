import appointmentModel from "../models/apointmentsModel.js";

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
