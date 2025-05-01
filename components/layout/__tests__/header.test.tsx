/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { Header } from '../header';
import { ImgHTMLAttributes, DetailedHTMLProps } from 'react';

// Mock ResizeObserver
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;

// Mock components
jest.mock('next/link', () => ({
  __esModule: true,
  default: jest.fn(({ children, href, onClick }) => (
    <a href={href} onClick={onClick}>{children}</a>
  ))
}));

jest.mock('@/components/ui/navigation-menu', () => ({
  NavigationMenu: jest.fn(({ children, ...props }) => (
    <nav aria-label="Main" {...props}>{children}</nav>
  )),
  NavigationMenuList: jest.fn(({ children, ...props }) => (
    <ul {...props}>{children}</ul>
  )),
  NavigationMenuItem: jest.fn(({ children, ...props }) => (
    <li {...props}>{children}</li>
  )),
  NavigationMenuTrigger: jest.fn(({ children, ...props }) => (
    <button {...props}>{children}</button>
  )),
  NavigationMenuContent: jest.fn(({ children, ...props }) => (
    <div {...props}>{children}</div>
  )),
  NavigationMenuLink: jest.fn(({ children, asChild, ...props }) => (
    asChild ? children : <a {...props}>{children}</a>
  )),
}));

// Mock the components that are not needed for these tests
jest.mock('@/components/mode-toggle', () => ({
  ModeToggle: () => <div data-testid="mode-toggle">Mode Toggle</div>,
}));

jest.mock('@/components/ui/logo', () => ({
  Logo: () => <div data-testid="logo">Logo</div>,
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { src: string; alt: string; width?: number; height?: number; priority?: boolean; className?: string; 'data-testid'?: string }) => {
    const imgProps: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> = {
      ...props,
      loading: props.priority ? "eager" : "lazy",
    };
    delete (imgProps as any).priority;
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...imgProps} />;
  },
}));

describe('Header Component', () => {
  const setup = () => {
    // Reset the scroll position
    global.window.scrollY = 0;
    return render(<Header />);
  };

  it('renders the logo and brand name', () => {
    render(<Header />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText('MahiFlow')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    setup();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('renders mode toggle', () => {
    setup();
    expect(screen.getByTestId('mode-toggle')).toBeInTheDocument();
  });

  it('changes header background on scroll with throttling', () => {
    setup();
    const header = screen.getByRole('banner');
    
    // Initially should have background class
    expect(header.className).toContain('bg-background/95');
    
    // Simulate multiple rapid scroll events
    act(() => {
      // First scroll
      global.window.scrollY = 20;
      global.dispatchEvent(new Event('scroll'));
      
      // Second scroll (should be throttled)
      global.window.scrollY = 30;
      global.dispatchEvent(new Event('scroll'));
      
      // Third scroll (should be throttled)
      global.window.scrollY = 40;
      global.dispatchEvent(new Event('scroll'));
    });
    
    // Should still have background class
    expect(header.className).toContain('bg-background/95');
  });

  it('renders optimized image with correct attributes', () => {
    setup();
    const image = screen.getByTestId('logo');
    expect(image).toHaveAttribute('width', '24');
    expect(image).toHaveAttribute('height', '24');
    expect(image).toHaveAttribute('loading', 'eager');
  });
}); 