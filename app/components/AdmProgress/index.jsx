import { forwardRef } from "react";

import PropTypes from "prop-types";

import AdmTypography from "#app/components/AdmTypography";

import AdmProgressRoot from "#j/components/AdmProgress/AdmProgressRoot";

const AdmProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <AdmTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </AdmTypography>
    )}
    <AdmProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

AdmProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

AdmProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default AdmProgress;
