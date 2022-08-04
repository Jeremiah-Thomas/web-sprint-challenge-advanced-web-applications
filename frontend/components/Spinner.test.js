// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from "./Spinner";
import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
test("Spinner is displayed when on is true", () => {
  render(<Spinner on={true} />);
  const spinner = screen.queryByText(/please wait.../i);
  expect(spinner).toBeInTheDocument();
});
