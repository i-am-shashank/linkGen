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
      .post("https://linkgen-bak.this-is-shashank-mishra.vercel.app/", payload)
      .then((res) => setURL(res.data.file.url));
  }

  return (
    <>
      <label class="custom-file-upload" className="imageInput">
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
