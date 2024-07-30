'use client'
export const useYears = () => {
    return {
        data: [
            {
                id: 1,
                title: '2019',
                value: 2019,
            },
            {
                id: 2,
                title: '2020',
                value: 2020,
            },
            {
                id: 3,
                title: '2021',
                value: 2021,
            },
            {
                id: 4,
                title: '2022',
                value: 2022,
            },
        ],
        isLoading: false,
        isError: null,
    }
}
