import { getTaxBrackets } from './getTaxBrackets';

global.fetch = jest.fn();

describe('getTaxBrackets', () => {
    const mockSetData = jest.fn();
    const mockSetIsError = jest.fn();
    const mockSetIsSubmitting = jest.fn();

    const defaultProps = {
        year: 2020,
        setData: mockSetData,
        setIsError: mockSetIsError,
        setIsSubmitting: mockSetIsSubmitting,
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should set data when fetch is successful', async () => {
        const mockResponse = { taxBrackets: [{ rate: 10, income: 10000 }] };
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse,
        } as Response);

        await getTaxBrackets(defaultProps);

        expect(mockSetIsError).toHaveBeenCalledWith(false);
        expect(mockSetData).toHaveBeenCalledWith(mockResponse);
        expect(mockSetIsSubmitting).toHaveBeenCalledWith(false);
    });

    it('should set error when fetch returns non-ok response', async () => {
        const mockErrorResponse = { errors: ['Server error'] };
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
            ok: false,
            status: 500,
            json: async () => mockErrorResponse,
        } as Response);

        await getTaxBrackets(defaultProps);

        expect(mockSetIsError).toHaveBeenCalled();
        expect(mockSetIsSubmitting).toHaveBeenCalledWith(false);
    });

    it('should set error when fetch throws an error', async () => {
        const mockError = new Error('Network error');
        (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(mockError);

        await getTaxBrackets(defaultProps);

        expect(mockSetIsError).toHaveBeenCalledWith(mockError);
        expect(mockSetIsSubmitting).toHaveBeenCalledWith(false);
    });
});
