import * as React from "react";
import { MenuProps } from "@mui/material/Menu";
interface CustomMenuProps extends MenuProps {
    label: string;
    optionsList: any[];
    buttonProps?: any;
    optionLineSeperation?: boolean;
}
declare const BasicMenu: React.FC<CustomMenuProps>;
export default BasicMenu;
