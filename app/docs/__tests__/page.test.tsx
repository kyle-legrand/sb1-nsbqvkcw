import { render, screen } from "@testing-library/react";
import DocsPage from "../page";

describe("DocsPage", () => {
  it("renders the main documentation page with correct title and sections", () => {
    render(<DocsPage />);
    
    // Check for main heading
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Documentation');
    
    // Check for section headings
    const sectionHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(sectionHeadings.length).toBeGreaterThan(0);
    expect(sectionHeadings[0]).toHaveTextContent('Getting Started');
    expect(sectionHeadings[1]).toHaveTextContent('API Reference');
    expect(sectionHeadings[2]).toHaveTextContent('Best Practices');
    
    // Check API documentation link
    const apiLink = screen.getByRole('link', { name: /api reference/i });
    expect(apiLink).toBeInTheDocument();
    expect(apiLink).toHaveAttribute('href', '#');
  });

  it("renders documentation cards with correct content", () => {
    render(<DocsPage />);
    
    // Check card content
    expect(screen.getByText(/Learn how to get started/)).toBeInTheDocument();
    expect(screen.getByText(/Explore our ocean-themed API/)).toBeInTheDocument();
    expect(screen.getByText(/Discover best practices/)).toBeInTheDocument();
  });
}); 