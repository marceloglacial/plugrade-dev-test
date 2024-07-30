import { API_URL } from '@/constants'
import { useEffect, useState } from 'react'

export const useTaxBrackets = (year: string) => {
    const [data, setData] = useState<null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<string | null>(null)

    useEffect(() => {
        const fetchTaxBrackets = async () => {
            try {
                const response = await fetch(`${API_URL}/${year}`);
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                if (error instanceof Error) {
                    setIsError(`Error fetching data: ${error.message}`);
                } else {
                    setIsError('An unknown error occurred');
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchTaxBrackets();
    }, [year])

    return { data, isError, isLoading }
}
