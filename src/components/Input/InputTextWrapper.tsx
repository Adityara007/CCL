// Import React library
import React, { useState } from "react";
import InputText from "./InputText.tsx";
import { red } from "@mui/material/colors";
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import { lime, purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { newTheme } from "../../Themes/Theme";

// Create a functional component called InputTextWrapper
const InputTextWrapper = () => {
  // State variables
  const [value, setValue] = useState("");

  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [textError, setTextError] = useState<string | undefined>(undefined);
  const [numberError, setNumberError] = useState<string | undefined>(undefined);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined
  );

  const [emailSuccessMessage, setEmailSuccessMessage] = useState<
    string | undefined
  >(undefined);
  const [passwordSuccessMessage, setPasswordSuccessMessage] = useState<
    string | undefined
  >(undefined);

  const [emailIsSuccess, setEmailIsSuccess] = useState(false);
  const [passwordIsSuccess, setPasswordIsSuccess] = useState(false);

  // Constants for password requirements error messages
  const requireUpperCaseErrorMessage = "Uppercase letter is required";
  const requireLowercaseErrorMessage = "Lowercase letter is required";
  const requireNumberErrorMessage = "Number is required";
  const requireSpecialCharErrorMessage = "Special character is required";

  // Define regular expressions for password requirements
  const requireUppercase = /[A-Z]/;
  const requireLowercase = /[a-z]/;
  const requireNumber = /\d/;
  const requireSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

  const validateText = (value: string) => {
    console.log(value, "@value");
    if (!value.trim()) {
      setTextError("Text is required");
    }
  };

  const validateNumber = (value: string) => {
    console.log(value, "@value");
    if (!value.trim()) {
      setNumberError("Number is required");
    }
  };

  const validatePassword = (value: string) => {
    const hasUppercase = requireUppercase.test(value);
    const hasLowercase = requireLowercase.test(value);
    const hasNumber = requireNumber.test(value);
    const hasSpecialChar = requireSpecialChar.test(value);

    if (!value) {
      setPasswordError("Password is Required");
    } else if (value.length < 6 || value.length > 20) {
      setPasswordError("Password must be at least 6 characters");
    } else if (!(hasUppercase && hasLowercase && hasNumber && hasSpecialChar)) {
      let errorMessage = "Password must contain";
      if (!hasUppercase) errorMessage += ` ${requireUpperCaseErrorMessage},`;
      if (!hasLowercase) errorMessage += ` ${requireLowercaseErrorMessage},`;
      if (!hasNumber) errorMessage += ` ${requireNumberErrorMessage},`;
      if (!hasSpecialChar)
        errorMessage += ` ${requireSpecialCharErrorMessage},`;

      errorMessage = errorMessage.slice(0, -1);
      setPasswordError(errorMessage);
    } else {
      setPasswordError(undefined);
      setPasswordSuccessMessage("Password is valid");
    }
  };

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError("Email is Required");
      setEmailSuccessMessage(undefined);
    } else if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailError("Enter a valid email address");
      setEmailSuccessMessage(undefined);
    } else {
      setEmailError(undefined);
      setEmailSuccessMessage("Email is valid");
    }
  };

  const validateInput = (value: string, type: string) => {
    console.log(type, "@type");

    switch (type) {
      case "text":
        validateText(value);
        setTextValue(value);
        break;
      case "number":
        validateNumber(value);
        setNumberValue(value);
        break;
      case "password":
        validatePassword(value);
        setPasswordValue(value);
        break;
      case "email":
        validateEmail(value);
        setEmailValue(value);
        break;
      default:
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    validateInput(value, e.target.type);
  };

  return (
    // Use a div container with inline styles for layout
    <div
      style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        width: "800px",
      }}
    >
      {/* <ThemeProvider theme={newTheme}>
        <TextField color="primary" autoFocus={false} />
      </ThemeProvider> */}
      {/* 1) Default MUI input field with text */}
      <InputText
        type="text"
        variant="outlined"
        // placeholder="Default MUI input"
        labelClassName="labelClass"
        required
        // label="label"
        defaultValue="foo"
        autoFocus={false}
      />
      {/* 2) Input text field with customized width, height, and border radius */}

      <InputText
        type="text"
        width="250px"
        height="40px"
        borderRadius="0px"
        variant="outlined"
        placeholder="Customized input"
      />

      {/* 3) Input password field with width, height, and variant, along with password requirements and error messages */}
      <InputText
        type="password"
        width="250px"
        height="40px"
        variant="standard"
      />

      {/* 4) Input text field with customized width and height */}
      <InputText type="text" width="250px" height="40px" variant="outlined" />

      {/* 5) Input text field with customized width, height, border radius, and input font size */}
      <InputText
        type="text"
        width="250px"
        height="40px"
        borderRadius="0px"
        inputFontSize="20px"
        variant="outlined"
      />

      {/* 6) Input text field with customized width, height, and input font color */}
      <InputText
        type="text"
        width="250px"
        height="40px"
        inputFontColor="red"
        variant="outlined"
      />

      {/* 7) Input text field with customized width, height, input font color, and prefix */}
      <InputText
        type="text"
        width="250px"
        height="40px"
        inputFontColor="red"
        prefix="Kg"
        variant="outlined"
        placeholder="Input prefix"
      />

      {/* 8) Input text field with customized width, height, and suffix */}
      <InputText
        type="text"
        width="250px"
        height="80px"
        suffix="Kg"
        variant="outlined"
        placeholder="Input suffix"
      />

      {/* 9) Input text field with customized width, height, suffix, and maximum length */}
      <InputText
        type="text"
        width="250px"
        height="40px"
        suffix="Kg"
        maxLength={5}
        variant="filled"
        placeholder="Input suffix with max length"
      />

      {/* 10) Default input text field with width, height, and variant */}
      <InputText type="number" width="250px" height="40px" variant="standard" />

      {/* 11) Input password field with width, height, and variant, along with password requirements */}
      <InputText
        type="password"
        width="250px"
        height="40px"
        variant="outlined"
        maxLength={5}
      />

      {/* 12) Input password field with width, height, and variant, along with password requirements and error messages */}
      <InputText
        type="password"
        width="250px"
        height="40px"
        variant="standard"
      />
      {/* 13 ) Input email with required and label */}
      <InputText
        type="email"
        width="250px"
        height="40px"
        variant="standard"
        customRequired={true}
        inputLabelText="Email"
      />

      {/* error validations for input  */}

      <InputText
        type="text"
        width="250px"
        height="40px"
        borderRadius="0px"
        variant="outlined"
        value={textValue}
        onChange={handleChange}
        customError={textError}
        color="secondary"
        helperText={textError ? textError : ""}
      />

      <InputText
        type="password"
        width="250px"
        height="40px"
        variant="standard"
        value={passwordValue}
        onChange={handleChange}
        error={Boolean(passwordError)}
        helperText={
          passwordError ? (
            passwordError
          ) : (
            <p style={{ color: passwordIsSuccess ? "green" : "inherit" }}>
              {passwordIsSuccess ? passwordSuccessMessage : ""}
            </p>
          )
        }
        placeholder="Password validation"
      />

      <InputText
        type="email"
        variant="outlined"
        value={emailValue}
        onChange={(e) => handleChange(e)}
        error={Boolean(emailError)}
        // maxLength={3}
        helperText={
          emailError ? (
            emailError
          ) : (
            <p style={{ color: emailIsSuccess ? "green" : "inherit" }}>
              {emailIsSuccess ? emailSuccessMessage : ""}
            </p>
          )
        }
        placeholder="Email validation"
      />
      <InputText
        type="number"
        width="250px"
        height="40px"
        variant="outlined"
        maxLength={5}
        value={numberValue}
        onChange={handleChange}
        customError={numberError}
        helperText={numberError ? numberError : ""}
        placeholder="Number validation"
      />
      <InputText
        type="number"
        width="250px"
        height="40px"
        variant="outlined"
        focused={false}
        // disabled
        multiline
        maxRows={4}
        error
      />
    </div>
  );
};

export default InputTextWrapper;
