import React from "react";

import { Card, Icon } from "@mui/material";

import welcome from "../../../../assets/admin-images/welcome-profile.png";

import AdmTypography from "../../../..components/AdmTypography/index";
import AdmBox from "../../../..components/AdmBox/index";

const Welcome = () => {
  return (
    <Card
      sx={({ breakpoints }) => ({
        background: `url(${welcome})`,
        backgroundSize: "cover",
        borderRadius: "20px",
        height: "100%",
        [breakpoints.only("xl")]: {
          gridArea: "1 / 1 / 2 / 2",
        },
      })}
    >
      <AdmBox display="flex" flexDirection="column" sx={{ height: "100%" }}>
        <AdmBox display="flex" flexDirection="column" mb="auto">
          <AdmTypography color="white" variant="h3" fontWeight="bold" mb="3px">
            Welcome back!
          </AdmTypography>
          <AdmTypography color="white" variant="button" fontWeight="regular">
            Nice to see you, Mark Johnson!
          </AdmTypography>
        </AdmBox>
        <AdmBox justifySelf="flex-end">
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
              justifySelf: "flex-end",
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
      </AdmBox>
    </Card>
  );
};

export default Welcome;
