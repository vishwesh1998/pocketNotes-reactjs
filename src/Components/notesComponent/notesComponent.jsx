import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./notesComponent.css";

export default function NotesComponent({
  notesData,
  createGroup,
  booleanValue,
  setBooleanValue,
}) {
  const [inputButton, setInptButton] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [currentNotes, setCurrentNotes] = useState([]);
  const [checkNotesData, setCheckNotesData] = useState(false);
  const [error, setError] = useState("");

  let handleButton = () => {
    if (!inputButton.trim().length > 0) {
      setError("please enter the valid notes !!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    } else {
      setError("");
      let d = new Date();
      let date = d.toString().slice(4, 15);
      let time = d.toString().slice(16, 21);
      let newObj = {
        ...notesData,
        notes: inputButton.trim(),
        date: date,
        time: `${time} ${parseInt(time.slice(0, 3)) > 12 ? "PM" : "AM"}`,
      };

      if (localStorage.getItem("notesData")) {
        let data = JSON.parse(localStorage.getItem("notesData"));
        localStorage.setItem("notesData", JSON.stringify([...data, newObj]));
      } else {
        localStorage.setItem("notesData", JSON.stringify([newObj]));
      }
      setCheckNotesData(!checkNotesData);
      setInptButton("");
    }
  };

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    let currentObj = userData.filter((e) => e.name === notesData.name);
    setCurrentUser(...currentObj);

    let nData = JSON.parse(localStorage.getItem("notesData"));
    setCurrentNotes(nData);
    console.log(currentNotes);
  }, [notesData, checkNotesData]);

  return (
    <div className={booleanValue ? "notesComponent" : "notesComponentCopy"}>
      <div
        className="notesUpperComponent"
        style={{ background: createGroup ? "rgba(0, 0, 0, 0.2)" : "#001F8B" }}
      >
        {currentUser ? (
          <div
            style={{
              display: "flex",
              padding: "1rem",
              alignItems: "center",
              paddingLeft: "2rem",
            }}
          >
            <div
              className={booleanValue ? "backIcon" : ""}
              onClick={() => setBooleanValue(false)}
              style={{ cursor: "pointer" }}
            >
              <IoArrowBack />
            </div>
            <div
              style={{
                width: "50px",
                height: "45px",
                borderRadius: "50%",
                background: currentUser.color,
                fontSize: "1.5rem",
                textAlign: "center",
                paddingTop: "0.7rem",
              }}
            >
              {currentUser.name[0]}
            </div>
            <div style={{ fontSize: "1.5rem", paddingLeft: "2rem" }}>
              {currentUser.name}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className="notesMiddleComponent"
        style={{ background: createGroup ? "rgba(0, 0, 0, 0.2)" : "#DAE5F5" }}
      >
        {currentNotes
          ? currentNotes
              .filter((e) => e.name === notesData.name)
              .map((e) => (
                <div
                  style={{
                    height: "6rem",
                    backgroundColor: createGroup
                      ? "rgba(0, 0, 0, 0.2)"
                      : "white",
                    marginBottom: "1.5rem",
                    padding: "0.5rem",
                    borderRadius: "8px",
                    boxShadow: "1px 1px 10px black",
                    overflow: "auto",
                  }}
                  className="notesCard"
                >
                  <div style={{ marginBottom: "3rem" }}>{e.notes}</div>
                  <div style={{ float: "right", fontSize: "15px" }}>
                    {e.date} || {e.time}
                  </div>
                </div>
              ))
          : ""}
      </div>
      <div
        className="notesBottomComponent"
        style={{ background: createGroup ? "rgba(0, 0, 0, 0.2)" : "#001F8B" }}
      >
        <textarea
          type="text"
          value={inputButton}
          onChange={(e) => setInptButton(e.target.value)}
          style={{ background: createGroup ? "rgba(0, 0, 0, 0.2)" : "" }}
        ></textarea>
        <img
          src="Vector.png"
          width={40}
          style={{
            filter:
              inputButton.trim().length > 0
                ? "invert(1) sepia(2) saturate(100) hue-rotate(200deg)"
                : "",
            cursor: "pointer",
          }}
          onClick={handleButton}
        />
        <span>{error}</span>
      </div>
    </div>
  );
}
