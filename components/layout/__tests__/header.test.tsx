/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '../header';

// Mock ResizeObserver
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;

// Mock the next/link component
jest.mock('next/link', () => {
  return ({ children, href, onClick }: { children: React.ReactNode; href: string; onClick?: () => void }) => {
    return <a href={href} onClick={onClick}>{children}</a>;
  };
});

// Mock the components that are not needed for these tests
jest.mock('@/components/mode-toggle', () => ({
  ModeToggle: () => <div data-testid="mode-toggle">Mode Toggle</div>,
}));

jest.mock('@/components/ui/logo', () => ({
  Logo: () => <div data-testid="logo">Logo</div>,
}));

describe('Header Component', () => {
  beforeEach(() => {
    // Reset the scroll position before each test
    global.window.scrollY = 0;
  });

  it('renders the header with logo and company name', () => {
    render(<Header />);
    
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText('Foundry')).toBeInTheDocument();
  });

  it('renders navigation items correctly', () => {
    render(<Header />);
    
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('renders login and signup buttons', () => {
    render(<Header />);
    
    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger button is clicked', async () => {
    render(<Header />);
    
    // Initially mobile menu should be hidden
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument();
    
    // Click the hamburger menu button
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    await userEvent.click(menuButton);
    
    // Mobile menu should now be visible
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i });
    expect(mobileNav).toBeInTheDocument();
    
    // Click again to close
    await userEvent.click(menuButton);
    
    // Menu should be hidden again
    await waitFor(() => {
      expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument();
    });
  });

  it('changes header background on scroll', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    
    // Initially should not have background class
    expect(header.className).not.toContain('bg-background/95');
    
    // Simulate scroll
    global.window.scrollY = 20;
    fireEvent.scroll(window);
    
    // Should have background class now
    expect(header.className).toContain('bg-background/95');
  });

  it('opens Resources dropdown menu', async () => {
    render(<Header />);
    
    const resourcesButton = screen.getByRole('button', { name: /resources/i });
    await userEvent.click(resourcesButton);
    
    // Check if dropdown items are visible
    expect(screen.getByText('Documentation')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
  });

  it('closes mobile menu when a link is clicked', async () => {
    render(<Header />);
    
    // Open mobile menu
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    await userEvent.click(menuButton);
    
    // Click a link in the mobile menu
    const featuresLink = screen.getAllByText('Features')[1]; // Get the mobile menu link
    await userEvent.click(featuresLink);
    
    // Wait for the menu to close
    await waitFor(() => {
      expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument();
    });
  });
}); 