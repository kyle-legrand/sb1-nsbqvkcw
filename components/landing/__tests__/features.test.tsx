import React from 'react';
import { render, screen } from '@testing-library/react';
import { Features } from '../features';

describe('Features', () => {
  it('renders the features section with correct heading', () => {
    render(<Features />);
    
    const heading = screen.getByText('Features designed for aquatic health');
    expect(heading).toBeInTheDocument();
  });

  it('renders all feature cards', () => {
    render(<Features />);
    
    // Check for a few key features to ensure they're rendered
    expect(screen.getByText('Comprehensive Health Monitoring')).toBeInTheDocument();
    expect(screen.getByText('Heart Rate Tracking')).toBeInTheDocument();
    expect(screen.getByText('Temperature Monitoring')).toBeInTheDocument();
  });

  it('renders feature descriptions', () => {
    render(<Features />);
    
    // Check for presence of feature descriptions
    const descriptions = screen.getAllByText(/Track exercise levels|Monitor heart rate|Stay informed about water temperature/);
    expect(descriptions.length).toBeGreaterThan(0);
  });
}); 