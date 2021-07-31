import React from "react";
import * as d3 from "d3";
import { useChartDimensions } from "../../utils/dimensionUtils";
import { Chart } from "../base/ChartContainer";
import { HorizontalAxis } from "../base/axis/HorizontalAxis";
import { Line } from "../base/line/Line";

interface TimelineProps {
  data: any[];
  xAccessor: (elem: any) => Date;
  yAccessor: (elem: any) => number;
  label: string;
}

const Timeline = ({ data, xAccessor, yAccessor, label }: TimelineProps) => {
  const [ref, dimensions] = useChartDimensions();

  const formatDate = d3.timeFormat("%-b %-d");
  const gradientColors = ["rgb(226, 222, 243)", "#f8f9fa"];

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, xAccessor) as [Date, Date])
    .range([0, dimensions.boundedWidth]);

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, yAccessor) as [number, number])
    .range([dimensions.boundedHeight, 0])
    .nice();

  const xAccessorScaled = (d: any) => xScale(xAccessor(d));

  const yAccessorScaled = (d: any) => yScale(yAccessor(d));

  return (
    <div ref={ref} style={{ height: "100%" }}>
      <Chart dimensions={dimensions}>
        <HorizontalAxis
          dimensions={dimensions}
          scale={xScale}
          formatTick={formatDate}
        />
        <Line
          data={data}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
        />
      </Chart>
    </div>
  );
};
export { Timeline };
