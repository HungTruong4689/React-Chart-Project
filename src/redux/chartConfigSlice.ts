import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ChartInstance = {
    id: number
    type: 'line' | 'bar' | 'column' | 'area' | 'scatter' | 'spline'
    name: string
    color: string
}

export type ChartConfigState = {
    charts: ChartInstance[]
}

const initialState: ChartConfigState = {
    charts: [
        {
            id: 1,
            type: 'line',
            name: 'Chart 1',
            color: '#ff0000',
        },
        {
            id: 2,
            type: 'line',
            name: 'Chart 2',
            color: '#00ff00',
        },
        {
            id: 3,
            type: 'line',
            name: 'Chart 3',
            color: '#0000ff',
        },
    ],
}

const chartConfigSlice = createSlice({
    name: 'chartConfig',
    initialState,
    reducers: {
        addChart(state, action: PayloadAction<ChartInstance>) {
            state.charts.push(action.payload)
        },
        removeChart(state, action: PayloadAction<number>) {
            state.charts = state.charts.filter((chart) => chart.id !== action.payload)
        },
        updateChart(state, action: PayloadAction<ChartInstance>) {
            const { id } = action.payload
            const index = state.charts.findIndex((chart) => chart.id === id)
            if (index !== -1) {
                state.charts[index] = action.payload
            }
        },
    },
})

export const { addChart, removeChart, updateChart } = chartConfigSlice.actions

export default chartConfigSlice.reducer
