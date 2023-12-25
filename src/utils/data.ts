function generateData(startDate: string | number | Date, endDate: number | Date) {
    const data = []
    const currentDate = new Date(startDate)

    while (currentDate <= endDate) {
        const formattedDate = currentDate.toISOString().split('T')[0]
        const value = Math.floor(Math.random() * 100) + 200 // Example: Generating random values between 200 and 300
        data.push({ date: formattedDate, value })

        currentDate.setDate(currentDate.getDate() + 1)
    }

    return data
}

const initialData = [
    {
        date: '2020-01-01',
        value: 100,
    },
    {
        date: '2020-01-02',
        value: 120,
    },
    {
        date: '2020-01-03',
        value: 130,
    },
]

const currentDate = new Date()

// Generate data until the current date
export const data = [
    ...initialData,
    ...generateData(initialData[initialData.length - 1].date, currentDate),
]

export type Data = typeof data
