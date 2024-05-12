import * as echarts from "echarts";
import React, { useEffect } from "react";

const MyChartComponent: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById("main");
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    // Sample local data (replace this with your actual JSON data)
    const jsonData = [
      ["2022-01-01", 30],
      ["2022-01-02", 50],
      ["2022-01-03", 80],
      ["2022-01-04", 120],
      ["2022-01-05", 180],
      ["2022-01-06", 250],
      ["2022-01-07", 320],
    ];

    const option: echarts.EChartsOption = {
      title: {
        text: "Current",
        left: "1%",
      },
      tooltip: {
        trigger: "axis",
      },
      grid: {
        left: "5%",
        right: "15%",
        bottom: "10%",
      },
      xAxis: {
        type: "category",
        data: jsonData.map((item) => item[0]),
      },
      yAxis: {},
      toolbox: {
        right: 10,
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          restore: {},
          saveAsImage: {},
        },
      },
      dataZoom: [
        {
          startValue: "1",
        },
        {
          type: "inside",
        },
      ],
      visualMap: {
        top: 50,
        right: 10,
        pieces: [
          { gt: -10, lte: -5, color: "#93CE07" },
          { gt: 0, lte: 10, color: "#FBDB0F" },
          { gt: 100, lte: 150, color: "#FC7D02" },
          { gt: 150, lte: 200, color: "#FD0100" },
          { gt: 200, lte: 300, color: "#AA069F" },
          { gt: 300, color: "#AC3B2A" },
        ],
        outOfRange: {
          color: "#999",
        },
      },
      series: [
        {
          name: "Current vs Cycle Count",
          type: "line",
          data: jsonData.map((item) => item[1]),
          markLine: {
            silent: true,
            lineStyle: {
              color: "#333",
            },
            data: [
              { yAxis: 50 },
              { yAxis: 100 },
              { yAxis: 150 },
              { yAxis: 200 },
              { yAxis: 300 },
            ],
          },
        },
      ],
    };

    myChart.setOption(option);

    // Clean up
    return () => {
      myChart.dispose(); // Dispose the chart on component unmount
    };
  }, []); // Run effect only once on component mount

  return <div id="main" style={{ width: "100%", height: "400px" }} />;
};

export default MyChartComponent;
