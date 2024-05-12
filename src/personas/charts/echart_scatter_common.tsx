import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface EChartsChartProps {
  data: [string, number][];
  title: string;
  xAxisName?: string;
  yAxisName?: string;
  colorRows1?: number;
  colorRows2?: number;
  colorRows3?: number;
  colorRows4?: number;
  colorRows5?: number;
  colorRows6?: number;
}
const EChartsChart: React.FC<EChartsChartProps> = ({
  data,
  title,
  xAxisName = "",
  yAxisName = "",
  colorRows1,
  colorRows2,
  colorRows3,
  colorRows4,
  colorRows5,
  colorRows6,
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chartDom = chartContainerRef.current;
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    const option: echarts.EChartsOption = {
      title: {
        text: title,
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
        name: xAxisName,
        data: data.map((item) => item[0]),
      },
      yAxis: {
        type: "value",
        name: yAxisName,
      },
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
          startValue: data[0][0],
        },
        {
          type: "inside",
        },
      ],
      visualMap: {
        top: 40,
        right: 10,
        pieces: [
          {
            gt: colorRows1,
            lte: colorRows2,
            color: "#fb4e0f",
          },
          {
            gt: colorRows2,
            lte: colorRows3,
            color: "#fbac0f",
          },
          {
            gt: colorRows3,
            lte: colorRows4,
            color: "#e3fb0f",
          },
          {
            gt: colorRows4,
            lte: colorRows5,
            color: "#b8fb0f",
          },
          {
            gt: colorRows5,
            lte: colorRows6,
            color: "#52fb0f",
          },
        ],
        outOfRange: {
          color: "#999",
        },
      },
      series: [
        {
          name: title,
          type: "line",
          data: data.map((item) => item[1]),
          markLine: {
            silent: true,
            lineStyle: {
              color: "#008975",
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

    return () => {
      myChart.dispose();
    };
  }, [data, title, xAxisName, yAxisName]);

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "400px" }} />
  );
};

export default EChartsChart;
