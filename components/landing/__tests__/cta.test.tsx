import { render, screen } from '@testing-library/react';
import { Cta } from '../cta';

describe('CTA Component', () => {
  it('renders with proper accessibility attributes', () => {
    render(<Cta />);
    
    // Check for region role
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('aria-label', 'Call to action');
    
    // Check for heading
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Ready to revolutionize fish health monitoring?');
    
    // Check for action buttons group
    const buttonGroup = screen.getByRole('group', { name: 'Action buttons' });
    expect(buttonGroup).toBeInTheDocument();
    
    // Check for individual buttons
    const startButton = screen.getByRole('button', { name: 'Start monitoring fish health' });
    expect(startButton).toBeInTheDocument();
    
    const demoButton = screen.getByRole('button', { name: 'Schedule a product demo' });
    expect(demoButton).toBeInTheDocument();
  });

  it('renders with proper link attributes', () => {
    render(<Cta />);
    
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    
    buttons.forEach(button => {
      expect(button).toHaveAttribute('href', '#');
    });
  });

  it('renders with proper motion animation attributes', () => {
    render(<Cta />);
    
    const motionDiv = screen.getByTestId('motion-container');
    expect(motionDiv).toHaveStyle({
      opacity: '1',
      transform: 'translateY(0px)',
    });
  });
}); 