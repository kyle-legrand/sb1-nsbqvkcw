import { render, screen } from '@testing-library/react';
import { Features } from '../features';

describe('Features Component', () => {
  it('renders with proper accessibility attributes', () => {
    render(<Features />);
    
    // Check for region role
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('aria-labelledby', 'features-heading');
    
    // Check for heading
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Features designed for aquatic health');
    
    // Check for features list
    const featuresList = screen.getByRole('list');
    expect(featuresList).toHaveAttribute('aria-label', 'Product features');
  });

  it('renders feature cards with proper accessibility attributes', () => {
    render(<Features />);
    
    const featureCards = screen.getAllByRole('listitem');
    expect(featureCards.length).toBeGreaterThan(0);
    
    // Check for titles
    const titles = screen.getAllByRole('heading', { level: 3 });
    expect(titles.length).toBe(featureCards.length);
    
    // Check for icons
    const icons = screen.getAllByTestId('feature-icon');
    expect(icons.length).toBe(featureCards.length);
    
    // Check for descriptions
    const descriptions = screen.getAllByText(/./);
    expect(descriptions.length).toBeGreaterThan(0);
  });

  it('renders with proper motion animation attributes', () => {
    render(<Features />);
    
    const motionDivs = screen.getAllByTestId('feature-card');
    motionDivs.forEach(div => {
      expect(div).toHaveStyle({
        opacity: '1',
        transform: 'translateY(0px)',
      });
    });
  });
}); 