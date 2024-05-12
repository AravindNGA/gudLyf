import React from "react";
import {
  getBarTooltipFormatter,
  ReactEChartsWithTheme,
} from "@nexusui/echarts-utility";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import type {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  LegendComponentOption,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import type { LineSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// Register the required components, it will generate minimal bundle
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

// Combine an Option type with only required components and charts via ComposeOption
type ECOption = echarts.ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
>;

export const options: ECOption = {
  title: {
    text: "Temprature Analysis",
    subtext: "Sample temprature analysis",
  },
  tooltip: {
    trigger: "axis",
    formatter: getBarTooltipFormatter({
      xAxisTitle: "Cell Temprature",
      yAxisTitle: "Charge Capacity",
    }),
  },
  legend: {
    bottom: 0,
    left: 0,
  },
  xAxis: {
    type: "category",
    name: "Cell Temprature (°C)",
    data: ["15°C", "20°C", "30°C", "40°C", "50°C"],
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    name: "Charge Capacity (Ah)",
  },
  series: [
    {
      name: "Group 1",
      type: "line",
      showSymbol: false,
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: [3.935, 3.833, 3.668, 3.602, 3.489],
    },
    {
      name: "Group 2",
      type: "line",
      showSymbol: false,
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: [3.375, 3.933, 3.568, 3.902, 3.289],
    },
    {
      name: "Group 3",
      type: "line",
      showSymbol: false,
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: [3.175, 4.233, 4.568, 3.202, 3.689],
    },
    {
      name: "Group 4",
      type: "line",
      showSymbol: false,
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: [3.375, 3.833, 3.968, 3.702, 3.289],
    },
  ],
};

const SeriesLineChartExample: React.FC<{
  option?: ECOption;
  height?: number;
}> = ({ option = options, height = 600 }) => (
  <ReactEChartsWithTheme
    echarts={echarts}
    option={option}
    style={{ height, padding: "24px", border: "#B71c1c", borderRadius: "8px" }}
  />
);

export default SeriesLineChartExample;
