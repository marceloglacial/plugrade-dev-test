import { API_URL } from '@/constants';

export const getTaxBrackets = async ({ year, setData, setIsError, setIsSubmitting }: IGetTaxBrackets) => {
    try {
        setIsError(false);
        const response = await fetch(`${API_URL}/${year}`);
        if (!response.ok) {
            const errorObject = await response.json();
            console.error('Server error:', errorObject.errors);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
    } catch (error) {
        console.error('Error fetching data:', error);
        setIsError(error);
    } finally {
        setIsSubmitting(false);
    }
};
