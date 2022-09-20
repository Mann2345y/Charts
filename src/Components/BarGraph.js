import React, { useEffect } from "react";
import * as echarts from "echarts";
import wineData from "../data.json";

const BarGraph = () => {
  //initialise variables
  var categories = new Set(),
    sumArray = [],
    countArray = [],
    tempsum = 0,
    tempcount = 0,
    malic_acid_averages = [];
  // loop to create array of categories
  wineData.forEach((item) => {
    if (categories.size === 0) {
      categories.add(item["Alcohol"]);
      tempsum = item["Malic Acid"];
      tempcount = 1;
    } else {
      if (categories.has(item["Alcohol"])) {
        tempcount++;
        tempsum += item["Malic Acid"];
      } else {
        categories.add(item["Alcohol"]);
        sumArray.push(tempsum);
        countArray.push(tempcount);
        tempsum = item["Malic Acid"];
        tempcount = 1;
      }
    }
  });
  sumArray.push(tempsum);
  countArray.push(tempcount);
  console.log(sumArray, countArray, categories);
  // loop to calculate malic acid averages for each category
  categories.forEach((index) => {
    malic_acid_averages.push(sumArray[index - 1] / countArray[index - 1]);
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
