import { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

import AdmBox from "remix/components/AdmBox";
import AdmTypography from "remix/components/AdmTypography";
import AdmButton from "remix/components/AdmButton";

import DefaultNavbarLink from "remix/admin-examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import DefaultNavbarMobile from "remix/admin-examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

import breakpoints from "remix/assets/admin-theme/base/breakpoints";
import colors from "remix/assets/admin-theme/base/colors";
import borders from "remix/assets/admin-theme/base/borders";

function DefaultNavbar({ transparent, light, action }) {
  const { borderCol } = colors;
  const { borderWidth } = borders;
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <Container>
      <AdmBox
        py={2}
        px={{ xs: transparent ? 4 : 3, sm: transparent ? 2 : 3, lg: transparent ? 0 : 3 }}
        my={2}
        border={`${borderWidth[1]} solid ${borderCol.navbar}`}
        width="calc(100% - 48px)"
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left="50%"
        zIndex={3}
        maxWidth="1044px"
        sx={({ palette: { gradients }, functions: { linearGradient } }) => ({
          backgroundColor: linearGradient(
            gradients.navbar.main,
            gradients.navbar.state,
            gradients.navbar.deg
          ),
          backdropFilter: "blur(42px)",
          transform: "translate(-50%, 0px)",
        })}
      >
        <AdmBox component={Link} to="/" py={transparent ? 1.5 : 0.75} lineHeight={1}>
          <AdmTypography
            variant="button"
            textGradient={true}
            color="logo"
            fontSize={14}
            letterSpacing={2}
            fontWeight="medium"
            sx={{
              margin: "0 auto",
            }}
          >
            VISION UI FREE
          </AdmTypography>
        </AdmBox>
        <AdmBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
          <DefaultNavbarLink icon="donut_large" name="dashboard" route="/dashboard" />
          <DefaultNavbarLink icon="person" name="profile" route="/profile" />
          <DefaultNavbarLink icon="account_circle" name="sign up" route="/authentication/sign-up" />
          <DefaultNavbarLink icon="key" name="sign in" route="/authentication/sign-in" />
        </AdmBox>
        {action &&
          (action.type === "internal" ? (
            <AdmBox display={{ xs: "none", lg: "inline-block" }}>
              <AdmButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
              >
                {action.label}
              </AdmButton>
            </AdmBox>
          ) : (
            <AdmBox display={{ xs: "none", lg: "inline-block" }}>
              <AdmButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color={action.color ? action.color : "info"}
                sx={({ typography: { size }, functions: { pxToRem } }) => ({
                  fontSize: pxToRem(size.sm),
                })}
              >
                {action.label}
              </AdmButton>
            </AdmBox>
          ))}
        <AdmBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon
            sx={({ palette: { white } }) => ({
              color: white.main,
            })}
            fontSize="default"
          >
            {mobileNavbar ? "close" : "menu"}
          </Icon>
        </AdmBox>
      </AdmBox>
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />}
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;