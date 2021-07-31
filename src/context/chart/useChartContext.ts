import React from "react";
import { ChartContext } from "./ChartContext";

const useChartContext = () => {
  const context = React.useContext(ChartContext);
  if (context == null) {
    throw new Error("useChartContext() must be used in <Chart />");
  }
  return context;
};
export { useChartContext };
