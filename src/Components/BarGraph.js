import React, { useEffect } from "react";
import * as echarts from "echarts";
import wineData from "../data.json";

const BarGraph = () => {
  var malic_acid_1_count = 0,
    malic_acid_2_count = 0,
    malic_acid_3_count = 0,
    malic_acid_1_sum = 0,
    malic_acid_2_sum = 0,
    malic_acid_3_sum = 0;
  wineData.forEach((item) => {
    if (item["Alcohol"] === 1) {
      malic_acid_1_count++;
      malic_acid_1_sum += item["Malic Acid"];
    } else if (item["Alcohol"] === 2) {
      malic_acid_2_count++;
      malic_acid_2_sum += item["Malic Acid"];
    } else {
      malic_acid_3_count++;
      malic_acid_3_sum += item["Malic Acid"];
    }
  });
  var malic_acid_average_1 = malic_acid_1_sum / malic_acid_1_count;
  var malic_acid_average_2 = malic_acid_2_sum / malic_acid_2_count;
  var malic_acid_average_3 = malic_acid_3_sum / malic_acid_3_count;

  const option = {
    xAxis: {
      name: "Alcohol",
      type: "category",
      data: ["1", "2", "3"],
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
        data: [
          malic_acid_average_1,
          malic_acid_average_2,
          malic_acid_average_3,
        ],
        type: "bar",
      },
    ],
  };
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
