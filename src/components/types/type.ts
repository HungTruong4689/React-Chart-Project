// types.ts

import { Data } from '../../utils/data'

export enum ChartType {
    Line = 'line',
    Bar = 'bar',
    Column = 'column',
    Area = 'area',
    Scatter = 'scatter',
    Spline = 'spline',
}

export type DateRangeOption = '1M' | '6M' | '1Y' | '5Y' | 'all'
export type ChartRangeOption = 'line' | 'bar' | 'column' | 'area' | 'scatter' | 'spline'

export interface DateRangeButtonProps {
    label: string
    value: DateRangeOption
    onClick: () => void
    isSelected: boolean
}

//Generic Chart
export interface GenrericChartProps {
    data: Data
    type: ChartRangeOption
    color: string
    name: string
}

//UI Chart
export interface UIChartProps {
    type: ChartRangeOption
    color: string
}

//Setting Page
export interface SettingPageProps {}

//View Page
export interface ViewPageProps {}

//Config Modal
export type ChartConfigModalProps = {
    chart?: ChartInstance
    onClose: () => void
    onSave: (chart: ChartInstance) => void
    isUpdate?: boolean
    isAddChart: string
}

//Redux slice of chart
export type ChartInstance = {
    id: number
    type: ChartRangeOption
    name: string
    color: string
}

export type ChartConfigState = {
    charts: ChartInstance[]
}
