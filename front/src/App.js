import React, { useState } from "react";
import "./styles/App.css";
import Header from "./Header.js";
import List from "./List.js";
import Hog from "./Hog.js";
import Filter from "./FilterBy";

function App() {
  const [tabActive, setTabActive] = useState(1);

  return (
    <div className="App">
      <Header tabActive={tabActive} setTabActive={setTabActive} />
      {tabActive === 1 ? <List /> : null}
      {tabActive === 2 ? <Hog /> : null}
      {tabActive === 3 ? <Filter /> : null}
    </div>
  );
}

export default App;
