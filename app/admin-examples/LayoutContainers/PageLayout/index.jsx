import React, { useEffect } from "react";
import { useLocation } from "@remix-run/react";
import PropTypes from "prop-types";
import AdmBox from "../../../components/AdmBox";
import { useMyPGController, setLayout, MyPGControllerProvider } from "../../../context";
import tripleLinearGradient from "../../../assets/admin-theme/functions/tripleLinearGradient";
import colors from "../../../assets/admin-theme/base/colors";

function PageLayout({ children }) {
  const [, dispatch] = useMyPGController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);
  const { gradients } = colors;

  return (
    <AdmBox
      width="100vw"
      maxWidth="100%"
      height="100%"
      minHeight="100vh"
      sx={() => ({
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

PageLayout.defaultProps = {
  background: "default",
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// Wrap PageLayout with MyPGControllerProvider
const PageLayoutWithProvider = (props) => (
  <MyPGControllerProvider>
    <PageLayout {...props} />
  </MyPGControllerProvider>
);

export default PageLayoutWithProvider;
