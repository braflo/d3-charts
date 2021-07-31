import React from "react";
import { ChartContext } from "../../context/chart/ChartContext";
import { ChartDimensions } from "../../types/dimensionTypes";

interface ChartProps {
  dimensions: ChartDimensions;
  children: React.ReactNode;
}
const Chart = ({ dimensions, children }: ChartProps) => {
  return (
    <ChartContext.Provider value={dimensions}>
      <svg height={dimensions.height} width={dimensions.width}>
        <g
          transform={`translate(${dimensions.marginTop}, ${dimensions.marginLeft})`}
        >
          {children}
        </g>
      </svg>
    </ChartContext.Provider>
  );
};
export { Chart };
