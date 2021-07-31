import React from "react";
import { ChartDimensions } from "../../types/dimensionTypes";

const ChartContext = React.createContext<ChartDimensions>(null!);
ChartContext.displayName = "DimensionsChartContext";
export { ChartContext };
