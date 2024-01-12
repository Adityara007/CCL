import React from "react";
import { Box, Button, TextField } from "@mui/material";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";

interface AutocompleteParams
  extends AutocompleteProps<any, true, false, false> {
  autocompleteParam: any;
}

const CustomAutocompleteNew: React.FC<AutocompleteParams> = ({
  autocompleteParam,
  ...otherProps
}) => {
  const param = autocompleteParam;
  const StyledAutocomplete = {
    width: param?.style?.width ? param.style.width : 300,
    "& .MuiOutlinedInput-notchedOutline": param?.style?.AInBorder,
    "&:hover .MuiOutlinedInput-notchedOutline": param?.style?.AHovBorder,
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": param?.style?.AFocBorder,
    "& .MuiAutocomplete-popupIndicator": param?.style?.A_arrow_icon,
    "& .MuiAutocomplete-clearIndicator": param?.style?.A_clear_icon,
    "& .MuiTouchRipple-root": {
      backgroundColor: "none",
    },
    "&:hover .MuiAutocomplete-popupIndicator": {
      background: "none",
    },
    "&:hover .MuiAutocomplete-clearIndicator": {
      background: "none",
    },
    "& input::placeholder": param?.style?.InpPlaceholder,
    "& input": param?.style?.InpValue,
    "& .MuiChip-root": param?.style?.AMuiChip,
    "& .MuiAutocomplete-listbox .MuiAutocomplete-option": {
      backgroundColor: "red !important",
    },
  };

  const CustomMenu = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(({ children, ...props }, ref) => (
    <Box ref={ref} {...props} sx={{ ...param?.style?.APopper }}>
      {children}
    </Box>
  ));

  return (
    <Autocomplete
      data-testid="autocomplete"
      {...otherProps}
      sx={{ ...StyledAutocomplete }}
      PaperComponent={CustomMenu}
    />
  );
};

export default CustomAutocompleteNew;
