import React, { useEffect } from "react";
import "./leftComponent.css";

export default function LeftComponent({
  setNotesData,
  createGroup,
  setCreateGroup,
  createdData,
  booleanValue,
  setBooleanValue,
}) {
  let handleDiv = (obj) => {
    setNotesData(obj);
    setBooleanValue(true);
  };

  return (
    <div className={booleanValue ? "leftComponentCopy" : "leftComponent"}>
      <div className="upperLeft">
        <h1>Pocket Notes</h1>
      </div>

      <div className="middleLeft">
        {createdData
          ? createdData.map((e) => (
              <div
                onClick={() => handleDiv(e)}
                style={{
                  display: "flex",
                  padding: "1rem",
                  fontSize: "1.5rem",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  margin: "1rem",
                  fontFamily: "cursive",
                }}
              >
                <div
                  style={{
                    backgroundColor: e.color,
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    padding: "0.7rem",
                    fontWeight: 500,
                    border: `2px solid ${e.color}`,
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {e.name[0]}
                </div>
                <div style={{ paddingTop: "0.7rem", textAlign: "center" }}>
                  {e.name}
                </div>
              </div>
            ))
          : ""}
      </div>

      <div className="downLeft">
        <button
          className="downLeftAddButton"
          onClick={() => setCreateGroup(!createGroup)}
        >
          +
        </button>
      </div>
    </div>
  );
}
