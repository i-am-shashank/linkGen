import React, { useState } from "react";
import axios from "axios";
import "./upload.css";
import "./submit.css";

function UploadButton({ setURL, setSelected }) {
  const [imageSelected, setImage] = useState(null);
  async function uploadImage() {
    setSelected(true);
    const payload = new FormData();
    payload.append("image", imageSelected);
    await axios
      .post("localhost:4444/", payload); //backend yet to be added!
      .then((res) => setURL(res.data.file.url));
  }

  return (
    <>
      <label className="custom-file-upload" className="imageInput">
        <input
          type="File"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />click to select image
      </label>
      {imageSelected !== null ? (
        <button className="upload" onClick={() => uploadImage()}>
          submit
        </button>
      ) : (
        <p>select an image to get link</p>
      )}
    </>
  );
}

export default UploadButton;
