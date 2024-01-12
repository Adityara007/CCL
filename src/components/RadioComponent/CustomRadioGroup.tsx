// CustomRadioGroup.tsx
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import styled from "@emotion/styled";
import { RadioProps } from "@mui/material/Radio";

interface StyledRadioProps {
  uncheckedcolor?: string;
  checkedcolor?: string;
  checkboxsize?: string; // new prop
}

const StyledRadio = styled(Radio)<StyledRadioProps>`
  color: ${(props) => props.uncheckedcolor || ""};

  &.Mui-checked {
    color: ${(props) => props.checkedcolor || ""};
  }

  & .MuiSvgIcon-root {
    font-size: ${(props) =>
      props.checkboxsize || ""}px !important; // apply font-size
  }
`;

interface StyledFormControlProps extends FormControlProps {
  orientation: "horizontal" | "vertical";
  backgroundColor?: string;
  labelFontSize?: string;
  labelFontFamily?: string;
  labelFontStyle?: string;
  labelColor?: string;
  checkboxsize?: string; // new prop
}

const StyledFormControl = styled(
  ({
    orientation,
    backgroundColor,
    labelFontSize,
    labelFontFamily,
    labelFontStyle,
    labelColor,
    checkboxsize, // new prop
    ...rest
  }: StyledFormControlProps) => <FormControl {...rest} />
)<StyledFormControlProps>`
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: ${(props) =>
    props.orientation === "horizontal" ? "row" : "column"};
  background-color: ${(props) => props.backgroundColor || "lightblue"};

  .MuiFormControlLabel-label {
    font-size: ${(props) => props.labelFontSize || "inherit"};
    font-family: ${(props) => props.labelFontFamily || "inherit"};
    font-style: ${(props) => props.labelFontStyle || "inherit"};
    color: ${(props) => props.labelColor || "inherit"};
  }

  // & .MuiRadio-root {
  //   & .MuiSvgIcon-root {
  //     font-size: ${(props) =>
    props.checkboxsize || "inherit"}px !important; // apply font-size
  //   }
  // }
`;

interface CustomRadioGroupProps {
  options?: {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
  }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  additionalprops?: {
    [key: string]: any;
  };
  orientation?: "horizontal" | "vertical";
  backgroundColor?: string;
  uncheckedcolor?: string;
  checkedcolor?: string;
  labelFontSize?: string;
  labelFontFamily?: string;
  labelFontStyle?: string;
  labelColor?: string;
  fontSize?: string;
  checkboxsize?: string; // new prop
}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
  options,
  defaultValue,
  onChange,

  orientation = "vertical",
  backgroundColor,
  uncheckedcolor,
  checkedcolor,
  labelFontSize,
  labelFontFamily,
  labelFontStyle,
  labelColor,
  fontSize,
  checkboxsize,
  ...additionalprops
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(
    defaultValue
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <StyledFormControl
      component="fieldset"
      orientation={orientation}
      backgroundColor={backgroundColor}
      labelFontSize={labelFontSize}
      labelFontFamily={labelFontFamily}
      labelFontStyle={labelFontStyle}
      labelColor={labelColor}
      checkboxsize={checkboxsize}
      {...additionalprops}
      data-testid="custom-radio-group"
    >
      <RadioGroup
        aria-label="custom-radio-group"
        name="custom-radio-group"
        value={selectedValue}
        onChange={handleChange}
        row={orientation === "horizontal"}
      >
        {options?.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <StyledRadio
                uncheckedcolor={uncheckedcolor}
                checkedcolor={checkedcolor}
                checkboxsize={checkboxsize}
              />
            }
            label={option.label}
            disabled={option.disabled}
          />
        ))}
      </RadioGroup>
    </StyledFormControl>
  );
};

export default CustomRadioGroup;
