import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

function Chart({ labels, prices }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bitcoin price",
        data: prices,
        fill: true,
        backgroundColor: "rgba(249,148,27,0.2)",
        borderColor: "rgb(249,148,27)",
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: false,
        text: "Bitcoin prices",
      },
      legend: {
        display: false,
        position: "bottom",
      },
    },
  };

  return (
    <div className='chart-holder'>
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;
