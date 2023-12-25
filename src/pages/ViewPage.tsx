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

    // return (
    //     <div className='bg-green-500'>
    //         <h1>My React Highcharts App - View Page</h1>
    //         <div className='flex justify-between items-center mb-4'>
    //             <input
    //                 type='date'
    //                 value={startDate}
    //                 onChange={(e) => setStartDate(e.target.value)}
    //                 className='input-date'
    //             />
    //             <input
    //                 type='date'
    //                 value={endDate}
    //                 onChange={(e) => setEndDate(e.target.value)}
    //                 className='input-date'
    //             />
    //         </div>
    //         <div className='grid grid-cols-2 gap-4'></div>
    //         {filteredData.length === 0 ? (
    //             <p>No data available for the selected date range.</p>
    //         ) : (
    //             <div className='grid grid-cols-3 gap-4'>
    //                 {charts.map((chart) => (
    //                     <GenericChart
    //                         key={chart.id}
    //                         type={chart.type}
    //                         data={filteredData}
    //                         color={chart.color}
    //                         name={chart.name}
    //                     />
    //                 ))}
    //             </div>
    //         )}
    //     </div>
    // )
    return (
        <div className=' p-8'>
            <h1 className='text-3xl font-bold mb-6 text-blue-500 flex justify-center'>
                My React Highcharts App - View Page
            </h1>

            <div className='flex justify-between items-center mb-4'>
                <input
                    type='date'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className='input-date'
                />
                <input
                    type='date'
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className='input-date'
                />
            </div>

            {filteredData.length === 0 ? (
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
            )}
        </div>
    )
}

export default ViewPage
