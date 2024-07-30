export const formatCurrency = (value: number, currency = 'CAD') => {
    return new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: currency,
    }).format(value);
};
