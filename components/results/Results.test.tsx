import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Results } from './Results';
import { ErrorState, LoadingState } from '@/components';
import { taxCalculator } from '@/lib';

// Mock the taxCalculator function
jest.mock('@/lib', () => ({
  taxCalculator: jest.fn(),
}));

// Mock the ErrorState and LoadingState components
jest.mock('@/components', () => ({
  ErrorState: () => <div>Error loading data</div>,
  LoadingState: () => <div>Loading...</div>,
}));

describe('Results component', () => {
  const defaultProps = {
    income: 50000,
    data: {
      tax_brackets: [
        { min: 0, max: 10000, tax: 1000, rate: 10 },
        { min: 10000, max: 50000, tax: 4000, rate: 20 },
      ],
    },
    isLoading: false,
    isError: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the loading state', () => {
    render(<Results {...{ ...defaultProps, isLoading: true }} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders the error state', () => {
    render(<Results {...{ ...defaultProps, isError: true }} />);

    expect(screen.getByText('Error loading data')).toBeInTheDocument();
  });

  it('renders nothing when no tax_brackets data is available', () => {
    render(<Results {...{ ...defaultProps, data: {} }} />);

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  it('renders the results table with tax details', () => {
    const mockResult = {
      taxDetails: [
        { min: '$0.00', max: '$10000.00', tax: '$1000.00', rate: '10%' },
        { min: '$10000.00', max: '$50000.00', tax: '$4000.00', rate: '20%' },
      ],
      totalTaxes: '$5000.00',
      effectiveRate: '10%',
    };
    (taxCalculator as jest.Mock).mockReturnValue(mockResult);

    render(<Results {...defaultProps} />);

    // Check table headers
    expect(screen.getByText('Income Bracket')).toBeInTheDocument();
    expect(screen.getByText('Taxes')).toBeInTheDocument();

    // Check table rows
    expect(screen.getByTestId('bracket-0-min')).toHaveTextContent('$0.00');
    expect(screen.getByTestId('bracket-0-max')).toHaveTextContent('$10000.00');
    expect(screen.getByTestId('bracket-0-tax')).toHaveTextContent('$1000.00');
    expect(screen.getByTestId('bracket-0-rate')).toHaveTextContent('10%');

    expect(screen.getByTestId('bracket-1-min')).toHaveTextContent('$10000.00');
    expect(screen.getByTestId('bracket-1-max')).toHaveTextContent('$50000.00');
    expect(screen.getByTestId('bracket-1-tax')).toHaveTextContent('$4000.00');
    expect(screen.getByTestId('bracket-1-rate')).toHaveTextContent('20%');

    // Check footer
    expect(screen.getByText('Total taxes owned')).toBeInTheDocument();
    expect(screen.getByTestId('total-taxes')).toHaveTextContent('$5000.00');
    expect(screen.getByText('Effective Rate')).toBeInTheDocument();
    expect(screen.getByTestId('effective-rate')).toHaveTextContent('10%');
  });
});
