import { useState } from "react";

import { Link } from "react-router-dom";

import Icon from "@mui/material/node/Icon/index.js";
import IconButton from "@mui/material/node/Icon/index.jsButton";
import Stack from "@mui/material/Stack";

import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

import AdmBox from " components/AdmBox";
import AdmTypography from " components/AdmTypography";
import AdmInput from " components/AdmInput";
import AdmButton from " components/AdmButton";
import AdmSwitch from " components/AdmSwitch";
import GradientBorder from " admin-examples/GradientBorder";

import radialGradient from " assets/admin-theme/functions/radialGradient";
import rgba from " assets/admin-theme/functions/rgba";
import palette from " assets/admin-theme/base/colors";
import borders from " assets/admin-theme/base/borders";

import CoverLayout from " components/CoverLayout";

import bgSignIn from " assets/admin-images/signUpImage.png";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout
      title="Welcome!"
      color="white"
      description="Use these awesome forms to login or create new account in your project for free."
      image={bgSignIn}
      premotto="INSPIRED BY THE FUTURE:"
      motto="THE VISION UI DASHBOARD"
      cardContent
    >
      <GradientBorder borderRadius={borders.borderRadius.form} minWidth="100%" maxWidth="100%">
        <AdmBox
          component="form"
          role="form"
          borderRadius="inherit"
          p="45px"
          sx={({ palette: { secondary } }) => ({
            backgroundColor: secondary.focus,
          })}
        >
          <AdmTypography
            color="white"
            fontWeight="bold"
            textAlign="center"
            mb="24px"
            sx={({ typography: { size } }) => ({
              fontSize: size.lg,
            })}
          >
            Register with
          </AdmTypography>
          <Stack mb="25px" justifyContent="center" alignItems="center" direction="row" spacing={2}>
            <GradientBorder borderRadius="xl">
              <a href="#">
                <IconButton
                  transition="all .25s ease"
                  justify="center"
                  align="center"
                  bg="rgb(19,21,54)"
                  borderradius="15px"
                  sx={({ palette: { secondary }, borders: { borderRadius } }) => ({
                    borderRadius: borderRadius.xl,
                    padding: "25px",
                    backgroundColor: secondary.focus,
                    "&:hover": {
                      backgroundColor: rgba(secondary.focus, 0.9),
                    },
                  })}
                >
                  <Icon
                    as={FaFacebook}
                    w="30px"
                    h="30px"
                    sx={({ palette: { white } }) => ({
                      color: white.focus,
                    })}
                  />
                </IconButton>
              </a>
            </GradientBorder>
            <GradientBorder borderRadius="xl">
              <a href="#">
                <IconButton
                  transition="all .25s ease"
                  justify="center"
                  align="center"
                  bg="rgb(19,21,54)"
                  borderradius="15px"
                  sx={({ palette: { secondary }, borders: { borderRadius } }) => ({
                    borderRadius: borderRadius.xl,
                    padding: "25px",
                    backgroundColor: secondary.focus,
                    "&:hover": {
                      backgroundColor: rgba(secondary.focus, 0.9),
                    },
                  })}
                >
                  <Icon
                    as={FaApple}
                    w="30px"
                    h="30px"
                    sx={({ palette: { white } }) => ({
                      color: white.focus,
                    })}
                  />
                </IconButton>
              </a>
            </GradientBorder>
            <GradientBorder borderRadius="xl">
              <a href="#">
                <IconButton
                  transition="all .25s ease"
                  justify="center"
                  align="center"
                  bg="rgb(19,21,54)"
                  borderradius="15px"
                  sx={({ palette: { secondary }, borders: { borderRadius } }) => ({
                    borderRadius: borderRadius.xl,
                    padding: "25px",
                    backgroundColor: secondary.focus,
                    "&:hover": {
                      backgroundColor: rgba(secondary.focus, 0.9),
                    },
                  })}
                >
                  <Icon
                    as={FaGoogle}
                    w="30px"
                    h="30px"
                    sx={({ palette: { white } }) => ({
                      color: white.focus,
                    })}
                  />
                </IconButton>
              </a>
            </GradientBorder>
          </Stack>
          <AdmTypography
            color="text"
            fontWeight="bold"
            textAlign="center"
            mb="14px"
            sx={({ typography: { size } }) => ({ fontSize: size.lg })}
          >
            or
          </AdmTypography>
          <AdmBox mb={2}>
            <AdmBox mb={1} ml={0.5}>
              <AdmTypography component="label" variant="button" color="white" fontWeight="medium">
                Name
              </AdmTypography>
            </AdmBox>
            <GradientBorder
              minWidth="100%"
              borderRadius={borders.borderRadius.lg}
              padding="1px"
              backgroundImage={radialGradient(
                palette.gradients.borderLight.main,
                palette.gradients.borderLight.state,
                palette.gradients.borderLight.angle
              )}
            >
              <AdmInput
                placeholder="Your full name..."
                sx={({ typography: { size } }) => ({
                  fontSize: size.sm,
                })}
              />
            </GradientBorder>
          </AdmBox>
          <AdmBox mb={2}>
            <AdmBox mb={1} ml={0.5}>
              <AdmTypography component="label" variant="button" color="white" fontWeight="medium">
                Email
              </AdmTypography>
            </AdmBox>
            <GradientBorder
              minWidth="100%"
              borderRadius={borders.borderRadius.lg}
              padding="1px"
              backgroundImage={radialGradient(
                palette.gradients.borderLight.main,
                palette.gradients.borderLight.state,
                palette.gradients.borderLight.angle
              )}
            >
              <AdmInput
                type="email"
                placeholder="Your email..."
                sx={({ typography: { size } }) => ({
                  fontSize: size.sm,
                })}
              />
            </GradientBorder>
          </AdmBox>
          <AdmBox mb={2}>
            <AdmBox mb={1} ml={0.5}>
              <AdmTypography component="label" variant="button" color="white" fontWeight="medium">
                Password
              </AdmTypography>
            </AdmBox>
            <GradientBorder
              minWidth="100%"
              borderRadius={borders.borderRadius.lg}
              padding="1px"
              backgroundImage={radialGradient(
                palette.gradients.borderLight.main,
                palette.gradients.borderLight.state,
                palette.gradients.borderLight.angle
              )}
            >
              <AdmInput
                type="password"
                placeholder="Your password..."
                sx={({ typography: { size } }) => ({
                  fontSize: size.sm,
                })}
              />
            </GradientBorder>
          </AdmBox>
          <AdmBox display="flex" alignItems="center">
            <AdmSwitch color="info" checked={rememberMe} onChange={handleSetRememberMe} />
            <AdmTypography
              variant="caption"
              color="white"
              fontWeight="medium"
              onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Remember me
            </AdmTypography>
          </AdmBox>
          <AdmBox mt={4} mb={1}>
            <AdmButton color="info" fullWidth>
              SIGN UP
            </AdmButton>
          </AdmBox>
          <AdmBox mt={3} textAlign="center">
            <AdmTypography variant="button" color="text" fontWeight="regular">
              Already have an account?{" "}
              <AdmTypography
                component={Link}
                to="/authentication/sign-in"
                variant="button"
                color="white"
                fontWeight="medium"
              >
                Sign in
              </AdmTypography>
            </AdmTypography>
          </AdmBox>
        </AdmBox>
      </GradientBorder>
    </CoverLayout>
  );
}

export default SignIn;
