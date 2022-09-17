import React from "react";
import BarGraph from "./Components/BarGraph";
import Scattergraph from "./Components/Scattergraph";

const App = () => {
  return (
    <div className="container">
      <h1>Scatter Graph</h1>
      <div style={{ height: "500px", width: "800px" }}>
        <Scattergraph />
      </div>
      <h1>Bar Graph</h1>
      <BarGraph />
    </div>
  );
};

export default App;
