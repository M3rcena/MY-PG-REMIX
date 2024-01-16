import { useState } from "react";

import PropTypes from "prop-types";

import Fade from "@mui/material/Fade";

import AdmBox from "remix/components/AdmBox";

import AdmAlertRoot from "remix/components/AdmAlert/AdmAlertRoot";
import AdmAlertCloseIcon from "remix/components/AdmAlert/AdmAlertCloseIcon";

function AdmAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <AdmAlertRoot ownerState={{ color }} {...rest}>
        <AdmBox display="flex" alignItems="center" color="white">
          {children}
        </AdmBox>
        {dismissible ? (
          <AdmAlertCloseIcon onClick={mount ? handleAlertStatus : null}>&times;</AdmAlertCloseIcon>
        ) : null}
      </AdmAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

AdmAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

AdmAlert.propTypes = {
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
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default AdmAlert;
