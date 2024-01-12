import React, { ElementType, ReactElement, useState } from "react";
import moment, { Moment } from "moment"; // Import Moment.js library
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"; // Import Moment.js adapter
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { SxProps } from "@mui/system";
import { PopperProps, TextField } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./CustomDateComponent.css";
import { BaseDatePickerProps } from "@mui/x-date-pickers/DatePicker/shared";
import EventIcon from "@mui/icons-material/Event";
import { SvgIconComponent } from "@mui/icons-material";
import { Button } from "@mui/material";

interface CustomDateComponentProps extends BaseDatePickerProps<Date> {
  givenDate?: Date;
  givenFormat?: string;
  minDate?: Date;
  label?: string;
  color?: string;
  dayCalenderStylings?: object;
  pickersDayStylings?: object;
  buttonColor?: string;
  disableFuture?;
  helperText?: string;
  selectAfterThisDate?: Date;
  desktopPaperBackgroundColor?: string;
  open?: boolean;
  className?: string;
  inputTextColor?: string;
  leftarrow?: ElementType;
  rightarrow?: ElementType;
  calendarMonth?: ElementType;
  calenderHeaderRootStylings?: object;
  calenderHeaderRootLabelStylings?: object;
  calenderHeaderRootLabelContainerStylings?: object;
  calenderHeaderRootSwitchViewButtonStylings?: object;
  showDaysOutsideCurrentMonth?: boolean;
}

const CustomDateComponent: React.FC<CustomDateComponentProps> = (props) => {
  const givenDate = props?.givenDate ? props.givenDate : new Date();
  const [selectedDate, setSelectedDate] = useState<Moment>(moment(givenDate)); // Set your initial date here
  const [errMsg, setErrMsg] = useState<string>("");

  // Handler for date changes
  const particularDate = moment(props?.selectAfterThisDate);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("particular Date", particularDate);
    console.log("selected from calender", date);
    console.log("today date");
    console.log("data.isbefore", date.isBefore(particularDate));
    if (date.isBefore(particularDate)) {
      console.log("if date", date.isBefore(particularDate));
      setErrMsg(
        "Please select date after" + particularDate?.format("DD/MM/YYYY")
      );
    } else {
      console.log("else date", date.isBefore(particularDate));
      setErrMsg("");
    }
  };
  return (
    <div className="customDateComponent">
      {/* <p>custom-date-picker</p> */}
      {/* <h1>this is heading</h1> */}
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          label={props?.label}
          // views={["day", "month"]}
          showDaysOutsideCurrentMonth={props?.showDaysOutsideCurrentMonth}
          // data-testid="raviteja"
          slots={{
            // openPickerIcon: props?.hasOwnProperty("calenderMonth")
            //   ? props?.calendarMonth
            //   : EventIcon,

            openPickerIcon:
              props?.calendarMonth === undefined
                ? EventIcon
                : props?.calendarMonth,
            leftArrowIcon: props?.leftarrow,
            rightArrowIcon: props?.rightarrow,
          }}
          slotProps={{
            textField: {
              variant: "outlined",
              helperText: errMsg,
              sx: {
                // border: "5px solid " + props?.color,
                "& .MuiFormHelperText-root": {
                  color: "red", // Change the color to your desired value
                },
                ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "5px solid " + props?.color,
                }, // at page load
                // ".MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                //   {
                //     border: "2px solid cyan",
                //   }, // at hover state
                // ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                //   { border: "3px solid green" }, // at focused state
                ".MuiInputBase-input": { color: props?.inputTextColor },
                // '.MuiDateCalendar-root':{border: '3px solid red'},
              },
            },
            // popper: {
            //   sx: {
            //     backgroundColor: "brown",
            //   },
            // },
            // layout: {
            //   sx: {
            //     backgroundColor: "red",
            //     color: "white",
            //   },
            // },
            // openPickerButton: {
            //   color: "success",
            // },
            desktopPaper: {
              sx: {
                backgroundColor: props?.desktopPaperBackgroundColor,
                color: "black",
                ".MuiDayCalendar-root": props?.dayCalenderStylings,
                ".MuiPickersDay-root": props?.pickersDayStylings,
                ".MuiButtonBase-root": {
                  backgroundColor: props?.buttonColor,
                },
                ".MuiPickersDay-today": {
                  backgroundColor: "#4b0e76",
                },
                ".MuiPickersCalendarHeader-root":
                  props?.calenderHeaderRootStylings,
                ".MuiPickersCalendarHeader-label":
                  props?.calenderHeaderRootLabelStylings,
                ".MuiPickersCalendarHeader-labelContainer":
                  props?.calenderHeaderRootLabelContainerStylings,
                ".MuiPickersCalendarHeader-switchViewButton":
                  props?.calenderHeaderRootSwitchViewButtonStylings,
              },
            },
            nextIconButton: {
              sx: {
                // color: "white",
              },
            },

            toolbar: {
              sx: {
                backgroundColor: "pink",
              },
            },
          }}
          onMonthChange={() => console.log("month changed")}
          onClose={() => console.log("close triggered")}
          minDate={moment(props?.minDate)}
          // open={true} //it is working dialog box is closing
          // sx={{
          //   "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          //     border: "1px solid yellow",
          //   }, // at page load
          //   "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          //     border: "2px solid cyan",
          //   }, // at hover state
          //   "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          //     { border: "3px solid green" }, // at focused state
          // }}
          // sx={{
          //   ".MuiInputBase-input": { color: "red" },
          //   // '.MuiDateCalendar-root':{border: '3px solid red'},
          //   ".MuiPickersCalendarHeader-root": {
          //     border: "3px solid red",
          //     borderRadius: 18,
          //   },
          // }}
          // }}
          // sx={{
          //   "& .MuiIconButton-root": {
          //     // Styles for the IconButton
          //     borderRadius: "20%",
          //     border: "5px solid red",
          //   },
          //   "& .MuiPickersDay-root": {
          //     // Styles for each day
          //     borderRadius: "10%",
          //     border: "5px solid green",
          //     backgroundColor: "green",
          //   },
          // }}
          format={props?.givenFormat} // Another example format
        />
      </LocalizationProvider>
    </div>

    //   <> </>
  );
};

export default CustomDateComponent;
