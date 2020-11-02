import React, { Suspense } from "react";
import "./link.css";
import Loader from "./loader";

function Link({ URL, isSelected }) {
  const Image = React.lazy(() => import("./image.js"));
  function copyToClipboard() {
    var textField = document.createElement("textarea");
    textField.innerText = URL;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }
  return (
    <div>
      <h1>your link is here</h1>
      {URL ? <a className="urlLink" href={URL}>{URL}</a> : "wait while link generates"}
      {(!URL && isSelected) && <Loader /> }
      {URL && (
        <button className="copy-btn" onClick={() => copyToClipboard()}>
          copy link
        </button>
      )}
      {URL !== null ? (
        <Suspense fallback={<h1>loading......</h1>}>
          <Image src={URL} />
        </Suspense>
      ) : null}
    </div>
  );
}

export default Link;
