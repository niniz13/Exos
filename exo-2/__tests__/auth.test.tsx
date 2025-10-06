import Home from "../src/pages/Home";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

export * from "@testing-library/react";

const renderWithProviders = () => {
  return render(<Home/>);
}

test("affiche Home Page", () => {
  renderWithProviders();
  expect(screen.getByText("Home Page")).toBeInTheDocument();
});