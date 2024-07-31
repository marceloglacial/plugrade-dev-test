import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorState } from './ErrorState';
import { styles } from './ErrorStateStyles';

describe('ErrorState Component', () => {
  it('should render without crashing', () => {
    render(<ErrorState />);
    expect(screen.getByTestId('error-state')).toBeInTheDocument();
  });

  it('should display the correct title', () => {
    render(<ErrorState />);
    expect(screen.getByTestId('error-state-title')).toHaveTextContent('Sorry!');
  });

  it('should display the correct error message', () => {
    render(<ErrorState />);
    expect(screen.getByTestId('error-state-content')).toHaveTextContent(
      'Something got wrong while loading the data.'
    );
  });

  it('applies the correct styles', () => {
    render(<ErrorState />);

    const container = screen.getByTestId('error-state');
    expect(container).toHaveClass(styles.container);

    const title = screen.getByTestId('error-state-title');
    expect(title).toHaveClass(styles.title);
  });
});
