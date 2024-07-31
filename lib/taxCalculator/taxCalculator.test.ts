// taxCalculator.test.ts
import { taxCalculator } from './taxCalculator';
import { formatCurrency } from '@/lib';

jest.mock('@/lib', () => ({
    formatCurrency: jest.fn(),
}));


describe('taxCalculator', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const taxData = {
        tax_brackets: [
            { min: 0, max: 5000, rate: 0.1 },
            { min: 5000, max: 10000, rate: 0.15 },
            { min: 10000, rate: 0.2 },
        ],
    };


    it('should calculate taxes correctly with given tax brackets and income', () => {
        (formatCurrency as jest.Mock).mockImplementation((value) => `$${value.toFixed(2)}`);

        const result = taxCalculator(12000, taxData);

        expect(result.totalTaxes).toBe('$1650.00');
        expect(result.effectiveRate).toBe('13.75%');
        expect(result.taxDetails).toEqual([
            {
                min: '$0.00',
                max: '$5000.00',
                tax: '$500.00',
                rate: '10.00%',
            },
            {
                min: '$5000.00',
                max: '$10000.00',
                tax: '$750.00',
                rate: '15.00%',
            },
            {
                min: '$10000.00',
                max: 'above',
                tax: '$400.00',
                rate: '20.00%',
            },
        ]);
    });

    it('should handle zero income', () => {
        (formatCurrency as jest.Mock).mockImplementation((value) => `$${value.toFixed(2)}`);

        const result = taxCalculator(0, taxData);

        expect(result.totalTaxes).toBe('$0.00');
        expect(result.effectiveRate).toBe('0.00%');
        expect(result.taxDetails).toEqual([
            {
                min: '$0.00',
                max: '$5000.00',
                tax: '$0.00',
                rate: '10.00%',
            },
        ]);
    });


    it('should handle income less than the lowest bracket', () => {
        (formatCurrency as jest.Mock).mockImplementation((value) => `$${value.toFixed(2)}`);

        const result = taxCalculator(5000, taxData);

        expect(result.totalTaxes).toBe('$500.00');
        expect(result.effectiveRate).toBe('10.00%');
        expect(result.taxDetails).toEqual([
            {
                min: '$0.00',
                max: '$5000.00',
                tax: '$500.00',
                rate: '10.00%',
            },
        ]);
    });

    it('should handle income that fits within a single bracket', () => {
        (formatCurrency as jest.Mock).mockImplementation((value) => `$${value.toFixed(2)}`);

        const result = taxCalculator(4500, taxData);

        expect(result.totalTaxes).toBe('$450.00');
        expect(result.effectiveRate).toBe('10.00%');
        expect(result.taxDetails).toEqual([
            {
                min: '$0.00',
                max: '$5000.00',
                tax: '$450.00',
                rate: '10.00%',
            },
        ]);
    });
});
