import React from "react";
import "@testing-library/jest-dom";
import {
  configure,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import CustomDateComponent from "./CustomDateComponent";
import App from "../../App";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

const renderCustomDateComponent = (props) => {
  render(<CustomDateComponent {...props} />);
};

describe("testing CustomDateComponent", () => {
  it("render custom date component", async () => {
    const props = {
      givenDate: "",
      givenFormat: "MMM YYYY DD",
      minDate: moment("2010-10-10"),
      selectAfterThisDate: new Date("2023-12-12"),
      buttonColor: "white",
      desktopPaperBackgroundColor: "blue",
    };
    renderCustomDateComponent(props);
  });
  it("show errMsg if not correct throw error ", () => {
    const props = {
      givenDate: "",
      givenFormat: "MMM YYYY DD",
      // minDate: moment("2010-10-10"),
      selectAfterThisDate: new Date("2023-12-12"),
      buttonColor: "white",
      desktopPaperBackgroundColor: "blue",
    };
    renderCustomDateComponent(props);
    render(<App />);
    const calenderMonth = screen.getAllByTestId("CalendarMonthIcon")[1];
    fireEvent.click(calenderMonth);
    // const allGridCells = screen.getAllByRole("gridcell")[10];
    // fireEvent.click(allGridCells);
    const input = screen.getByText("9");
    screen.debug(input);
    fireEvent.click(input);

    const getError = screen.getByText(/Please select date/i);
    expect(getError).toBeInTheDocument();

    // screen.debug(input);
    // const getError = screen.getByText(/Please select date/i);
    // expect(getError).toBeInTheDocument();
    // input.forEach((inputEle) => {
    //   // screen(inputEle);
    //   fireEvent.change(inputEle, {
    //     target: { value: "12/12/2012" },
    //   });
    //   screen.debug(inputEle);
    //   const getError = screen.getByText(/Please select date/i);
    //   expect(getError).toBeInTheDocument();
    //   fireEvent.change(inputEle, {
    //     target: { value: "12/12/2027" },
    //   });
    //   expect(getError).not.toBeInTheDocument();
    // });

    // const date1 = new Date("12-12-2012");
    //   // allGridCells.forEach((cell) => {
    //   //   fireEvent.click(cell);
    //   //   // const input = screen.getAllByRole("textbox")[0] as HTMLInputElement;

    //   //   // const valueOfInput = input.value;
    //   //   // screen.debug(input);
    //   // const getError = screen.get("#Please select date");
    //   if (date2.getTime() < date1.getTime()) {
    //     expect(getError).toBeInTheDocument();
    //   } else {
    //     expect(getError).toBeNull();
    //   }
    //   // expect(date1.getTime()).toBeGreaterThan(date2.getTime());
    //   // });
    //   // fireEvent.click(allGridCells);
  });

  it("remove error when selected date is correct", () => {
    // const props = {
    //   // givenDate: "",
    //   givenFormat: "MMM YYYY DD",
    //   // minDate: moment("2010-10-10"),
    //   selectAfterThisDate: new Date("2023-12-12"),
    //   buttonColor: "white",
    //   desktopPaperBackgroundColor: "blue",
    // };
    // renderCustomDateComponent(props);
    render(<App />);
    const calenderMonth = screen.getAllByTestId("CalendarMonthIcon")[0];
    screen.debug(calenderMonth);
    fireEvent.click(calenderMonth);
    // const allGridCells = screen.getAllByRole("gridcell")[10];
    // fireEvent.click(allGridCells);
    const input = screen.getByText("25");
    screen.debug(input);
    // console.log(input);
    fireEvent.click(input);
    const getError = screen.queryByText(/Please select date/i);
    expect(getError).not.toBeInTheDocument();

    // screen.debug(input);
    // const getError = screen.getByText(/Please select date/i);`
    // expect(getError).toBeInTheDocument();
    // input.forEach((inputEle) => {
    //   // screen(inputEle);
    //   fireEvent.change(inputEle, {
    //     target: { value: "12/12/2012" },
    //   });
    //   screen.debug(inputEle);
    //   const getError = screen.getByText(/Please select date/i);
    //   expect(getError).toBeInTheDocument();
    //   fireEvent.change(inputEle, {
    //     target: { value: "12/12/2027" },
    //   });
    //   expect(getError).not.toBeInTheDocument();
    // });

    // const date1 = new Date("12-12-2012");
    //   // allGridCells.forEach((cell) => {
    //   //   fireEvent.click(cell);
    //   //   // const input = screen.getAllByRole("textbox")[0] as HTMLInputElement;

    //   //   // const valueOfInput = input.value;
    //   //   // screen.debug(input);
    //   // const getError = screen.get("#Please select date");
    //   if (date2.getTime() < date1.getTime()) {
    //     expect(getError).toBeInTheDocument();
    //   } else {
    //     expect(getError).toBeNull();
    //   }
    //   // expect(date1.getTime()).toBeGreaterThan(date2.getTime());
    //   // });
    //   // fireEvent.click(allGridCells);
  });
  it("testing onMonth change ", () => {
    render(<App />);
    const calenderMonth = screen.getAllByTestId("CalendarMonthIcon")[1];
    fireEvent.click(calenderMonth);
    const leftarrow = screen.getByTestId("ArrowLeftIcon");
    fireEvent.click(leftarrow);
    // debugger
    // screen.debug()
  });
  // test("CustomDateComponent", () =>
  //   // render(<CustomDateComponent />);
  //   // const linkElement = screen.getByText(/custom-date-picker/i) as HTMLElement;
  //   // expect(linkElement).toBeInTheDocument();
  //   // expect(screen.getByRole("heading")).toBeInTheDocument();
  // });
  it("testing datepicker dialogbox opening", () => {
    render(<App />);
    const calenderMonth = screen.getAllByTestId("CalendarMonthIcon")[0];
    //   // screen.debug(calenderMonth);
    fireEvent.click(calenderMonth);
    const dateWindow = screen.getByTestId("sentinelStart");
    //   // screen.debug(dateWindow);
    expect(dateWindow).toBeInTheDocument();
  });
  it("testing closing datepicker dialogbox after clicking on any chosen date", async () => {
    render(<App />);
    const calenderMonth = screen.getAllByTestId("CalendarMonthIcon")[0];
    //   // screen.debug(calenderMonth);
    fireEvent.click(calenderMonth);
    const dateWindow = screen.getByTestId("sentinelStart");
    //   // screen.debug(dateWindow);
    expect(dateWindow).toBeInTheDocument();
    const btn = screen.getAllByRole("gridcell")[20];
    screen.debug(btn);
    fireEvent.click(btn);
    // fireEvent
    await waitFor(() => {
      expect(dateWindow).not.toBeInTheDocument();
    });
    // expect(btn).not.toBeInTheDocument();
  });
  it("test input date format", () => {
    render(<App />);
    const input = screen.getAllByRole("textbox")[0] as HTMLInputElement;
    screen.debug(input);
    var pattern = /^\d{2}\/\d{2}\/\d{4}$/;
    // pattern.test(input.value);

    const valueOfInput = input.value;
    // screen.debug(valueOfInput);
    expect(valueOfInput).toMatch(pattern);
  });

  // test("Check if the calendar component is active when the date boxes are clicked", async () => {
  //   render(<App />);
  //   const calenderMonth = screen.getAllByTestId("CalendarMonthIcon")[0];
  //   // screen.debug(calenderMonth);
  //   fireEvent.click(calenderMonth);
  //   const dateWindow = screen.getByTestId("sentinelStart");
  //   // screen.debug(dateWindow);
  //   expect(dateWindow).toBeInTheDocument();
  //   const btn = screen.getAllByRole("gridcell")[10];
  //   // screen.debug(btn);
  //   fireEvent.click(btn);
  //   // fireEvent

  //   // expect(btn).not.toBeInTheDocument();

  //   await waitFor(() => {
  //     expect(dateWindow).not.toBeInTheDocument();
  //   });
  //   //testing input format
  //   const input = screen.getAllByRole("textbox")[0] as HTMLInputElement;
  //   var pattern = /^\d{2}\/\d{2}\/\d{4}$/;
  //   // pattern.test(input.value);

  //   const valueOfInput = input.value;
  //   // screen.debug(valueOfInput);
  //   expect(valueOfInput).toMatch(pattern);
  // });
  // test("check the format of the date selected", () => {
  //   // render(<CustomDateComponent />);
  //   // screen.debug(input);
  // });
  // test("test selected date is whether before a particular date", () => {
  //   render(<App />);
  //   const calenderMonth = screen.getAllByTestId("CalendarMonthIcon")[1];
  //   fireEvent.click(calenderMonth);
  //   const allGridCells = screen.getAllByRole("gridcell")[10];
  //   fireEvent.click(allGridCells);
  //   const input = screen.getAllByRole("textbox")[1] as HTMLInputElement;
  //   screen.debug(input);
  //   const date1 = new Date("12-12-2023");
  //   // allGridCells.forEach((cell) => {
  //   //   fireEvent.click(cell);
  //   //   // const input = screen.getAllByRole("textbox")[0] as HTMLInputElement;

  //   //   // const valueOfInput = input.value;
  //   //   // screen.debug(input);
  //   // const getError = screen.get("#Please select date");
  //   if (date2.getTime() < date1.getTime()) {
  //     expect(getError).toBeInTheDocument();
  //   } else {
  //     expect(getError).toBeNull();
  //   }
  //   // expect(date1.getTime()).toBeGreaterThan(date2.getTime());
  //   // });
  //   // fireEvent.click(allGridCells);
  // });
});

// test("Check if the calendar component loads properly after click on any date box", () => {
//   render(<CustomDateComponent />);
//   const dateBox = screen.getByText(/custom-date-picker/i) as HTMLElement;

//   // Click on any date box
//   fireEvent.click(dateBox);
//   fireEvent.change(dateBox);

//   // Wait for the calendar component to be present in the document

//   // Adjust the query based on your actual component structure
//   // const calendarComponent = screen.getByRole("dialog");
//   // expect(calendarComponent).toBeInTheDocument();
// });

// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";

// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
