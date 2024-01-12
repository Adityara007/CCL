import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MenuProps } from "@mui/material/Menu";
import { KeyboardArrowDown } from "@mui/icons-material";

interface CustomMenuProps extends MenuProps {
  label: string;
  optionsList: any[];
  buttonProps?: any;
  optionLineSeperation?:boolean
}

const BasicMenu: React.FC<CustomMenuProps> = ({
  label,
  optionsList,
  buttonProps,
  optionLineSeperation
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event:any) => {
   // console.log('aditya',event.target.value)
    setAnchorEl(null);
  };
  const handleSelect=(optionname:string)=>{
    setAnchorEl(null);
  }
  return (
    <div>
      <Button
        color="secondary"
        variant="contained"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={buttonProps}
        endIcon={<KeyboardArrowDown />}
      >
        {label}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
         
      >
        {optionsList.map((option: any) => {
          return (
            <div style={{width:'90%',borderBottom:`${optionLineSeperation ? '0.5px solid black': '' }`,margin:'auto'}}>
            <MenuItem color="secondary" value={option.name} onClick={()=>handleSelect(option.name)}>
              {option.name}
            </MenuItem>
            </div>
          );
        })}
      </Menu>
    </div>
  );
};

export default BasicMenu;
