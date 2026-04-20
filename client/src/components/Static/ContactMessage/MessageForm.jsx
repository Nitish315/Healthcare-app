import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { sendWebMessage } from "../../../redux/actions/authActions";

const MessageForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const dispatch = useDispatch();

  const { success, error } = useSelector((state) => state.auth);

  const handleMessage = () => {
    if (!name || !contact || !message) {
      return toast.error("Please Provide Name, Contact Or Message");
    }
    const msgData = { name, contact, message };
    dispatch(sendWebMessage(msgData));
    if (success) {
      toast.success("Message Send Successfully");
      setName("");
      setMessage("");
      setContact("");
    }
    if (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <div className="mform">
        <h1>Send Us Message</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Email"
          required={true}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <textarea
          placeholder="Enter Your Message"
          name="message"
          required={true}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn" onClick={handleMessage}>
          Send Message
        </button>
      </div>
    </>
  );
};

export default MessageForm;
