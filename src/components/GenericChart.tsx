import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { Data } from '../utils/data'

interface GenrericChartProps {
    data: Data
    type: 'line' | 'bar' | 'column' | 'area' | 'scatter' | 'spline'
    color: string
    name: string
}

const GenrericChart: React.FC<GenrericChartProps> = ({ data, type, color, name }) => {
    const [selectedDateRange, setSelectedDateRange] = useState<
        'oneMonth' | 'sixMonths' | 'oneYear' | 'fiveYears' | 'all'
    >('oneMonth')
    const getFilteredData = (data: Data, selectedDateRange: string): Data => {
        const currentDate = new Date(data[data.length - 1].date)
        const lastMonth = new Date(currentDate)
        lastMonth.setMonth(lastMonth.getMonth() - 1)

        const lastSixMonths = new Date(currentDate)
        lastSixMonths.setMonth(lastSixMonths.getMonth() - 6)

        const lastYear = new Date(currentDate)
        lastYear.setFullYear(lastYear.getFullYear() - 1)

        const lastFiveYears = new Date(currentDate)
        lastFiveYears.setFullYear(lastFiveYears.getFullYear() - 5)

        switch (selectedDateRange) {
            case 'oneMonth':
                return data.filter((item) => new Date(item.date) >= lastMonth)

            case 'sixMonths':
                return data.filter((item) => new Date(item.date) >= lastSixMonths)

            case 'oneYear':
                return data.filter((item) => new Date(item.date) >= lastYear)

            case 'fiveYears':
                return data.filter((item) => new Date(item.date) >= lastFiveYears)

            default:
                return data
        }
    }

    // Update filteredData based on the selected date range
    const filteredData = getFilteredData(data, selectedDateRange)

    const dates = filteredData.map((item) => item.date)
    const values = filteredData.map((item) => item.value)

    const options = {
        chart: {
            type: type,
        },
        title: {
            text: name,
        },
        xAxis: {
            categories: dates,
            title: {
                text: 'Date',
            },
        },
        yAxis: {
            title: {
                text: 'Value',
            },
        },
        series: [
            {
                name: 'Value',
                data: values,
                color: color,
                fillOpacity: type === 'area' ? 0.3 : 1,
            },
        ],
        credits: {
            enabled: false,
        },
    }

    const dateRangeSelection = (
        <div className='flex flex-wrap justify-center space-x-2 mb-4'>
            <button
                onClick={() => setSelectedDateRange('oneMonth')}
                className={`px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 w-16 mb-2 ml-2 ${
                    selectedDateRange === 'oneMonth' && 'bg-blue-700'
                }`}
            >
                1M
            </button>
            <button
                onClick={() => setSelectedDateRange('sixMonths')}
                className={`px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 w-16 mb-2 ${
                    selectedDateRange === 'sixMonths' && 'bg-blue-700'
                }`}
            >
                6M
            </button>
            <button
                onClick={() => setSelectedDateRange('oneYear')}
                className={`px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 w-16 mb-2 ${
                    selectedDateRange === 'oneYear' && 'bg-blue-700'
                }`}
            >
                1Y
            </button>
            <button
                onClick={() => setSelectedDateRange('fiveYears')}
                className={`px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 w-16 mb-2 ${
                    selectedDateRange === 'fiveYears' && 'bg-blue-700'
                }`}
            >
                5Y
            </button>
            <button
                onClick={() => setSelectedDateRange('all')}
                className={`px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 w-16 mb-2 ${
                    selectedDateRange === 'all' && 'bg-blue-700'
                }`}
            >
                All
            </button>
        </div>
    )

    return (
        <div className='flex flex-col items-center mt-8 rounded-lg overflow-hidden shadow-lg bg-gray-100'>
            <div className='flex flex-col items-center mt-8'>{dateRangeSelection}</div>
            <div className='w-full bg-gray-100 p-6 '>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </div>
    )
}

export default GenrericChart
