import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import DropdownComponent from "./DropdownComponent";
import React from "react";
describe("Button Component", () => {
  const setToggle = jest.fn();
  render(
    <DropdownComponent
      value={""}
      placeholder="ssa"
      options={[]}
      helperText="dds"
      isRequired={false}
      isvalid={false}
    />
  );
  const button = screen.getByTestId("button");

  // Test 1
  test("Button Rendering", () => {
    expect(button).toBeInTheDocument();
  });

  // Test 2
  test("Button Text", () => {
    expect(button).toHaveTextContent("Click Me!");
  });
});
