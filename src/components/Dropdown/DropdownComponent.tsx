import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectProps } from "@mui/material/Select";
import { Checkbox, FormHelperText } from "@mui/material";
interface CustomSelectProps extends SelectProps {
  minWidth?: string | any;
  options: any[];
  backgroundColor?: string;
  selectOptionsColor?: string;
  selectOptionsSize?: string;
  labelColor?: string;
  labelSize?: string;
  borderRadius?: string;
  helperTextStyle?: any;
  helperText?: string;
  isRequired?: boolean;
  isvalid?: boolean;
  border?: string;
  props?: any;
  checkBox?: boolean;
}

const SelectParent: React.FC<CustomSelectProps> = ({
  label,
  value,
  minWidth,
  options,
  selectOptionsColor,
  selectOptionsSize,
  labelColor,
  labelSize,
  borderRadius,
  helperTextStyle,
  helperText,
  isRequired,
  backgroundColor,
  border,
  isvalid,
  placeholder,
  checkBox,
  ...otherProps
}) => {
  const [selectvalue, setSelectvalue] = useState<any>(value);

  const handleChange = (event: any) => {
    setSelectvalue(event.target.value);
  };
  return (
    <>
      {" "}
      <div style={{ width: "100%", alignItems: "center" }}>
        <FormControl sx={{ m: 1, minWidth: minWidth }}>
          <InputLabel
            color={otherProps.color}
            id="demo-simple-select-filled-label"
          >
            <div style={{ color: labelColor, fontSize: labelSize }}>
              {label}
            </div>
          </InputLabel>
          <Select
            variant="outlined"
            label={label}
            placeholder={placeholder}
            labelId="demo-simple- select-filled-label"
            id="demo-simple-select-filled"
            value={selectvalue}
            onChange={handleChange}
            style={{ borderRadius: borderRadius, border: border }}
            required={isRequired}
            color={"secondary"}
            {...otherProps}
          >
            {options.map((item: any, index: number) => {
              return (
                <MenuItem
                  key={index}
                  color={otherProps.color}
                  value={item.name}
                >
                  {checkBox ? (
                    <Checkbox
                      color={otherProps.color}
                      checked={selectvalue.indexOf(item.name) > -1}
                    />
                  ) : null}
                  <span
                    style={{
                      color: selectOptionsColor,
                      fontSize: selectOptionsSize,
                      width: "100%",
                    }}
                  >
                    {item.name}
                  </span>
                </MenuItem>
              );
            })}
          </Select>
          {helperText && !isvalid ? (
            <FormHelperText>
              <div style={helperTextStyle}>{helperText} </div>
            </FormHelperText>
          ) : null}
        </FormControl>
      </div>
    </>
  );
};

export default SelectParent;
