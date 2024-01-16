import { forwardRef } from "react";

import PropTypes from "prop-types";

import AdmAvatarRoot from " components/AdmAvatar/AdmAvatarRoot";

const AdmAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <AdmAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

AdmAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

AdmAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default AdmAvatar;
