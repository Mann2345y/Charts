import React, { useEffect } from "react";
import * as echarts from "echarts";
import wineData from "../data.json";

const BarGraph = () => {
  //initialise variables
  var tempSum = 0,
    tempCount = 0,
    categories = new Set(),
    malic_acid_averages = [];
  // loop to create array of categories
  wineData.forEach((item) => {
    categories.add(item["Alcohol"]);
  });
  // loop to calculate malic acid averages for each category
  categories.forEach((category) => {
    tempSum = 0;
    tempCount = 0;
    wineData.forEach((data) => {
      if (data["Alcohol"] === category) {
        tempSum += data["Malic Acid"];
        tempCount++;
      }
    });
    malic_acid_averages.push(tempSum / tempCount);
  });

  // options for the chart
  const option = {
    xAxis: {
      name: "Alcohol",
      type: "category",
      data: categories,
      nameLocation: "middle",
      nameGap: 50,
    },
    yAxis: {
      name: "Malic Acid (Average)",
      type: "value",
      nameLocation: "middle",
      nameGap: 50,
    },
    nameTextStyle: {
      fontSize: "20",
    },
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
        data: malic_acid_averages,
        type: "bar",
      },
    ],
  };
  //useEffect to initialise chart
  useEffect(() => {
    var barChart = document.getElementById("bargraph");
    var myChart = echarts.init(barChart);
    option && myChart.setOption(option);
  }, []);
  return (
    <>
      <div
        id="bargraph"
        style={{
          width: "90%",
          height: "90%",
        }}
      ></div>
    </>
  );
};

export default BarGraph;
