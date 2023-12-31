import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { UIChartProps } from '../types/type'

const UIChart: React.FC<UIChartProps> = ({ type, color }) => {
    const generateRandomData = () => {
        const data = []
        let currentValue = 0

        while (currentValue <= 20) {
            const value = Math.floor(Math.random() * 100) // Generate random values between 0 and 100
            data.push(value)

            currentValue++
        }

        return data
    }

    const randomData = generateRandomData()
    const options = {
        chart: {
            type: type,
        },

        xAxis: {
            visible: false, // hide x-axis
        },
        yAxis: {
            visible: false, // hide y-axis
        },
        series: [
            {
                name: null,
                data: randomData,
                color: color,
                fillOpacity: type === 'area' ? 0.3 : 1,
            },
        ],
        title: {
            text: null, // remove title
        },
        credits: {
            enabled: false,
        },
        accessibility: {
            enabled: false, // disable accessibility
        },
        legend: {
            enabled: false, // hide legend
        },
        tooltip: {
            enabled: false, // Disable tooltip
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: true,
                },
            },
        },
    }

    return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default UIChart
