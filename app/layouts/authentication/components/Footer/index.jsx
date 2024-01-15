import Grid from "@mui/material/Grid";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import AdmBox from "../../../../components/AdmBox";
import AdmTypography from "../../../../components/AdmTypography";

function Footer() {
  return (
    <AdmBox
      component="footer"
      py={6}
      sx={({ breakpoints }) => ({
        maxWidth: "450px",
        [breakpoints.down("xl")]: {
          maxWidth: "400px",
        },
      })}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <AdmTypography
            variant="button"
            sx={{ textAlign: "center", fontWeight: "400 !important" }}
            color="text"
          >
            @ 2024 MyPG | My Playground
          </AdmTypography>
        </Grid>
        <Grid item xs={10}>
          <AdmBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <AdmBox mr={{ xs: "20px", lg: "46px" }}>
              <AdmTypography component="a" href="#" variant="body2" color="text">
                Marketplace
              </AdmTypography>
            </AdmBox>
            <AdmBox mr={{ xs: "20px", lg: "46px" }}>
              <AdmTypography component="a" href="#" variant="body2" color="text">
                Blog
              </AdmTypography>
            </AdmBox>
            <AdmBox>
              <AdmTypography component="a" href="#" variant="body2" color="text">
                License
              </AdmTypography>
            </AdmBox>
          </AdmBox>
        </Grid>
      </Grid>
    </AdmBox>
  );
}

export default Footer;
