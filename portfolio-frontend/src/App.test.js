import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./components/about/about";

test("Renders <About /> component correctly", () => {
  const { getByText } = render(<About />);
  expect(getByText(/Hi, my name is/i)).toBeInTheDocument();
});
