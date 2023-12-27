import React, { useMemo, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import DateRangeButton from '../button/DateRangeButton'
import { DateRangeOption, GenrericChartProps } from '../types/type'

const GenrericChart: React.FC<GenrericChartProps> = ({ data, type, color, name }) => {
    const [selectedDateRange, setSelectedDateRange] = useState<DateRangeOption>('1M')

    // Update filteredData based on the selected date range
    // const filteredData = getFilteredData(data, selectedDateRange)
    const filteredData = useMemo(() => {
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
            case '1M':
                return data.filter((item) => new Date(item.date) >= lastMonth)

            case '6M':
                return data.filter((item) => new Date(item.date) >= lastSixMonths)

            case '1Y':
                return data.filter((item) => new Date(item.date) >= lastYear)

            case '5Y':
                return data.filter((item) => new Date(item.date) >= lastFiveYears)

            default:
                return data
        }
    }, [data, selectedDateRange])

    const dates = filteredData.map((item) => item.date)
    const values = filteredData.map((item) => item.value)

    //Config the chart
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

    const dateRanges = [
        { label: '1M', value: '1M' },
        { label: '6M', value: '6M' },
        { label: '1Y', value: '1Y' },
        { label: '5Y', value: '5Y' },
        { label: 'All', value: 'all' },
    ]
    const dateRangeSelection = (
        <div className='flex flex-wrap justify-center space-x-2 mb-4'>
            {dateRanges.map((range) => (
                <DateRangeButton
                    key={range.value}
                    label={range.label}
                    value={range.value as DateRangeOption}
                    onClick={() => setSelectedDateRange(range.value as DateRangeOption)}
                    isSelected={selectedDateRange === range.value}
                />
            ))}
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
