import React from "react";
import Accordion, { AccordionProps } from "@mui/material/Accordion";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  width,
  height,
  backgroundColor,
  fontColor,
  expandIconPosition = "right",
  accordionTitle,
  accordionContent,
  accordionBorderRadious,
  customArrowColor,
  customTitleFontSize,
  customTitleColor,
  customContnetFontSize,
  customContnetColor,
  customArrowSize,
  customArrowImage,
  ...props
}) => {
  const expandIcon = customArrowImage ? (
    <img
      src={customArrowImage} 
      alt="Expand Icon"
      style={{
        width: customArrowSize || "16px",
        transform: expandIconPosition === "left" ? "rotate(0deg)" : "rotate(0deg)",
        filter: customArrowColor || "none",
      }}
    />
  ) : (
    <ArrowForwardIosSharpIcon
    data-testid="default-expand-icon"
      sx={{
        fontSize: customArrowSize || "16px",
        transform:
          expandIconPosition === "left" ? "rotate(90deg)" : "rotate(90deg)",
        color: customArrowColor || "",
      }}
    />
  );
  

  const customizedStyles = {
    width: width || "",
    height: height || "",
    backgroundColor: backgroundColor || "",
    color: fontColor || "",
    borderRadius: accordionBorderRadious || "",
  };

  const customizedTypographyTitleStyles = {
    marginLeft: "10px",
    fontSize: customTitleFontSize || "",
    color: customTitleColor || "",
  };
  const customizedTypographyContnetStyles = {
    fontSize: customContnetFontSize || "",
    color: customContnetColor || "",
  };

  return (
    <div>
      <Accordion {...props} style={customizedStyles}>
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expandIcon={expandIcon}
          sx={{
            ...(expandIconPosition === "left" && {
              flexDirection: "row-reverse",
            }),
          }}
        >
          <Typography style={customizedTypographyTitleStyles}>
            {accordionTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={customizedTypographyContnetStyles}>
            {accordionContent}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
