import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import GenericChart from '../components/GenericChart'
import { data } from '../utils/data'
import { RootState } from '../redux/store'

interface ViewPageProps {}

const ViewPage: React.FC<ViewPageProps> = () => {
    const charts = useSelector((state: RootState) => state.chartConfig.charts)

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const filteredData = data.filter((item) => {
        const itemDate = new Date(item.date).getTime()
        const start = startDate ? new Date(startDate).getTime() : Number.MIN_SAFE_INTEGER
        const end = endDate ? new Date(endDate).getTime() : Number.MAX_SAFE_INTEGER
        return itemDate >= start && itemDate <= end
    })

    return (
        <div className=' p-8'>
            <h1 className='text-3xl font-bold mb-6 text-blue-500 flex justify-center'>
                My React Highcharts App - View Page
            </h1>

            <div className='flex justify-center items-center gap-4 mb-4 mx-auto'>
                <div className='relative'>
                    <label
                        htmlFor='startDate'
                        className='block text-sm font-medium text-gray-700 mb-1'
                    >
                        Start Date
                    </label>
                    <input
                        id='startDate'
                        type='date'
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className='input-date border border-gray-300 rounded-md p-2'
                    />
                </div>
                <div className='relative'>
                    <label
                        htmlFor='endDate'
                        className='block text-sm font-medium text-gray-700 mb-1'
                    >
                        End Date
                    </label>
                    <input
                        id='endDate'
                        type='date'
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className='input-date border border-gray-300 rounded-md p-2'
                    />
                </div>
            </div>

            {/* {filteredData.length === 0 ? (
                <p className='text-white'>No data available for the selected date range.</p>
            ) : (
                <div className='grid grid-cols-3 gap-4'>
                    {charts.map((chart) => (
                        <GenericChart
                            key={chart.id}
                            type={chart.type}
                            data={filteredData}
                            color={chart.color}
                            name={chart.name}
                        />
                    ))}
                </div>
            )} */}
            {filteredData.length === 0 ? (
                <p className='text-white'>No data available for the selected date range.</p>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {charts.map((chart) => (
                        <GenericChart
                            key={chart.id}
                            type={chart.type}
                            data={filteredData}
                            color={chart.color}
                            name={chart.name}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ViewPage
