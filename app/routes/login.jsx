import { useState } from "react";

import { Link } from "react-router-dom";

import AdmBox from " components/AdmBox";
import AdmTypography from " components/AdmTypography";
import AdmInput from " components/AdmInput";
import AdmButton from " components/AdmButton";
import AdmSwitch from " components/AdmSwitch";
import GradientBorder from " admin-examples/GradientBorder";

import radialGradient from " assets/admin-theme/functions/radialGradient";
import palette from " assets/admin-theme/base/colors";
import borders from " assets/admin-theme/base/borders";

import CoverLayout from " layouts/authentication/components/CoverLayout";

import bgSignIn from " assets/admin-images/signInImage.png";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout
      title="Nice to see you!"
      color="white"
      description="Enter your email and password to sign in"
      premotto="INSPIRED BY THE FUTURE:"
      motto="THE VISION UI DASHBOARD"
      image={bgSignIn}
    >
      <AdmBox component="form" role="form">
        <AdmBox mb={2}>
          <AdmBox mb={1} ml={0.5}>
            <AdmTypography component="label" variant="button" color="white" fontWeight="medium">
              Email
            </AdmTypography>
          </AdmBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <AdmInput type="email" placeholder="Your email..." fontWeight="500" />
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
            SIGN IN
          </AdmButton>
        </AdmBox>
        <AdmBox mt={3} textAlign="center">
          <AdmTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <AdmTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="white"
              fontWeight="medium"
            >
              Sign up
            </AdmTypography>
          </AdmTypography>
        </AdmBox>
      </AdmBox>
    </CoverLayout>
  );
}

export default SignIn;
