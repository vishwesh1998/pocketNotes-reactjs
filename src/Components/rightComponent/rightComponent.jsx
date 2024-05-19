import React from "react";
import "./rightComponent.css";

export default function RightComponent({ createGroup, booleanValue }) {
  return (
    <div
      className="upperRight"
      style={{
        backgroundColor: createGroup ? "rgba(0, 0, 0, 0.2)" : "#DAE5F5",
      }}
    >
      <div className="upperRightDiv">
        <img src="./pocket-notes.png" width={550} />
        <div>
          <h1>Pocket Notes</h1>
          <p>
            Send and receive messages without keeping your phone online. <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
      </div>
    </div>
  );
}
