import React from 'react'

const LocationMap = () => {
  return (
    <>
    <div className="location-map">
       <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.960201537347!2d76.70180301115903!3d30.71951922448461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee8ac921d23d%3A0x7c55b9fb7b3c1339!2sSolitaire%20Infosystems%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1772298173037!5m2!1sen!2sin"
      width={"100%"}
      height={"400"}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    />
    </div>
    </>
  )
}

export default LocationMap
