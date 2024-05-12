import * as echarts from "echarts";
import { useEffect } from "react";

export type EChartsOption = echarts.EChartsOption;

export interface ChartData {
  timeData: string[];
  evaporationData: number[];
  rainfallData: number[];
}

export interface ChartConfig {
  title: string;
  evaporationYAxisName: string;
  rainfallYAxisName: string;
}

export function createEChartsLineChart(
  chartData: ChartData,
  chartConfig: ChartConfig
): void {
  const { timeData, evaporationData, rainfallData } = chartData;
  const { title, evaporationYAxisName, rainfallYAxisName } = chartConfig;

  // Retrieve chart DOM element
  const chartDom = document.getElementById("main")!;
  const myChart = echarts.init(chartDom);
  let option: EChartsOption;

  // Define chart options
  option = {
    title: {
      text: title,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        animation: false,
      },
    },
    legend: {
      data: ["Evaporation", "Rainfall"],
      left: 10,
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    axisPointer: {
      link: [{ xAxisIndex: "all" }],
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 30,
        end: 70,
        xAxisIndex: [0, 1],
      },
      {
        type: "inside",
        realtime: true,
        start: 30,
        end: 70,
        xAxisIndex: [0, 1],
      },
    ],
    grid: [
      {
        left: 60,
        right: 50,
        height: "35%",
      },
      {
        left: 60,
        right: 50,
        top: "55%",
        height: "35%",
      },
    ],
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLine: { onZero: true },
        data: timeData.map((str) => str.replace("2009/", "")),
      },
      {
        gridIndex: 1,
        type: "category",
        boundaryGap: false,
        axisLine: { onZero: true },
        data: timeData.map((str) => str.replace("2009/", "")),
        position: "top",
      },
    ],
    yAxis: [
      {
        name: evaporationYAxisName,
        type: "value",
        // Adjust max value dynamically
      },
      {
        gridIndex: 1,
        name: rainfallYAxisName,
        type: "value",
        inverse: true,
      },
    ],
    series: [
      {
        name: "Evaporation",
        type: "line",
        symbolSize: 8,
        data: evaporationData,
      },
      {
        name: "Rainfall",
        type: "line",
        xAxisIndex: 1,
        yAxisIndex: 1,
        symbolSize: 8,
        data: rainfallData,
      },
    ],
  };

  // Set chart options
  if (option) {
    myChart.setOption(option);
  }
}

const MyCompChartComponent: React.FC = () => {
  useEffect(() => {
    const chartData: ChartData = {
      timeData: [
        "2009/6/12 2:00",
        "2009/6/12 3:00",
        "2009/6/12 4:00",
        "2009/6/12 5:00",
        "2009/6/12 6:00",
        "2009/6/12 7:00",
        "2009/6/12 8:00",
        "2009/6/12 9:00",
        "2009/6/12 10:00",
        "2009/6/12 11:00",
        "2009/6/12 12:00",
      ],
      evaporationData: [
        10.5, 110.5, 120.6, 14.75, 1.5, 10.6, 10.2, 89, 0.45, 0.57,
      ],
      rainfallData: [0.5, 0.5, 0.6, 0.75, 0.5, 0.6, 0.2, 0.89, 0.45, 0.57],
    };

    const chartConfig: ChartConfig = {
      title: "Rainfall vs Evaporation",
      evaporationYAxisName: "Evaporation(m³/s)",
      rainfallYAxisName: "Rainfall(mm)",
    };

    createEChartsLineChart(chartData, chartConfig);
  }, []); // Run effect only once on component mount

  return <div id="main" style={{ width: "100%", height: "400px" }} />; // Chart container
};

export default MyCompChartComponent;
