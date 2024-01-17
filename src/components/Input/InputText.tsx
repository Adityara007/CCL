import React, { ChangeEvent, useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField, BaseTextFieldProps } from "@material-ui/core";

interface InputTextProps extends BaseTextFieldProps {
  /**
   * Width of the input, specified as a CSS string.
   */
  width?: string;

  /**
   * Height of the input, specified as a CSS string.
   */
  height?: string;

  /**
   * Border radius of the input, specified as a CSS string.
   */
  borderRadius?: string;

  /**
   * Font size of the input text, specified as a CSS string.
   */
  inputFontSize?: string;

  /**
   * Font color of the input text, specified as a CSS color string.
   */
  inputFontColor?: string;

  /**
   * Suffix content to be displayed inside the input.
   */
  suffix?: string;

  /**
   * Type of the `input` element: "text" | "number" | "password" | "email".
   */
  type?: "text" | "number" | "password" | "email";

  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   */
  InputProps?: string;

  /**
   * Props applied to the Input element. It depends on the `variant` prop value.
   */
  inputProps?: string;

  /**
   * Error message to be displayed for validation errors.
   */
  error?: any;

  /**
   * Additional border styles applied to the `input` element.
   */
  border?: string;

  /**
   * Regular expression pattern for validating numeric inputs.
   */
  numberPattern?: RegExp;

  /**
   * Maximum length allowed for the input.
   */
  maxLength?: number;

  /**
   * Minimum length required for the input.
   */
  minLength?: number;

  /**
   * Custom error message to be displayed for validation errors.
   */
  customError?: string;

  /**
   * Event handler for input change events.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * CSS class name for the input label.
   */
  labelClassName?: string;

  /**
   * Text content for the input label.
   */
  inputLabelText?: string | number | undefined;

  /**
   * Indicates whether the input is required.
   */
  customRequired?: boolean;

  /**
   * Indicates whether the input should autofocus.
   */
  customAutoFocus?: boolean;

  // hoverBorderColor?: string;
}

const InputText: React.FC<InputTextProps> = ({
  width,
  height,
  borderRadius,
  inputFontSize,
  inputFontColor,
  prefix,
  suffix,
  type,
  InputProps,
  value,
  border,
  numberPattern,
  variant,
  maxLength,
  minLength,
  color,
  onChange,
  id,
  inputProps,
  customError,
  required,
  helperText,
  label,
  labelClassName,
  inputLabelText,
  customRequired,
  customAutoFocus,
  // hoverBorderColor = "red",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const textFieldStyle = {
    // border: border || "1px solid red",
  };

  const inputCustomizedStyles = {
    style: {
      width: width || "100%",
      borderRadius: borderRadius || "4px",
      height: height || "100%",
      fontSize: inputFontSize || "16px",
      // borderColor: hoverBorderColor || "red",
    },
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  //   eye icon visibility
  const renderPasswordVisibilityToggle = () => {
    return (
      <InputAdornment position="end">
        <IconButton
          onClick={handleTogglePasswordVisibility}
          onMouseDown={handleMouseDownPassword}
          data-testid="visibility-toggle"
          edge="end"
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );
  };

  const handleInputChange = (event: any, changeFun: any) => {
    let value = event.target.value;
    if (changeFun) {
      changeFun(event);
    }
    if (maxLength !== undefined && value.length > maxLength) {
      value = value.slice(maxLength);
    }
  };

  return (
    <div className="inputText">
      <div className="inputLabelSection" data-testid="input-text-star">
        <label className={labelClassName}>{inputLabelText}</label>
        {customRequired ? <span className="inputRequiredStar">*</span> : ""}
      </div>
      <TextField
        type={type === "password" && showPassword ? "text" : type}
        error={customError}
        data-testid="input-text"
        helperText={helperText}
        variant={variant}
        required={required}
        label={label}
        value={value}
        InputProps={{
          startAdornment: prefix && (
            <InputAdornment position="start">{prefix}</InputAdornment>
          ),
          endAdornment: (
            <>
              {type === "password" && renderPasswordVisibilityToggle()}
              {suffix && (
                <InputAdornment position="end">{suffix}</InputAdornment>
              )}
            </>
          ),
          ...inputCustomizedStyles,
        }}
        inputProps={{
          maxLength,
          ...inputCustomizedStyles,
        }}
        style={textFieldStyle}
        onChange={(e) => handleInputChange(e, onChange)}
        {...props}
      />
    </div>
  );
};

export default InputText;
