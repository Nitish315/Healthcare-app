import React from 'react'

const MessageForm = () => {
  return (
    <>
        <div className="mform">
            <h1>Send Us Message</h1>
            <input type="text" placeholder='Enter Your Name' required={true}/>
            <input type="email" placeholder='Enter Your Email' required={true}/>
            <textarea placeholder='Enter Your Message' name="message" required={true} rows={5}/>
            <button className='btn'>Send Message</button>
        </div>
    </>
  )
}

export default MessageForm
