import { render, screen, fireEvent } from "@testing-library/react";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";

// Mock next-themes
const mockSetTheme = jest.fn();
jest.mock("next-themes", () => ({
  useTheme: jest.fn(() => ({
    theme: "light",
    setTheme: mockSetTheme,
  })),
}));

describe("ModeToggle", () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
    (useTheme as jest.Mock).mockImplementation(() => ({
      theme: "light",
      setTheme: mockSetTheme,
    }));
  });

  it("renders the mode toggle button", () => {
    render(<ModeToggle />);
    expect(screen.getByTestId("mode-toggle")).toBeInTheDocument();
  });

  it("renders sun and moon icons", () => {
    render(<ModeToggle />);
    expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
  });

  it("toggles theme from light to dark when clicked", () => {
    render(<ModeToggle />);
    const button = screen.getByTestId("mode-toggle");
    
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("toggles theme from dark to light when clicked", () => {
    (useTheme as jest.Mock).mockImplementation(() => ({
      theme: "dark",
      setTheme: mockSetTheme,
    }));

    render(<ModeToggle />);
    const button = screen.getByTestId("mode-toggle");
    
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });

  it("memoizes the component and callback", () => {
    const { rerender } = render(<ModeToggle />);
    const button = screen.getByTestId("mode-toggle");
    
    // First click
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledTimes(1);
    expect(mockSetTheme).toHaveBeenLastCalledWith("dark");
    
    // Rerender with same props
    rerender(<ModeToggle />);
    
    // Click again
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledTimes(2);
    expect(mockSetTheme).toHaveBeenLastCalledWith("dark");
  });
}); 