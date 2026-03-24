import mongoose from "mongoose";

const webMessageSchema = new mongoose.Schema(
  {
    name: { type: String, require: [true, "Name is Required"] },
    contact: { type: String, require: [true, "Contact Number is Required"] },
    message: { type: String, require: [true, "Message is Required"] },
  },
  { timestamps: true },
);

const webmessageModel = mongoose.model("webmessage", webMessageSchema);

export default webmessageModel;
