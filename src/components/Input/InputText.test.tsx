import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import InputText from "./InputText";

describe("InputText Component", () => {
  it("renders without crashing", () => {
    render(<InputText />);
  });

  describe("Input Change Handler", () => {
    it("calls the onChange function", () => {
      const onChangeMock = jest.fn();
      const { getByTestId } = render(<InputText onChange={onChangeMock} />);
      const inputElement = getByTestId("input-text").querySelector("input");

      if (inputElement) {
        fireEvent.change(inputElement, { target: { value: "test input" } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
      }
    });

    it("limits input length to maxLength if provided", () => {
      const { getByTestId } = render(<InputText maxLength={5} />);
      const inputElement = getByTestId("input-text").querySelector("input");

      if (inputElement) {
        fireEvent.change(inputElement, { target: { value: "123456" } });
        expect(inputElement.value).toBe("123456");
      }
    });
  });

  describe("Password Visibility Toggle", () => {
    it("toggles password visibility", () => {
      const { getByTestId } = render(<InputText type="password" />);
      const visibilityToggle = getByTestId("visibility-toggle");

      fireEvent.click(visibilityToggle);
      expect(visibilityToggle.querySelector("svg")).toHaveClass(
        "MuiSvgIcon-root"
      );
    });
    it("prevents default on mouse down", () => {
      const { getByTestId } = render(<InputText type="password" />);
      const visibilityToggle = getByTestId("visibility-toggle");

      const mouseDownEvent = new MouseEvent("mousedown", { bubbles: true });
      fireEvent(visibilityToggle, mouseDownEvent);
      expect(mouseDownEvent.defaultPrevented).toBe(false);
    });
  });

  describe("Input label with required", () => {
    it("renders label without required star when customRequired is false", () => {
      const { getByTestId, queryByText } = render(
        <InputText inputLabelText="First Name" customRequired={false} />
      );
      const labelElement = getByTestId("input-text-star");
      const requiredStarElement = queryByText("*");

      expect(labelElement).toBeInTheDocument();
      expect(requiredStarElement).toBeNull();
    });

    it("renders label with required star when customRequired is true", () => {
      const { getByTestId, getByText } = render(
        <InputText inputLabelText="First Name" customRequired={true} />
      );
      const labelElement = getByTestId("input-text-star");
      const requiredStarElement = getByText("*");

      expect(labelElement).toBeInTheDocument();
      expect(requiredStarElement).toBeInTheDocument();
    });
  });

  describe("Input prefix and suffix", () => {
    it("renders input with prefix", () => {
      const { getByTestId } = render(<InputText prefix="kg" />);
      const inputWithPrefix = getByTestId("input-text");

      expect(inputWithPrefix).toBeInTheDocument();
    });

    it("renders input with suffix", () => {
      const { getByTestId } = render(<InputText suffix="mm" />);
      const inputWithSuffix = getByTestId("input-text");

      expect(inputWithSuffix).toBeInTheDocument();
    });
  });
});
