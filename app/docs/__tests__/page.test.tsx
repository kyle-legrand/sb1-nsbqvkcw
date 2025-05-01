import { render, screen } from "@testing-library/react";
import DocsPage from "../page";

describe("DocsPage", () => {
  it("renders the main documentation page with correct title and sections", () => {
    render(<DocsPage />);
    
    // Check main title (using role to get the h1)
    expect(screen.getByRole("heading", { name: "Documentation", level: 1 })).toBeInTheDocument();
    
    // Check description
    expect(screen.getByText(/Dive into our comprehensive documentation/)).toBeInTheDocument();
    
    // Check section titles
    expect(screen.getByText("Getting Started")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "API Reference" })).toBeInTheDocument();
    expect(screen.getByText("Best Practices")).toBeInTheDocument();

    // Check API documentation link
    const apiLink = screen.getByText("View API Documentation →");
    expect(apiLink).toBeInTheDocument();
    expect(apiLink).toHaveAttribute("href", "/docs/api");
  });

  it("renders documentation cards with correct content", () => {
    render(<DocsPage />);
    
    // Check card content
    expect(screen.getByText(/Learn how to get started/)).toBeInTheDocument();
    expect(screen.getByText(/Explore our ocean-themed API/)).toBeInTheDocument();
    expect(screen.getByText(/Discover best practices/)).toBeInTheDocument();
  });
}); 