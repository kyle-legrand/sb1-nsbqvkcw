import { render, screen, fireEvent } from '@testing-library/react';
import { Pricing } from '../pricing';

describe('Pricing Component', () => {
  it('renders with proper accessibility attributes', () => {
    render(<Pricing />);
    
    // Check for region role
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('aria-labelledby', 'pricing-heading');
    
    // Check for heading
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Simple, transparent pricing');
    
    // Check for radio group
    const radioGroup = screen.getByRole('radiogroup');
    expect(radioGroup).toHaveAttribute('aria-label', 'Billing cycle');
  });

  it('renders billing cycle options with proper accessibility attributes', () => {
    render(<Pricing />);
    
    const monthlyButton = screen.getByRole('radio', { name: 'Monthly billing' });
    expect(monthlyButton).toHaveAttribute('aria-checked', 'true');
    
    const annualButton = screen.getByRole('radio', { name: 'Annual billing with 16% savings' });
    expect(annualButton).toHaveAttribute('aria-checked', 'false');
  });

  it('handles billing cycle changes correctly', () => {
    render(<Pricing />);
    
    const monthlyButton = screen.getByRole('radio', { name: 'Monthly billing' });
    const annualButton = screen.getByRole('radio', { name: 'Annual billing with 16% savings' });
    
    // Initial state
    expect(monthlyButton).toHaveAttribute('aria-checked', 'true');
    expect(annualButton).toHaveAttribute('aria-checked', 'false');
    
    // Switch to annual
    fireEvent.click(annualButton);
    expect(monthlyButton).toHaveAttribute('aria-checked', 'false');
    expect(annualButton).toHaveAttribute('aria-checked', 'true');
    
    // Switch back to monthly
    fireEvent.click(monthlyButton);
    expect(monthlyButton).toHaveAttribute('aria-checked', 'true');
    expect(annualButton).toHaveAttribute('aria-checked', 'false');
  });

  it('renders pricing cards with proper accessibility attributes', () => {
    render(<Pricing />);
    
    const pricingCards = screen.getAllByRole('listitem');
    expect(pricingCards.length).toBeGreaterThan(0);
    
    // Check for titles
    const titles = screen.getAllByRole('heading', { level: 3 });
    expect(titles.length).toBeGreaterThan(0);
    titles.forEach(title => {
      expect(title).toBeInTheDocument();
    });
    
    // Check for feature lists
    const featureLists = screen.getAllByRole('list');
    expect(featureLists.length).toBeGreaterThan(0);
    featureLists.forEach(list => {
      expect(list).toBeInTheDocument();
    });
  });

  it('renders with proper motion animation attributes', () => {
    render(<Pricing />);
    
    const motionDivs = screen.getAllByTestId('pricing-card');
    motionDivs.forEach(div => {
      expect(div).toHaveStyle({
        opacity: '1',
        transform: 'translateY(0px)',
      });
    });
  });
}); 