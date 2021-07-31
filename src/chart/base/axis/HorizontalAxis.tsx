import React from "react";
import * as d3 from "d3";
import { ChartDimensions } from "../../../types/dimensionTypes";

interface HorizontalAxisProps {
  dimensions: ChartDimensions;
  label?: string;
  formatTick: (elem: any) => string;
  scale: any;
}
const HorizontalAxis = ({
  dimensions,
  label,
  formatTick,
  scale,
}: HorizontalAxisProps) => {
  const numberOfTicks =
    dimensions.boundedWidth < 600
      ? dimensions.boundedWidth / 100
      : dimensions.boundedWidth / 250;

  const ticks = scale.ticks(numberOfTicks);

  return (
    <g transform={`translate(0, ${dimensions.boundedHeight})`}>
      <line x2={dimensions.boundedWidth} />
      {ticks?.map((tick: any) => (
        <text key={tick} transform={`translate(${scale(tick)}, 25)`}>
          {formatTick(tick)}
        </text>
      ))}

      {label && (
        <text transform={`translate(${dimensions.boundedWidth / 2}, 60)`}>
          {label}
        </text>
      )}
    </g>
  );
};
export { HorizontalAxis };
