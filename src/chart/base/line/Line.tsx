import React from "react";
import * as d3 from "d3";

interface LineProps {
  data: any[];
  xAccessor: (elem: any) => any;
  yAccessor: (elem: any) => any;
}
const Line = ({ data, xAccessor, yAccessor }: LineProps) => {
  const lineGenerator = d3
    .line()
    .x(xAccessor)
    .y(yAccessor)
    .curve(d3.curveMonotoneX);

  return <path d={lineGenerator(data)?.toString()} />;
};
export { Line };
