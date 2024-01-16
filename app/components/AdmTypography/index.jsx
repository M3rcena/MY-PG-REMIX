import { forwardRef } from "react";

import PropTypes from "prop-types";

import AdmTypographyRoot from "remix/components/AdmTypography/AdmTypographyRoot";

const AdmTypography = forwardRef(
  (
    {
      color,
      fontWeight,
      textTransform,
      verticalAlign,
      fontSize,
      textGradient,
      opacity,
      children,
      ...rest
    },
    ref
  ) => (
    <AdmTypographyRoot
      {...rest}
      ref={ref}
      ownerState={{
        color,
        textTransform,
        verticalAlign,
        fontSize,
        fontWeight,
        opacity,
        textGradient,
      }}
    >
      {children}
    </AdmTypographyRoot>
  )
);

AdmTypography.defaultProps = {
  color: "dark",
  fontWeight: false,
  fontSize: "16px",
  textTransform: "none",
  verticalAlign: "unset",
  textGradient: false,
  opacity: 1,
};

AdmTypography.propTypes = {
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "white",
    "logo",
  ]),
  fontWeight: PropTypes.oneOf([false, "light", "regular", "medium", "bold"]),
  textTransform: PropTypes.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
  verticalAlign: PropTypes.oneOf([
    "unset",
    "baseline",
    "sub",
    "super",
    "text-top",
    "text-bottom",
    "middle",
    "top",
    "bottom",
  ]),
  textGradient: PropTypes.bool,
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number,
};

export default AdmTypography;
