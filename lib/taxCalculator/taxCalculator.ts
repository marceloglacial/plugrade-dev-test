import { formatCurrency } from '@/lib';

export function taxCalculator(income: number, taxData: ITaxData): ITaxCalculatorResult {
    let totalTaxes = 0;
    let taxDetails: ITaxDetail[] = [];

    for (const bracket of taxData.tax_brackets) {
        if (income >= bracket.min) {
            const taxableIncome = bracket.max ? Math.min(income, bracket.max) - bracket.min : income - bracket.min;
            if (taxableIncome > 0 || income === 0) {
                const taxesOwed = taxableIncome * bracket.rate;
                totalTaxes += taxesOwed;
                taxDetails.push({
                    min: formatCurrency(bracket.min),
                    max: bracket.max ? formatCurrency(bracket.max) : 'above',
                    tax: formatCurrency(taxesOwed),
                    rate: `${(bracket.rate * 100).toFixed(2)}%`
                });
            }
        }
    }

    const effectiveRate = income > 0 ? totalTaxes / income : 0;

    return {
        totalTaxes: formatCurrency(totalTaxes),
        effectiveRate: `${(effectiveRate * 100).toFixed(2)}%`,
        taxDetails
    };
}
