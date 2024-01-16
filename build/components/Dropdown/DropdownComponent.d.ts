import React from "react";
import { SelectProps } from "@mui/material/Select";
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
declare const SelectParent: React.FC<CustomSelectProps>;
export default SelectParent;
