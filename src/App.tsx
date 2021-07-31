import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getTimelineData } from "./utils/dataGeneration";
import { Timeline } from "./chart/charts/Timeline";

function App() {
  const data = getTimelineData();
  const xAccessor = (d: any) => new Date(d.date);
  const yAccessor = (d: any) => d.temperature;
  return (
    <div className="App" style={{ height: "500px" }}>
      <Timeline
        label=""
        data={data}
        yAccessor={yAccessor}
        xAccessor={xAccessor}
      />
    </div>
  );
}

export default App;
