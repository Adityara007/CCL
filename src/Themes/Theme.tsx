import { createTheme } from "@mui/material/styles";

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
  color: "red",
  fontSize: "30px",
  border: "5px solid grey",
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

export const newTheme = createTheme({
  // palette: {
  //   warning: {
  //     light: "#ff9800",
  //   },
  // },
  components: {
    MuiInputBase: {
      styleOverrides: {
        // root: props.InputBaseStylings,
        root: InputBaseStylings,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // root: props.InputBaseStylings,
        root: {
          // borderRadius: "50px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        //   root: props.calenderIconSettings,
        root: calenderIconSettings,
      },
    },
  },
});
