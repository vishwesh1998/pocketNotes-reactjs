import React from "react";
import "./createGroup.css";
import { useState } from "react";

export default function CreateGroup({ setCreateGroup }) {
  const [inputValue, setInputValue] = useState("");
  const [colorValue, setColorValue] = useState("");

  let colorData = [
    { color: "#B38BFA" },
    { color: "#FF79F2" },
    { color: "#43E6FC" },
    { color: "#F19576" },
    { color: "#0047FF" },
    { color: "#6691FF" },
  ];

  let handleDiv = (ob, color) => {
    setColorValue(color);
    let children = ob.target.parentNode.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].classList.contains("borderColor"))
        children[i].classList.remove("borderColor");
    }
    ob.target.classList.add("borderColor");
  };

  let collectingData = () => {
    let obj = {
      name: inputValue,
      color: colorValue,
    };

    if (localStorage.getItem("userData")) {
      console.log(true);
      let data = JSON.parse(localStorage.getItem("userData"));
      console.log(data);
      localStorage.setItem("userData", JSON.stringify([...data, obj]));
    } else {
      localStorage.setItem("userData", JSON.stringify([obj]));
    }
    setCreateGroup(false);
    setInputValue("");
  };
  return (
    <div className="createGroupDiv">
      <div className="createGroupDiv1">
        <h1>Create new group</h1>
      </div>
      <div className="createGroupDiv2">
        Group name
        <input
          type="text"
          placeholder="Enter group name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="createGroupDiv3">
        Choose color{" "}
        {colorData.map((e) => (
          <div
            style={{
              marginLeft: "1rem",
              backgroundColor: e.color,
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
            onClick={(ob) => handleDiv(ob, e.color)}
          ></div>
        ))}
      </div>
      <div className="createGroupDiv4">
        <button onClick={collectingData}>Create</button>
      </div>
    </div>
  );
}
