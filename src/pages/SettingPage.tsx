import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { addChart, updateChart, removeChart, ChartInstance } from '../redux/chartConfigSlice'
import ChartConfigModal from '../components/ChartConfigModal'
import UIChart from '../components/UIChart'

interface SettingPageProps {
    // Define your props here
}

const SettingPage: React.FC<SettingPageProps> = () => {
    const [isModalOpen, setModalOpen] = useState(false)
    const [isAddChart, setIsAddChart] = useState('')
    const [currentChart, setCurrentChart] = useState<ChartInstance | undefined>(undefined)
    const charts = useSelector((state: RootState) => state.chartConfig.charts)
    const dispatch = useDispatch()

    const handleAddChart = () => {
        setCurrentChart(undefined)
        setModalOpen(true)
        setIsAddChart('add')
    }

    const handleUpdateChart = (chart: ChartInstance) => {
        setCurrentChart(chart)
        setModalOpen(true)
        setIsAddChart('update')
    }

    const handleDeleteChart = (chartId: number) => {
        dispatch(removeChart(chartId))
    }

    const handleSaveChart = (chart: ChartInstance) => {
        if (currentChart) {
            dispatch(updateChart(chart))
        } else {
            dispatch(addChart(chart))
        }
        setModalOpen(false)
    }

    return (
        <div className='container mx-auto p-4'>
            <div className='flex justify-center'>
                <button
                    onClick={handleAddChart}
                    className='bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 mb-4'
                >
                    Add New Chart
                </button>
            </div>

            {isModalOpen && (
                <ChartConfigModal
                    chart={currentChart}
                    onClose={() => setModalOpen(false)}
                    onSave={handleSaveChart}
                    isUpdate={currentChart !== null}
                    isAddChart={isAddChart}
                />
            )}

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {charts.map((chart) => (
                    <li key={chart.id} className='bg-white rounded-lg overflow-hidden shadow-md'>
                        <UIChart type={chart.type} color={chart.color} />

                        <div className='p-4 bg-gray-100 rounded-lg shadow-md'>
                            <div className='mb-4'>
                                <h3 className='text-2xl font-bold text-indigo-700'>{chart.name}</h3>
                                <p className='text-sm text-gray-600'>{chart.type}</p>
                            </div>
                            <div className='flex space-x-2'>
                                <button
                                    onClick={() => handleUpdateChart(chart)}
                                    className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full flex-1'
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDeleteChart(chart.id)}
                                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex-1'
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SettingPage
