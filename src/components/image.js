import React from "react";

function Image({ src }) {
  return (
    <img
      src={src}
      alt="uploaded-img"
      style={{
        maxWidth: "200px",
        maxHeight: "200px",
        objectFit: "contain",
      }}
    />
  );
}

export default Image;
