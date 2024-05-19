import React, { useEffect } from "react";
import LeftComponent from "./Components/leftComponent/leftComponent";
import RightComponent from "./Components/rightComponent/rightComponent";
import { useState } from "react";
import CreateGroup from "./Components/createGroupComponent/createGroup";
import "./App.css";
import NotesComponent from "./Components/notesComponent/notesComponent";

export default function App() {
  const [createGroup, setCreateGroup] = useState(false);
  const [createdData, setCreatedData] = useState([]);
  const [notesData, setNotesData] = useState("");
  const [booleanValue, setBooleanValue] = useState(false);

  let handleCreateDiv = (e) => {
    if (createGroup && !e.target.closest(".create-group-container"))
      setCreateGroup(false);
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userData"));
    setCreatedData(data);
    console.log(data);
  }, [createGroup]);

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        height: "100vh",
        width: "100vw",
        background: createGroup ? "rgba(0, 0, 0, 0.2)" : "",
      }}
      onClick={handleCreateDiv}
      className="appContainer"
    >
      <div
        style={
          createGroup
            ? {
                display: "inline-block",
                background: "white",
                borderRadius: "8px",
              }
            : { display: "none" }
        }
        className="create-group-container"
      >
        <CreateGroup
          setCreateGroup={setCreateGroup}
          createGroup={createGroup}
        />
      </div>

      <LeftComponent
        setNotesData={setNotesData}
        createGroup={createGroup}
        setCreateGroup={setCreateGroup}
        createdData={createdData}
        booleanValue={booleanValue}
        setBooleanValue={setBooleanValue}
      />

      {notesData ? (
        <NotesComponent
          notesData={notesData}
          createGroup={createGroup}
          setBooleanValue={setBooleanValue}
          booleanValue={booleanValue}
        />
      ) : (
        <RightComponent createGroup={createGroup} />
      )}
    </div>
  );
}
