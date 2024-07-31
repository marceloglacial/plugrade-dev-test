import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
    it('should format number as CAD currency by default', () => {
        const value = 1234.56;
        const result = formatCurrency(value);
        expect(result).toBe('$1,234.56');
    });

    it('should format number as USD currency', () => {
        const value = 1234.56;
        const result = formatCurrency(value, 'USD');
        expect(result).toBe('US$1,234.56');
    });

    it('should format number as EUR currency', () => {
        const value = 1234.56;
        const result = formatCurrency(value, 'EUR');
        expect(result).toBe('€1,234.56');
    });

    it('should handle zero values', () => {
        const value = 0;
        const result = formatCurrency(value);
        expect(result).toBe('$0.00');
    });

    it('should handle negative values', () => {
        const value = -1234.56;
        const result = formatCurrency(value);
        expect(result).toBe('-$1,234.56');
    });

    it('should handle large numbers', () => {
        const value = 1234567890.12;
        const result = formatCurrency(value);
        expect(result).toBe('$1,234,567,890.12');
    });
});
