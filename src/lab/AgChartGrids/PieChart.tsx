import React from "react";
import { AgChartOptions } from "ag-charts-community";
import { AgChartsReact } from "ag-charts-react";

const chartOptions: AgChartOptions = {
  data: [
    { value: 56.9 },
    { value: 22.5 },
    { value: 6.8 },
    { value: 8.5 },
    { value: 2.6 },
    { value: 1.9 },
  ],
  autoSize: true,
  series: [
    {
      type: "pie",
      angleKey: "value",
    },
  ],
  //   padding: {
  //     left: 80,
  //     right: 80,
  //     bottom: 80,
  //     top: 80,
  //   },
};

export const PieChart: React.FC = () => {
  return <AgChartsReact options={chartOptions} />;
};
