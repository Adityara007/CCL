import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationPages = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname == path;
  };
  return (
    <>
      <Link
        to="/datePicker"
        className="pagesLinks"
        style={{ color: isActive("/datePicker") ? "#9b5402" : "#341c01" }}
      >
        DatePicker
      </Link>
      <Link to="/radio" className="pagesLinks">
        Radio
      </Link>
      <Link to="/autoComplete" className="pagesLinks">
        AutoComplete
      </Link>
      <Link to="/dropdown" className="pagesLinks">
        Dropdown
      </Link>
      <Link to="/input" className="pagesLinks">
        Input
      </Link>
      <Link to="/Menu" className="pagesLinks">
        Menu
      </Link>
    </>
  );
};

export default NavigationPages;
