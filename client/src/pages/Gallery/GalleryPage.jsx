import React from "react";
import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { photos } from "./GalleryData";
import "./GalleryPage.css";

const GalleryPage = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="container py-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5" style={{ color: "#001F3F" }}>
            Our Gallery
          </h1>
          <div 
            className="mx-auto mt-2 mb-3" 
            style={{ height: "4px", width: "70px", backgroundColor: "#008080", borderRadius: "2px" }}
          ></div>
          <p className="text-muted col-lg-6 mx-auto">
            Explore our hospital environment, facilities, and moments that
            reflect our commitment to quality healthcare.
          </p>
        </div>

        {/* Gallery Card Container */}
        <div 
          className="card shadow-lg border-0 p-4" 
          style={{ 
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            background: "linear-gradient(145deg, #ffffff, #f0f4f4)" 
          }}
        >
          <div className="gallery-wrapper" style={{ cursor: "pointer" }}>
            <RowsPhotoAlbum
              photos={photos}
              targetRowHeight={200} // Increased height slightly for a more "Ultra Realistic" feel
              onClick={({ index: current }) => setIndex(current)}
              /* Tip: In your GalleryPage.css, you can add:
                .react-photo-album img { 
                  border-radius: 8px; 
                  transition: transform 0.3s ease; 
                }
                .react-photo-album img:hover { 
                  transform: scale(1.02); 
                }
              */
            />
          </div>
        </div>

        {/* Info Footer */}
        <div className="text-center mt-4">
          <p className="small text-muted">
            <i className="fa-solid fa-circle-info me-2" style={{ color: "#008080" }}></i>
            Click on any image to view in full screen
          </p>
        </div>

        {/* Lightbox */}
        <div className="lightbox">
          <Lightbox
            index={index}
            slides={photos}
            open={index >= 0} // Standard logic: open if index is 0 or more
            close={() => setIndex(-1)}
          />
        </div>
      </div>
    </>
  );
};

export default GalleryPage;