import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a page heading", () => {
  render(<App />);
  const heading = screen.getByText(/Steps demo/i);
  expect(heading).toBeInTheDocument();
});

test("renders a credit", () => {
  render(<App />);
  const credit = screen.getByText(/Credit/i);
  expect(credit).toBeInTheDocument();
});
