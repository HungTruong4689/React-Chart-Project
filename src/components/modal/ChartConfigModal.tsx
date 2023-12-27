import React, { useState, useEffect } from 'react'
import { ChartConfigModalProps, ChartInstance, ChartType } from '../types/type'

const ChartConfigModal: React.FC<ChartConfigModalProps> = ({
    chart,
    onClose,
    onSave,
    isUpdate = false,
    isAddChart,
}) => {
    const [chartName, setChartName] = useState('')
    const [chartType, setChartType] = useState<ChartType>(ChartType.Line)
    const [chartColor, setChartColor] = useState('#000000')

    useEffect(() => {
        if (chart && isUpdate) {
            setChartName(chart.name)
            setChartType(chart.type as ChartType)
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
            <div className='relative top-20 mx-auto p-6 border w-96 shadow-lg rounded-md bg-white'>
                <h2 className='text-2xl font-semibold mb-4 text-center text-blue-500'>
                    {isAddChart === 'add' ? 'Add New Chart' : 'Update Chart'}
                </h2>
                <div className='mt-3 text-center'>
                    <div className='mt-2 flex flex-col items-center'>
                        <input
                            type='text'
                            value={chartName}
                            onChange={(e) => setChartName(e.target.value)}
                            placeholder='Chart Name'
                            className='px-4 py-2 border rounded-md mb-2 w-full'
                        />
                        <select
                            value={chartType}
                            onChange={(e) => setChartType(e.target.value as ChartType)}
                            className='px-4 py-2 border rounded-md mb-2 w-full'
                        >
                            {Object.values(ChartType).map((type) => (
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
                            className='border rounded-md mb-4 w-full'
                        />
                    </div>
                    <div className='items-center'>
                        <button
                            onClick={handleSubmit}
                            className='px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300'
                        >
                            Save Chart
                        </button>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <button
                        onClick={onClose}
                        className='text-sm text-gray-500 hover:underline focus:outline-none'
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChartConfigModal
