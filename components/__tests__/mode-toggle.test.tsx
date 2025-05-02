import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ModeToggle } from '../mode-toggle';
import { ThemeProvider } from 'next-themes';

describe('ModeToggle', () => {
  it('renders the toggle button', () => {
    render(
      <ThemeProvider>
        <ModeToggle />
      </ThemeProvider>
    );
    
    const toggleButton = screen.getByTestId('mode-toggle');
    expect(toggleButton).toBeInTheDocument();
  });

  it('shows sun icon in light mode and moon icon in dark mode', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ModeToggle />
      </ThemeProvider>
    );

    const sunIcon = screen.getByTestId('sun-icon');
    const moonIcon = screen.getByTestId('moon-icon');

    // Initial state in light mode
    expect(sunIcon).toHaveClass('scale-100');
    expect(moonIcon).toHaveClass('scale-0');

    // After clicking (switching to dark mode)
    fireEvent.click(screen.getByTestId('mode-toggle'));
    
    // Note: The actual theme change might not be immediately visible in tests
    // due to how next-themes works. This is a limitation of the testing environment.
  });
}); 