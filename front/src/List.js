import React, { useState, useEffect } from "react";
import "./styles/List.css";

function List() {
  const [apiResponse, setApiResponse] = useState("");
  useEffect(() => {
    if (apiResponse === "") {
      componentDidMount();
    }
  });
  const componentDidMount = () => {
    fetch("http://localhost:3000/dummy/student")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
      .catch((err) => err);
  };
  return (
    <div className="List">
      <p style={{ color: "white" }}>Here is a list of all students</p>
      <h1 style={{ color: "white" }} id="listewhite">
        List
      </h1>
      <p style={{ color: "white" }} className="App-intro">
        {apiResponse}
      </p>
    </div>
  );
}

export default List;
