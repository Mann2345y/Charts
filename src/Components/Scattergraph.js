import React, { useEffect } from "react";
import * as echarts from "echarts";
import wineData from "../data.json";

const Scattergraph = () => {
  var dataSet = [];
  wineData.forEach((item) => {
    dataSet.push([item["Color intensity"], item["Hue"]]);
  });
  const option = {
    xAxis: { name: "Color Intensity" },
    yAxis: { name: "Hue" },
    color: ["#4ecca3"],
    backgroundColor: "rgb(29,30,40)",
    textStyle: { color: "#eeeeee", fontSize: "15" },
    stateAnimation: {
      animation: "auto",
      animationDuration: 1000,
      animationDurationUpdate: 500,
      animationEasing: "cubicInOut",
      animationEasingUpdate: "cubicInOut",
      animationThreshold: 2000,
      progressiveThreshold: 3000,
      progressive: 400,
      hoverLayerThreshold: 3000,
      useUTC: false,
    },
    series: [
      {
        symbolSize: 12,
        data: dataSet,
        type: "scatter",
      },
    ],
  };

  useEffect(() => {
    var ScatterChart = document.getElementById("scattergraph");
    var myChart = echarts.init(ScatterChart);
    option && myChart.setOption(option);
  }, []);

  return (
    <>
      <div
        id="scattergraph"
        style={{
          width: "100%",
          height: "100%",
        }}
      ></div>
    </>
  );
};

export default Scattergraph;
