import webmessageModel from "../models/webMessages.js";

//create a message
export const createMessage = async (req, res) => {
  try {
    const { name, contact, message } = req.body;
    if (!name || !contact || !message) {
      return res.status(402).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const webMessage = new webmessageModel({ name, contact, message });
    webMessage.save();
    res.status(201).send({
      success: true,
      message: "Your Message Sent Sucessfully",
      webMessage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: "Error in Web Message Api",
      error,
    });
  }
};

//get all  messages
export const getAllMessages = async (req, res) => {
  try {
    const webMessages = await webmessageModel.find({})
      res.status(201).send({
      success: true,
      message: "All Web Messages",
      totalCount:webMessages.length,
      webMessages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: "Error in get all Web Message Api",
      error,
    });
  }
};
//Delete messages
export const deleteWebMessage = async (req, res) => {
  try {
    const {id} = req.params //Finding id 
    if(!id){
        res.status(404).send({
            success:false,
            message:"Please Provide Message Id"
        })
    }
    //Find Message
    const webMessage = await webmessageModel.findByIdAndDelete(id)
    res.status(201).send({
      success: true,
      message: "Message Has Been Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: "Error in Delete Web Message Api",
      error,
    });
  }
};

