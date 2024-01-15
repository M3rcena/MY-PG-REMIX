import { forwardRef } from "react";

import PropTypes from "prop-types";

import AdmInputRoot from "../AdmInput/AdmInputRoot";
import AdmInputWithIconRoot from "../AdmInput/AdmInputWithIconRoot";
import AdmInputIconBoxRoot from "../AdmInput/AdmInputIconBoxRoot";
import AdmInputIconRoot from "../AdmInput/AdmInputIconRoot";

import { useMyPGController } from "context";

const AdmInput = forwardRef(({ size, icon, error, success, disabled, ...rest }, ref) => {
  let template;
  const [controller] = useMyPGController();
  const { direction } = controller;
  const iconDirection = icon.direction;

  if (icon.component && icon.direction === "left") {
    template = (
      <AdmInputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
        <AdmInputIconBoxRoot ownerState={{ size }}>
          <AdmInputIconRoot fontSize="small" ownerState={{ size }}>
            {icon.component}
          </AdmInputIconRoot>
        </AdmInputIconBoxRoot>
        <AdmInputRoot
          {...rest}
          ownerState={{ size, error, success, iconDirection, direction, disabled }}
        />
      </AdmInputWithIconRoot>
    );
  } else if (icon.component && icon.direction === "right") {
    template = (
      <AdmInputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
        <AdmInputRoot
          {...rest}
          ownerState={{ size, error, success, iconDirection, direction, disabled }}
        />
        <AdmInputIconBoxRoot ownerState={{ size }}>
          <AdmInputIconRoot fontSize="small" ownerState={{ size }}>
            {icon.component}
          </AdmInputIconRoot>
        </AdmInputIconBoxRoot>
      </AdmInputWithIconRoot>
    );
  } else {
    template = <AdmInputRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled }} />;
  }

  return template;
});

AdmInput.defaultProps = {
  size: "medium",
  icon: {
    component: false,
    direction: "none",
  },
  error: false,
  success: false,
  disabled: false,
};

AdmInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  icon: PropTypes.shape({
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    direction: PropTypes.oneOf(["none", "left", "right"]),
  }),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default AdmInput;
