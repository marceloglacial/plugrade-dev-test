import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IncomeForm } from './IncomeForm';
import { useYears } from '@/hooks';
import { MIN_INCOME, DEFAULT_YEAR } from '@/constants';

jest.mock('@/hooks', () => ({
  useYears: jest.fn(),
}));

jest.mock('@/components', () => ({
  LoadingState: () => <div>Loading ...</div>,
  ErrorState: () => <div>Error State</div>,
}));

const mockUseYears = useYears as jest.Mock;

describe('IncomeForm', () => {
  const defaultProps = {
    taxData: { income: MIN_INCOME, year: DEFAULT_YEAR },
    setIsSubmitting: jest.fn(),
    setTaxData: jest.fn(),
    isSubmiting: false,
  };

  const taxYears = [
    { id: '1', value: 2021, title: '2021' },
    { id: '2', value: 2022, title: '2022' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading state', () => {
    mockUseYears.mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });
    render(<IncomeForm {...defaultProps} />);
    expect(screen.getByText('Loading ...')).toBeInTheDocument();
  });

  it('should render error state', () => {
    mockUseYears.mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });
    render(<IncomeForm {...defaultProps} />);
    expect(screen.getByText('Error State')).toBeInTheDocument();
  });

  it('should render the form with tax years', () => {
    mockUseYears.mockReturnValue({
      data: taxYears,
      isLoading: false,
      isError: false,
    });

    render(<IncomeForm {...defaultProps} />);
    expect(screen.getByTestId('form-container')).toBeInTheDocument();
    expect(screen.getByTestId('income-title')).toHaveTextContent(
      'Anual income'
    );
    expect(screen.getByTestId('year-title')).toHaveTextContent('Tax year');
    expect(screen.getByTestId('income-input')).toHaveValue(MIN_INCOME);
    expect(screen.getByTestId('year-select')).toHaveValue(
      DEFAULT_YEAR.toString()
    );
  });

  it('should handle input changes', () => {
    mockUseYears.mockReturnValue({
      data: taxYears,
      isLoading: false,
      isError: false,
    });

    render(<IncomeForm {...defaultProps} />);

    const incomeInput = screen.getByTestId('income-input');
    fireEvent.change(incomeInput, { target: { value: '50000' } });
    expect(incomeInput).toHaveValue(50000);

    const yearSelect = screen.getByTestId('year-select');
    fireEvent.change(yearSelect, { target: { value: 2021 } });
    expect(yearSelect).toHaveValue('2021');
  });

  it('should handle form submission', async () => {
    mockUseYears.mockReturnValue({
      data: taxYears,
      isLoading: false,
      isError: false,
    });

    render(<IncomeForm {...defaultProps} />);

    fireEvent.change(screen.getByTestId('income-input'), {
      target: { value: '60000' },
    });
    fireEvent.change(screen.getByTestId('year-select'), {
      target: { value: 2022 },
    });

    const form = screen.getByTestId('form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(defaultProps.setIsSubmitting).toHaveBeenCalledWith(true);
      expect(defaultProps.setTaxData).toHaveBeenCalledWith({
        income: 60000,
        year: 2022,
      });
    });
  });

  it('should disable inputs and button when submitting', () => {
    mockUseYears.mockReturnValue({
      data: taxYears,
      isLoading: false,
      isError: false,
    });

    const props = { ...defaultProps, isSubmiting: true };

    render(<IncomeForm {...props} />);

    expect(screen.getByTestId('income-input')).toBeDisabled();
    expect(screen.getByTestId('year-select')).toBeDisabled();
    expect(screen.getByTestId('form-submit')).toBeDisabled();
  });

  it('should handle no tax years', () => {
    mockUseYears.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    });

    render(<IncomeForm {...defaultProps} />);

    const yearSelect = screen.getByTestId('year-select');
    expect(yearSelect).toBeEmptyDOMElement();
  });

  it('should handle invalid input in handleFormDataChanges', () => {
    mockUseYears.mockReturnValue({
      data: taxYears,
      isLoading: false,
      isError: false,
    });

    render(<IncomeForm {...defaultProps} />);

    const incomeInput = screen.getByTestId('income-input');
    fireEvent.change(incomeInput, { target: { value: '' } });
    expect(incomeInput).toHaveValue(null);
  });

  it('should set correct default values of inputs', () => {
    const props = {
      ...defaultProps,
      taxData: { income: MIN_INCOME, year: DEFAULT_YEAR },
    };

    render(<IncomeForm {...props} />);

    expect(screen.getByTestId('income-input')).toHaveValue(MIN_INCOME);
    expect(screen.getByTestId('year-select')).toHaveValue(
      DEFAULT_YEAR.toString()
    );
  });
});
