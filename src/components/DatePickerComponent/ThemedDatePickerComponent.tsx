import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  DatePicker,
  LocalizationProvider,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"; // Import Moment.js adapter
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { newTheme } from "../../Themes/Theme.tsx";

interface ThemedDatePickerProps {
  dayCalenderStylings?: object;
  pickersDayStylings?: object;
  InputBaseStylings?: object;
  dateCalenderStylings?: object;
  pickersCalendarHeaderStylings?: object;
  calenderIconSettings?: object;
  calenderHeaderRootStylings?: object;
  calenderHeaderRootLabelStylings?: object;
  calenderHeaderRootLabelContainerStylings?: object;
  calenderHeaderRootSwitchViewButtonStylings?: object;
}

const ThemedDatePickerComponent: React.FC<ThemedDatePickerProps> = (props) => {
  console.log("props", props);
  return (
    <ThemeProvider theme={newTheme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          slotProps={{
            desktopPaper: {
              sx: {
                backgroundColor: "red",
                color: "black",
                ".MuiDayCalendar-root": props?.dayCalenderStylings,
                ".MuiPickersDay-root": props?.pickersDayStylings,
                ".MuiButtonBase-root": {
                  backgroundColor: "grey",
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
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default ThemedDatePickerComponent;
