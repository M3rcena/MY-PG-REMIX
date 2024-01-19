import { useState, useEffect } from "react";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/node/Icon/index.jsButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/node/Icon/index.js";

import TwitterIcon from "@mui/icons-material/Twitter.js";
import FacebookIcon from "@mui/icons-material/Facebook.js";

import AdmBox from "#app/components/AdmBox";
import AdmTypography from "#app/components/AdmTypography";
import AdmButton from "#app/components/AdmButton";
import AdmSwitch from "#app/components/AdmSwitch";

import ConfiguratorRoot from "#app/admin-examples/Configurator/ConfiguratorRoot";

import {
  useMyPGController,
  setOpenConfigurator,
  setTransparentSidenav,
  setFixedNavbar,
  setSidenavColor,
} from "context";

function Configurator() {
  const [controller, dispatch] = useMyPGController();
  const { openConfigurator, transparentSidenav, fixedNavbar, sidenavColor } = controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => setTransparentSidenav(dispatch, true);
  const handleWhiteSidenav = () => setTransparentSidenav(dispatch, false);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    boxShadows: { buttonBoxShadow },
  }) => ({
    height: pxToRem(42),
    boxShadow: buttonBoxShadow.main,

    "&:hover, &:focus": {
      opacity: 1,
    },
  });

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <AdmBox
        backgroundColor="black"
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <AdmBox>
          <AdmTypography color="white" variant="h5" fontWeight="bold">
            Vision UI Configurator
          </AdmTypography>
          <AdmTypography variant="body2" color="white" fontWeight="bold">
            See our dashboard options.
          </AdmTypography>
        </AdmBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { white, dark } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            stroke: `${white.main} !important`,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </AdmBox>

      <Divider light />

      <AdmBox pt={1.25} pb={3} px={3}>
        <AdmBox>
          <AdmTypography variant="h6" color="white">
            Sidenav Colors
          </AdmTypography>

          <AdmBox mb={0.5}>
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                sx={({ borders: { borderWidth }, palette: { white, dark }, transitions }) => ({
                  width: "24px",
                  height: "24px",
                  padding: 0,
                  border: `${borderWidth[1]} solid ${white.main}`,
                  borderColor: sidenavColor === color && dark.main,
                  transition: transitions.create("border-color", {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.shorter,
                  }),
                  backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                    linearGradient(gradients[color].main, gradients[color].state),

                  "&:not(:last-child)": {
                    mr: 1,
                  },

                  "&:hover, &:focus, &:active": {
                    borderColor: dark.main,
                  },
                })}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </AdmBox>
        </AdmBox>
        {window.innerWidth >= 1440 && (
          <AdmBox mt={3} lineHeight={1}>
            <AdmTypography variant="h6" color="white">
              Sidenav Type
            </AdmTypography>
            <AdmTypography variant="button" color="text" fontWeight="regular">
              Choose between 2 different sidenav types.
            </AdmTypography>

            <AdmBox
              sx={{
                display: "flex",
                mt: 2,
              }}
            >
              <AdmButton
                color="info"
                variant={transparentSidenav ? "contained" : "outlined"}
                onClick={handleTransparentSidenav}
                disabled={disabled}
                fullWidth
                sx={{
                  mr: 1,
                  ...sidenavTypeButtonsStyles,
                }}
              >
                Transparent
              </AdmButton>
              <AdmButton
                color="info"
                variant={transparentSidenav ? "outlined" : "contained"}
                onClick={handleWhiteSidenav}
                disabled={disabled}
                fullWidth
                sx={sidenavTypeButtonsStyles}
              >
                Opaque
              </AdmButton>
            </AdmBox>
          </AdmBox>
        )}

        <AdmBox mt={3} mb={2} lineHeight={1}>
          <AdmTypography variant="h6" color="white">
            Navbar Fixed
          </AdmTypography>

          {/* <Switch checked={fixedNavbar} onChange={handleFixedNavbar} color="info" /> */}
          <AdmSwitch checked={fixedNavbar} onChange={handleFixedNavbar} color="info" />
        </AdmBox>

        <Divider light />

        <AdmBox mt={3} mb={2}>
          <AdmBox mb={2}>
            <AdmButton
              component={Link}
              href="https://www.creative-tim.com/product/vision-ui-dashboard-react"
              target="_blank"
              rel="noreferrer"
              color="info"
              variant="contained"
              fullWidth
            >
              FREE DOWNLOAD
            </AdmButton>
          </AdmBox>
          <AdmButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/vision-ui-dashboard/"
            target="_blank"
            rel="noreferrer"
            color="info"
            variant="outlined"
            fullWidth
          >
            VIEW DOCUMENTATION
          </AdmButton>
        </AdmBox>
        <AdmBox display="flex" justifyContent="center">
          <GitHubButton
            href="https://github.com/creativetimofficial/vision-ui-dashboard-react"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star creativetimofficial/vision-ui-dashboard-react on GitHub"
          >
            Star
          </GitHubButton>
        </AdmBox>
        <AdmBox mt={3} textAlign="center">
          <AdmBox mb={0.5}>
            <AdmTypography variant="h6" color="white">
              Thank you for sharing!
            </AdmTypography>
          </AdmBox>

          <AdmBox display="flex" justifyContent="center">
            <AdmBox mr={1.5}>
              <AdmButton
                component={Link}
                href="https://twitter.com/intent/tweet?url=https://www.creative-tim.com/product/vision-ui-dashboard-react&text=Check%20Vision%20UI%20Dashboard%20made%20by%20@simmmple_web%20and%20@CreativeTim%20#webdesign%20#dashboard%20#react"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </AdmButton>
            </AdmBox>
            <AdmButton
              component={Link}
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/vision-ui-dashboard-react"
              target="_blank"
              rel="noreferrer"
              color="dark"
            >
              <FacebookIcon />
              &nbsp; Share
            </AdmButton>
          </AdmBox>
        </AdmBox>
      </AdmBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
