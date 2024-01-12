import React from "react";
// import CustomDateComponent from "./CommonComponents/CustomDateComponent.tsx";
import CustomRadioGroup from "./components/RadioComponent/CustomRadioGroup.tsx";

import "./App.css";

import NavigationPages from "./Navigation/NavigationPages.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllDatePickerVariants from "./components/DatePickerComponent/AllDatePickerVariants.tsx";
import CustomAutocompleteNew from "./components/AutoComplete/customAutocomplete.tsx";
import { Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import InputTextWrapper from "./components/Input/InputTextWrapper.tsx";
import BasicMenu from "./components/Menu/Menu.tsx";
import RenderDropDown from "./components/Dropdown/DropDownrender.tsx";

function App() {
  //Radio configurations

  const optionsForRadio = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3", disabled: true },
  ];
  const optionsForSelect = [
    {
      id: "1",
      name: "English",
    },
    {
      id: "2",
      name: "MAths",
    },
    {
      id: "3",
      name: "Henry",
    },
  ];
  const handleRadioChange = (value: string) => {
    console.log("Selected:", value);
  };

  //AutoComplete Configurations
  const autoCompleteOptions = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];

  const autocompleteParam = {
    style: {
      width: 400,
      flagSize: 15,
      boxsize: "small",
      AInBorder: {
        border: "2px solid pink",
        borderRadius: "10px 10px 0px 0px",
      },
      AHovBorder: {
        borderColor: "orange !important",
        borderWidth: "2px !important",
      },
      AFocBorder: {
        borderColor: "#AE445A !important",
        borderWidth: "5px !important",
      },
      A_arrow_icon: {
        color: "pink",
      },
      A_clear_icon: {
        color: "pink",
      },
      InpPlaceholder: {
        color: "#E25E3E",
      },
      InpValue: {
        color: "purple",
      },
      AMuiChip: {
        color: "blue",
        backgroundColor: "yellow",
      },
      APopper: {
        background: "skyblue",
        border: "1px solid green",
        borderRadius: "0px 0px 10px 10px",
        "& .MuiAutocomplete-option": {
          color: "blue",
        },
      },
      AOptions: { color: "orange", "&:hover": { background: "green" } },
      ASelectedOption: {
        backgroundColor: "pink",
      },
    },
  };
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <BrowserRouter>
      <div className="mainPage">
        <div className="sidebar">
          <NavigationPages />
        </div>
        <div className="layout">
          <Routes>
            <Route path="/datePicker" element={<AllDatePickerVariants />} />
            <Route
              path="/radio"
              element={
                <CustomRadioGroup
                  options={optionsForRadio}
                  defaultValue="option2"
                  onChange={handleRadioChange}
                  additionalprops={{
                    style: {
                      border: "4px solid #ccc",
                      padding: "10px",
                      marginLeft: "50px",
                    },
                    // Any other props you want to pass
                  }}
                  orientation="vertical"
                  backgroundColor="lightgray"
                  uncheckedcolor="yellow"
                  checkedcolor="aqua"
                  labelFontSize="26px"
                  labelFontFamily="Helvetica, Arial, sans-serif"
                  labelFontStyle="italic"
                  labelColor="crimson"
                  // hoverable={true} // Enable hover effect
                  checkboxsize="100"
                />
              }
            />
            <Route
              path="/autoComplete"
              element={
                <CustomAutocompleteNew
                  autocompleteParam={autocompleteParam}
                  id="combo-box-demo"
                  // open={true}
                  options={autoCompleteOptions}
                  disableCloseOnSelect
                  multiple
                  getOptionLabel={(option: any) => option.title}
                  renderOption={(props, option: any, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.title}
                    </li>
                  )}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Favorites" />
                  )}
                />
              }
            />
            <Route path="/dropdown" element={<RenderDropDown />} />
            <Route path="/input" element={<InputTextWrapper />} />
            <Route
              path="/Menu"
              element={
                <BasicMenu
                  optionsList={optionsForSelect}
                  label="Dashboard"
                  onSelect={() => console.log("AS")}
                  open={true}
                  optionLineSeperation={true}
                  buttonProps={{
                    backgroundColor: "red",
                    border: "1px solid black",
                    borderRadius: "5px",
                  }}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
