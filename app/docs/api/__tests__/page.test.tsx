import { render, screen } from "@testing-library/react";
import ApiPage from "../page";

describe("ApiPage", () => {
  it("renders the API reference page with correct title and description", () => {
    render(<ApiPage />);
    
    // Check main title (using role to get the h1)
    expect(screen.getByRole("heading", { name: "API Reference", level: 1 })).toBeInTheDocument();
    
    // Check description
    expect(screen.getByText(/Explore our ocean-themed API endpoints/)).toBeInTheDocument();
  });

  it("renders all API sections with correct content", () => {
    render(<ApiPage />);
    
    // Check Kraken API section
    expect(screen.getByText("Kraken API")).toBeInTheDocument();
    expect(screen.getByText(/Manage your underwater infrastructure/)).toBeInTheDocument();
    expect(screen.getAllByText("v1")).toHaveLength(3); // One for each API section
    
    // Check Coral API section
    expect(screen.getByText("Coral API")).toBeInTheDocument();
    expect(screen.getByText(/Monitor and maintain coral reef systems/)).toBeInTheDocument();
    
    // Check Plankton API section
    expect(screen.getByText("Plankton API")).toBeInTheDocument();
    expect(screen.getByText(/Track plankton populations/)).toBeInTheDocument();
  });

  it("renders all API endpoints with correct methods and paths", () => {
    render(<ApiPage />);
    
    // Check HTTP methods
    expect(screen.getAllByText("GET")).toHaveLength(3);
    expect(screen.getAllByText("POST")).toHaveLength(3);
    expect(screen.getAllByText("PUT")).toHaveLength(3);
    expect(screen.getAllByText("DELETE")).toHaveLength(3);
    
    // Check endpoint paths
    expect(screen.getAllByText("/api/v1/kraken/tentacles")).toHaveLength(4);
    expect(screen.getAllByText("/api/v1/coral/reefs")).toHaveLength(4);
    expect(screen.getAllByText("/api/v1/plankton/population")).toHaveLength(4);
  });
}); 