import { useEffect } from "react";

import { useLocation } from "@remix-run/react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import AdmBox from "#app/components/AdmBox";

import { useMyPGController, setLayout } from "#app/context";

function PageLayout({ children }) {
  const [, dispatch] = useMyPGController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <AdmBox
      width="100vw"
      maxWidth="100%"
      height="100%"
      minHeight="100vh"
      sx={({ functions: { tripleLinearGradient }, palette: { gradients } }) => ({
        overflowX: "hidden",
        backgroundImage: tripleLinearGradient(
          gradients.cover.main,
          gradients.cover.state,
          gradients.cover.stateSecondary,
          gradients.cover.deg
        ),
        position: "relative",
      })}
    >
      {children}
    </AdmBox>
  );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
