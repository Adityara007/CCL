import React, { useState } from "react";
// import CustomDateComponent from "./CommonComponents/CustomDateComponent.tsx";
import CustomDateComponent from "./CustomDateComponent.tsx";
// import CustomRadioGroup from "./RadioComponent/CustomRadioGroup.tsx";
import moment, { Moment } from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import ThemedDatePickerComponent from "./ThemedDatePickerComponent.tsx";
import { createTheme } from "@mui/system";
import "../../App.css";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function AllDatePickerVariants() {
  let date = new Date("2022-04-17");
  const dayCalenderStylings = {
    color: "#1565c0",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#2196f3",
    border: "1px solid",
    backgroundColor: "#bbdefb",
  };
  const pickersDayStylings = {
    color: "black",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#2196f3",
    border: "1px solid",
    backgroundColor: "#bbdefb",
  };
  const InputBaseStylings = {
    // color: "red",
    // fontSize: "30px",
    // border: "5px solid grey",
  };
  const dateCalenderStylings = {
    backgroundColor: "brown",
  };
  const pickersCalendarHeaderStylings = {
    backgroundColor: "green",
  };
  const calenderIconSettings = {
    // backgroundColor: "green",
    // width: "40px",
    // height: "40px",
  };
  const calenderHeaderRootStylings = {
    backgroundColor: "#fecaca",
  };
  const calenderHeaderRootLabelStylings = {
    backgroundColor: "#fb923c",
  };
  const calenderHeaderRootLabelContainerStylings = {
    backgroundColor: "#65a30d",
  };
  const calenderHeaderRootSwitchViewButtonStylings = {
    backgroundColor: "#3b82f6",
  };
  // let minDate = new Date();

  return (
    <div>
      <div className="layout">
        <CustomDateComponent />
        <CustomDateComponent
          givenDate={new Date()}
          givenFormat="DD/MM/YYYY"
          leftarrow={ArrowLeftIcon}
          rightarrow={ArrowRightIcon}
          calendarMonth={CalendarMonthIcon}
          label="select date"
          selectAfterThisDate={new Date("2023-12-12")}
          // ß={undefined} // minDate={new Date()}
          // color="blue"
        />
        <CustomDateComponent
          className="customDateComponent"
          givenDate={date}
          givenFormat="YYYY MMM DD"
          minDate={new Date("2023-10-10")}
          color="green"
          dayCalenderStylings={dayCalenderStylings}
          pickersDayStylings={pickersDayStylings}
          // ß={undefined}
        />

        <CustomDateComponent
          givenDate={new Date()}
          givenFormat="MMM YYYY DD"
          // minDate={new Date("2010-10-10")}
          selectAfterThisDate={new Date("2023-12-12")}
          // color="green"
          dayCalenderStylings={dayCalenderStylings}
          pickersDayStylings={pickersDayStylings}
          buttonColor="white"
          desktopPaperBackgroundColor="blue"
        />

        <CustomDateComponent
          // givenDate={date}
          givenFormat="Do MMM YYYY"
          // minDate={new Date()}
          // color="red"
          desktopPaperBackgroundColor="#86efac"
        />
        <CustomDateComponent
          givenDate={date}
          givenFormat="Do MMM YYYY"
          // minDate={new Date()}
          color="#7dd3fc"
          inputTextColor="#65B741"
          desktopPaperBackgroundColor="#c084fc"
        />
        <CustomDateComponent
          givenDate={date}
          givenFormat="Do MMM YYYY"
          // minDate={new Date()}
          // color="red"
          inputTextColor="#65B741"
          desktopPaperBackgroundColor="#86efac"
          leftarrow={ArrowLeftIcon}
          rightarrow={ArrowRightIcon}
          calendarMonth={CalendarMonthIcon}
        />
        <CustomDateComponent
          givenDate={date}
          givenFormat="Do MMM YYYY"
          // minDate={new Date()}
          // color="red"
          inputTextColor="#65B741"
          desktopPaperBackgroundColor="#86efac"
          leftarrow={ArrowLeftIcon}
          rightarrow={ArrowRightIcon}
          calendarMonth={CalendarMonthIcon}
          calenderHeaderRootLabelContainerStylings={
            calenderHeaderRootLabelContainerStylings
          }
          calenderHeaderRootSwitchViewButtonStylings={
            calenderHeaderRootSwitchViewButtonStylings
          }
        />
        <CustomDateComponent
          givenDate={date}
          givenFormat="Do MMM YYYY"
          // minDate={new Date()}
          // color="red"
          inputTextColor="#65B741"
          desktopPaperBackgroundColor="#86efac"
          leftarrow={ArrowLeftIcon}
          rightarrow={ArrowRightIcon}
          calendarMonth={CalendarMonthIcon}
          calenderHeaderRootStylings={calenderHeaderRootStylings}
          calenderHeaderRootLabelStylings={calenderHeaderRootLabelStylings}
        />
        <CustomDateComponent
          givenDate={date}
          givenFormat="Do MMM YYYY"
          // minDate={new Date()}
          color="#fb7185"
          inputTextColor="#65B741"
          calenderHeaderRootStylings={calenderHeaderRootStylings}
          calenderHeaderRootLabelStylings={calenderHeaderRootLabelStylings}
        />
        <CustomDateComponent
          givenDate={date}
          givenFormat="Do MMM YYYY"
          // minDate={new Date()}
          showDaysOutsideCurrentMonth={true}
          // selectAfterThisDate={new Date("2023-12-18")}
        />
      </div>

      {/* <LocalizationProvider dateAdapter={AdapterMoment}>
        <StaticDatePicker
          sx={{
            ".MuiPickersToolbar-root": {
              color: "#red",
              borderRadius: 2,
              borderWidth: 1,
              borderColor: "#2196f3",
              border: "1px solid red",
              backgroundColor: "#bbdefb",
            },
            "& .MuiDateCalendar-root": {
              color: "white",
              borderRadius: 18,
              borderWidth: 1,
              borderColor: "#2196f3",
              border: "5px solid red",
              backgroundColor: "green !important",
            },
          }}
        />
      </LocalizationProvider> */}
      {/* <h1>working</h1> */}
      {/* <DesktopDatePickerComponent /> */}
      <ThemedDatePickerComponent
      // dayCalenderStylings={dayCalenderStylings}
      // pickersDayStylings={pickersDayStylings}
      // InputBaseStylings={InputBaseStylings}
      // dateCalenderStylings={dateCalenderStylings}
      // pickersCalendarHeaderStylings={pickersCalendarHeaderStylings}
      // calenderIconSettings={calenderIconSettings}
      // buttonColor="white"
      // desktopPaperBackgroundColor="blue"
      />
      {/* <p>learn react</p> */}
    </div>
  );
}

export default AllDatePickerVariants;
