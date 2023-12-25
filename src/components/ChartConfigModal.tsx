import React, { useState, useEffect } from 'react'
import { ChartInstance } from '../redux/chartConfigSlice'

type ChartConfigModalProps = {
    chart?: ChartInstance
    onClose: () => void
    onSave: (chart: ChartInstance) => void
    isUpdate?: boolean // Flag to determine if it's an update operation
}

const ChartConfigModal: React.FC<ChartConfigModalProps> = ({
    chart,
    onClose,
    onSave,
    isUpdate = false,
}) => {
    const [chartName, setChartName] = useState('')
    const [chartType, setChartType] = useState<
        'line' | 'bar' | 'column' | 'area' | 'scatter' | 'spline'
    >('line')
    const [chartColor, setChartColor] = useState('#000000')

    const chartTypes: ChartInstance['type'][] = [
        'line',
        'bar',
        'column',
        'area',
        'scatter',
        'spline',
    ]
    useEffect(() => {
        if (chart && isUpdate) {
            setChartName(chart.name)
            setChartType(chart.type)
            setChartColor(chart.color)
        }
    }, [chart, isUpdate])

    const handleSubmit = () => {
        const newChart: ChartInstance = {
            id: isUpdate && chart ? chart.id : Date.now(),
            name: chartName,
            type: chartType,
            color: chartColor,
        }
        onSave(newChart)
    }

    return (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-30'>
            <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
                <div className='mt-3 text-center'>
                    <div className='mt-2'>
                        <input
                            type='text'
                            value={chartName}
                            onChange={(e) => setChartName(e.target.value)}
                            placeholder='Chart Name'
                            className='px-4 py-2 border rounded-md'
                        />
                        <select
                            value={chartType}
                            onChange={(e) =>
                                setChartType(
                                    e.target.value as
                                        | 'line'
                                        | 'bar'
                                        | 'column'
                                        | 'area'
                                        | 'scatter'
                                        | 'spline',
                                )
                            }
                            className='px-4 py-2 border rounded-md mx-2'
                        >
                            {/* <option value='line'>Line</option>
                            <option value='column'>Column</option>
                            <option value='area'>Area</option> */}
                            {chartTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type.charAt(0).toUpperCase() + type.slice(1)}{' '}
                                    {/* Capitalize the first letter */}
                                </option>
                            ))}
                        </select>
                        <input
                            type='color'
                            value={chartColor}
                            onChange={(e) => setChartColor(e.target.value)}
                            className='border rounded-md mx-2'
                        />
                    </div>
                    <div className='items-center px-4 py-3'>
                        <button
                            onClick={handleSubmit}
                            className='px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300'
                        >
                            Save Chart
                        </button>
                    </div>
                </div>
                <div className='text-center sm:mt-5'>
                    <button onClick={onClose} className='mt-3 text-sm underline'>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChartConfigModal
