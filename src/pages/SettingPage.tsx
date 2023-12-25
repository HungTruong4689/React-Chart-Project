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
    const [currentChart, setCurrentChart] = useState<ChartInstance | undefined>(undefined)
    const charts = useSelector((state: RootState) => state.chartConfig.charts)
    const dispatch = useDispatch()

    const handleAddChart = () => {
        setCurrentChart(undefined)
        setModalOpen(true)
    }

    const handleUpdateChart = (chart: ChartInstance) => {
        setCurrentChart(chart)
        setModalOpen(true)
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

    // const generateRandomData = () => {
    //     const data = []
    //     let currentValue = 0

    //     while (currentValue <= 20) {
    //         const value = Math.floor(Math.random() * 100) // Generate random values between 0 and 100
    //         data.push(value)

    //         currentValue++
    //     }

    //     return data
    // }

    // const randomData = generateRandomData()

    return (
        <div className='container mx-auto p-4'>
            <button
                onClick={handleAddChart}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'
            >
                Add New Chart
            </button>

            {isModalOpen && (
                <ChartConfigModal
                    chart={currentChart}
                    onClose={() => setModalOpen(false)}
                    onSave={handleSaveChart}
                    isUpdate={currentChart !== null}
                />
            )}

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {charts.map((chart) => (
                    <li key={chart.id} className='bg-white rounded-lg overflow-hidden shadow-md'>
                        <UIChart type={chart.type} color={chart.color} />

                        <div className='p-4'>
                            <h3 className='text-lg font-semibold mb-2'>
                                {chart.name} - {chart.type}
                            </h3>
                            <div className='flex space-x-2'>
                                <button
                                    onClick={() => handleUpdateChart(chart)}
                                    className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded flex-1'
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDeleteChart(chart.id)}
                                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded flex-1'
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
