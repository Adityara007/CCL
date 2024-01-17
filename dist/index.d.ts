import * as React from 'react';
import React__default, { ElementType, ChangeEvent } from 'react';
import { SelectProps } from '@mui/material/Select';
import { AccordionProps } from '@mui/material/Accordion';
import { BaseDatePickerProps } from '@mui/x-date-pickers/DatePicker/shared';
import { MenuProps } from '@mui/material/Menu';
import { BaseTextFieldProps } from '@material-ui/core';
import { AutocompleteProps } from '@mui/material/Autocomplete';

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
declare const SelectParent: React__default.FC<CustomSelectProps>;

interface CustomAccordionProps extends AccordionProps {
    width?: string;
    height?: string;
    backgroundColor?: string;
    fontColor?: string;
    expandIconPosition?: "left" | "right";
    accordionTitle?: string;
    accordionContent?: string;
    accordionBorderRadious?: string;
    customArrowColor?: string;
    customTitleFontSize?: string;
    customTitleColor?: string;
    customContnetFontSize?: string;
    customContnetColor?: string;
    customArrowSize?: string;
    customArrowImage?: string;
}
declare const CustomAccordion: React__default.FC<CustomAccordionProps>;

interface CustomDateComponentProps extends BaseDatePickerProps<Date> {
    givenDate?: Date;
    givenFormat?: string;
    minDate?: Date;
    label?: string;
    color?: string;
    dayCalenderStylings?: object;
    pickersDayStylings?: object;
    buttonColor?: string;
    disableFuture?: boolean;
    helperText?: string;
    selectAfterThisDate?: Date;
    desktopPaperBackgroundColor?: string;
    open?: boolean;
    className?: string;
    inputTextColor?: string;
    leftarrow?: ElementType;
    rightarrow?: ElementType;
    calendarMonth?: ElementType;
    calenderHeaderRootStylings?: object;
    calenderHeaderRootLabelStylings?: object;
    calenderHeaderRootLabelContainerStylings?: object;
    calenderHeaderRootSwitchViewButtonStylings?: object;
    showDaysOutsideCurrentMonth?: boolean;
}
declare const CustomDateComponent: React__default.FC<CustomDateComponentProps>;

interface CustomMenuProps extends MenuProps {
    label: string;
    optionsList: any[];
    buttonProps?: any;
    optionLineSeperation?: boolean;
}
declare const BasicMenu: React.FC<CustomMenuProps>;

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
}
declare const InputText: React__default.FC<InputTextProps>;

interface CustomRadioGroupProps {
    options?: {
        value: string;
        label: React__default.ReactNode;
        disabled?: boolean;
    }[];
    defaultValue?: string;
    onChange?: (value: string) => void;
    additionalprops?: {
        [key: string]: any;
    };
    orientation?: "horizontal" | "vertical";
    backgroundColor?: string;
    uncheckedcolor?: any;
    checkedcolor?: string;
    labelFontSize?: string;
    labelFontFamily?: string;
    labelFontStyle?: string;
    labelColor?: string;
    fontSize?: string;
    checkboxsize?: string;
}
declare const CustomRadioGroup: React__default.FC<CustomRadioGroupProps>;

interface AutocompleteParams extends AutocompleteProps<any, true, false, false> {
    autocompleteParam: any;
}
declare const CustomAutocompleteNew: React__default.FC<AutocompleteParams>;

interface CustomPaginationProps {
    color: "primary" | "secondary" | "standard";
    count: number;
    size: "small" | "medium" | "large";
    backgroundColor?: string;
    boxShadow?: string;
    customStyling?: any;
}
declare const CustomPagination: React__default.FC<CustomPaginationProps>;

export { CustomAccordion, CustomAutocompleteNew as CustomAutocomplete, CustomDateComponent, CustomPagination, CustomRadioGroup, InputText as Input, BasicMenu as Menu, SelectParent };
