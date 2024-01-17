import React  from "react";
import Pagination from "@mui/material/Pagination";
interface CustomPaginationProps {
  color: "primary" | "secondary" | "standard";
  count: number;
  size: "small" | "medium" | "large";

  backgroundColor?: string;
  boxShadow?: string;
  customStyling?:any
}
const CustomPagination: React.FC<CustomPaginationProps> = ({
  color,
  count,
  size,
  backgroundColor,
  boxShadow,
  customStyling={
    height: "auto",
    backgroundColor: backgroundColor,
    boxShadow: boxShadow,
  }
}) => {
  return (
    <div>
      <Pagination
        style={customStyling}
        onChangeCapture={()=>console.log('aditya')}
        size={size}
        count={count}
        color={color}
      />
    </div>
  );
};

export default CustomPagination;
