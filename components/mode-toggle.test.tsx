import { render, screen, fireEvent } from '@testing-library/react';
import { ModeToggle } from './mode-toggle';
import { useTheme } from 'next-themes';

// Mock the next-themes module
jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

// Mock the Radix UI dropdown menu
jest.mock('@/components/ui/dropdown-menu', () => ({
  DropdownMenu: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DropdownMenuTrigger: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DropdownMenuContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DropdownMenuItem: ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
    <div onClick={onClick}>{children}</div>
  ),
}));

describe('ModeToggle', () => {
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    (useTheme as jest.Mock).mockReturnValue({
      setTheme: mockSetTheme,
    });
  });

  it('renders the toggle button', () => {
    render(<ModeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    
    // Check if both icons are present
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
  });

  it('renders theme options', () => {
    render(<ModeToggle />);
    
    // Check if menu items are present
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByText('System')).toBeInTheDocument();
  });

  it('calls setTheme with "light" when Light option is clicked', () => {
    render(<ModeToggle />);
    
    const lightOption = screen.getByText('Light');
    fireEvent.click(lightOption);
    
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });

  it('calls setTheme with "dark" when Dark option is clicked', () => {
    render(<ModeToggle />);
    
    const darkOption = screen.getByText('Dark');
    fireEvent.click(darkOption);
    
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('calls setTheme with "system" when System option is clicked', () => {
    render(<ModeToggle />);
    
    const systemOption = screen.getByText('System');
    fireEvent.click(systemOption);
    
    expect(mockSetTheme).toHaveBeenCalledWith('system');
  });

  // Performance Tests
  describe('performance', () => {
    it('should handle rapid theme changes efficiently', () => {
      render(<ModeToggle />);
      const startTime = performance.now();
      
      // Rapidly switch between themes
      const themes = ['Light', 'Dark', 'System'];  // Fixed case to match the component
      for (let i = 0; i < 100; i++) {
        const themeOption = screen.getByText(themes[i % 3]);
        fireEvent.click(themeOption);
      }
      
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // 100 theme changes should take less than 100ms
      expect(duration).toBeLessThan(100);
      
      // setTheme should have been called exactly 100 times
      expect(mockSetTheme).toHaveBeenCalledTimes(100);
    });

    it('should maintain consistent render performance across theme changes', () => {
      const { rerender } = render(<ModeToggle />);
      
      // Measure initial render time
      const initialRenderStart = performance.now();
      rerender(<ModeToggle />);
      const initialRenderEnd = performance.now();
      const initialRenderTime = initialRenderEnd - initialRenderStart;
      
      // Measure subsequent render times
      const renderTimes: number[] = [];
      for (let i = 0; i < 10; i++) {
        const start = performance.now();
        rerender(<ModeToggle />);
        const end = performance.now();
        renderTimes.push(end - start);
      }
      
      // Calculate average render time
      const avgRenderTime = renderTimes.reduce((a, b) => a + b, 0) / renderTimes.length;
      
      // Average render time should not be significantly higher than initial render
      // Allow for up to 50% variance
      expect(avgRenderTime).toBeLessThan(initialRenderTime * 1.5);
    });

    it('should handle rapid button clicks without performance degradation', () => {
      render(<ModeToggle />);
      const button = screen.getByRole('button');
      const startTime = performance.now();
      
      // Simulate rapid button clicks
      for (let i = 0; i < 50; i++) {
        fireEvent.click(button);
      }
      
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // 50 clicks should take less than 50ms
      expect(duration).toBeLessThan(50);
    });
  });
}); 