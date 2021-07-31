import React from "react";
import ResizeObserver from "resize-observer-polyfill";
import { ChartBaseDimensions, ChartDimensions } from "../types/dimensionTypes";

const defaultChartMargins = {
  marginTop: 40,
  marginRight: 30,
  marginBottom: 40,
  marginLeft: 75,
};

export const createChartDimension = (
  dimensions: ChartBaseDimensions
): ChartDimensions => {
  const defaultDimensions = {
    ...defaultChartMargins,
    ...dimensions,
  };
  return {
    ...defaultDimensions,
    boundedHeight: Math.max(
      defaultDimensions.height -
        defaultDimensions.marginLeft!! -
        defaultDimensions.marginRight!!,
      0
    ),
    boundedWidth: Math.max(
      defaultDimensions.width -
        defaultDimensions.marginBottom!! -
        defaultDimensions.marginTop!!,
      0
    ),
  };
};

export const useChartDimensions = (
  dimensions?: ChartDimensions
): [React.RefObject<any>, ChartDimensions] => {
  const chartRef = React.useRef(null!);
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (dimensions?.width && dimensions.height) return;

    const element = chartRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (height !== entry.contentRect.height)
        setHeight(entry.contentRect.height);
      if (width !== entry.contentRect.width) setWidth(entry.contentRect.width);
    });
    resizeObserver.observe(element);

    return () => resizeObserver.unobserve(element);
  }, [height, width, dimensions]);

  const updatedDimensions = createChartDimension({
    ...dimensions,
    width: dimensions?.width || width,
    height: dimensions?.height || height,
  });

  console.log(updatedDimensions);
  return [chartRef, updatedDimensions];
};
