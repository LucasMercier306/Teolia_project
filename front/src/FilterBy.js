import React, { useState, useEffect } from "react";
import "./styles/FilterBy.css";

function FilterBy(house) {
  const [json, setJson] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState("Gryffindor");

  useEffect(() => {
    console.log("house change");
    if (json.length === 0) {
      componentDidMount();
    }
  }, [selectedHouse, json.length]);
  const componentDidMount = () => {
    fetch("http://localhost:3000/dummy/students")
      .then((res) => res.json())
      .then((res) => setJson(res))
      .catch((err) => err);
  };

  return (
    <div className="FilterBy">
      <h1 id="FilterBy">Filter by group</h1>
      <button onClick={() => setSelectedHouse("Gryffindor")}>Gryffindor</button>
      <button onClick={() => setSelectedHouse("Ravenclaw")}>Ravenclaw</button>
      <div>
        <br />
        <br />
        {json.map(
          (s, idx) =>
            s.house === selectedHouse && (
              <li key={idx} style={{ color: "white" }}>
                {s.name}
              </li>
            )
        )}
      </div>
    </div>
  );
}

export default FilterBy;
