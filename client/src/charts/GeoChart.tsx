import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["States", "Popularity"],
    ["California", 200],
    ["Texas", 300],
    ["New York", 400],
    ["Arizona", 500],
    ["Georgia", 600],
    ["Washington", 700],
];
var options = {
    region: 'US',
    displayMode: 'regions',
    resolution: 'provinces',
}
const GeoChart = () => {
    return (
        <Chart
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );

}
export default GeoChart;