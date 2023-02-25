import React from "react";
import ChartBar from './ChartBar';
import "../../styles/chart.css";

const Chart = (props) => {
    const dataPointvalues = props.chartData.map(data => data.value);
    const totalMaximum = Math.max(...dataPointvalues);

return (
    <div className="chart">
        {
            props.chartData.map(data => 
            <ChartBar
                key={ data.id }
                value={ data.value }
                maxValue={ totalMaximum }
                label={ data.label }
            />
        )}
    </div>
    );
};

export default Chart;