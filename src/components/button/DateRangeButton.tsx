import React from 'react'
import { DateRangeOption } from '../types/type'

interface DateRangeButtonProps {
    label: string
    value: DateRangeOption
    onClick: () => void
    isSelected: boolean
}

const DateRangeButton: React.FC<DateRangeButtonProps> = ({ label, onClick, isSelected }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 w-16 mb-2 ml-2 ${
                isSelected && 'bg-blue-700'
            }`}
        >
            {label}
        </button>
    )
}
export default DateRangeButton
