import { forwardRef } from "react";

import PropTypes from "prop-types";

import AdmSwitchRoot from " components/AdmSwitch/AdmSwitchRoot";

const AdmSwitch = forwardRef(({ color, size, ...rest }, ref) => (
  <AdmSwitchRoot {...rest} ref={ref} color="white" size={size} ownerState={{ color, size }} />
));

AdmSwitch.defaultProps = {
  size: "medium",
  color: "white",
};

AdmSwitch.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
};

export default AdmSwitch;
