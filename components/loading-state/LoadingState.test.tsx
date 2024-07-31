import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoadingState } from './LoadingState';
import { styles } from './LoadingStateStyles';

describe('LoadingState component', () => {
  it('should render without crashing', () => {
    render(<LoadingState />);
    expect(screen.getByTestId('loading-state')).toBeInTheDocument();
  });

  it('should display the correct title', () => {
    render(<LoadingState />);
    expect(screen.getByTestId('loading-state-title')).toHaveTextContent(
      'Calculating your taxes ...'
    );
  });

  it('applies the correct styles', () => {
    render(<LoadingState />);

    const container = screen.getByTestId('loading-state');
    expect(container).toHaveClass(styles.contaner);
  });
});
