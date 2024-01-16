import React from "react";

import { Card, Icon } from "@mui/material";

import AdmBox from " components/AdmBox";
import AdmTypography from " components/AdmTypography";

import gif from " assets/admin-images/cardimgfree.png";

const WelcomeMark = () => {
  return (
    <Card sx={() => ({
      height: "340px",
      py: "32px",
      backgroundImage: `url(${gif})`,
      backgroundSize: "cover",
      backgroundPosition: "50%"
    })}>
      <AdmBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <AdmBox>
          <AdmTypography color="text" variant="button" fontWeight="regular" mb="12px">
            Welcome back,
          </AdmTypography>
          <AdmTypography color="white" variant="h3" fontWeight="bold" mb="18px">
            Mark Johnson
          </AdmTypography>
          <AdmTypography color="text" variant="h6" fontWeight="regular" mb="auto">
            Glad to see you again!
            <br /> Ask me anything.
          </AdmTypography>
        </AdmBox>
        <AdmTypography
          component="a"
          href="#"
          variant="button"
          color="white"
          fontWeight="regular"
          sx={{
            mr: "5px",
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",

            "& .material-icons-round": {
              fontSize: "1.125rem",
              transform: `translate(2px, -0.5px)`,
              transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
            },

            "&:hover .material-icons-round, &:focus  .material-icons-round": {
              transform: `translate(6px, -0.5px)`,
            },
          }}
        >
          Tap to record
          <Icon sx={{ fontWeight: "bold", ml: "5px" }}>arrow_forward</Icon>
        </AdmTypography>
      </AdmBox>
    </Card>
  );
};

export default WelcomeMark;
