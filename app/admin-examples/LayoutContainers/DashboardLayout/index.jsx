import { useEffect } from "react";

// @remix-run/react components
import { useLocation } from "@remix-run/react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import AdmBox from "../../../components/AdmBox";

import { useMyPGController, setLayout } from "../../../context";

function DashboardLayout({ children }) {
  const [controller, dispatch] = useMyPGController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
    <AdmBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",

        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </AdmBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
