import AdmBox from "components/AdmBox";
import AdmTypography from "components/AdmTypography";

function Footer() {
  return (
    <AdmBox
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      direction="row"
      component="footer"
      py={2}
      pb={0}
    >
      <AdmBox item xs={12} sx={{ textAlign: "center" }}>
        <AdmTypography
          variant="button"
          sx={{ textAlign: "center", fontWeight: "400 !important" }}
          color="white"
        >
          @ 2021, Made with ❤️&nbsp;&nbsp;&nbsp; by{" "}
          <AdmTypography
            component="a"
            variant="button"
            href="https://simmmple.com/"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
            mr="2px"
          >
            Simmmple
          </AdmTypography>
          &
          <AdmTypography
            ml="2px"
            mr="2px"
            component="a"
            variant="button"
            href="https://www.creative-tim.com/"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
          >
            Creative Tim
          </AdmTypography>
          for a better web
        </AdmTypography>
      </AdmBox>
      <AdmBox item xs={10}>
        <AdmBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
          <AdmBox mr={{ xs: "20px", lg: "46px" }}>
            <AdmTypography
              component="a"
              href="https://www.creative-tim.com/templates"
              variant="body2"
              color="white"
            >
              Marketplace
            </AdmTypography>
          </AdmBox>
          <AdmBox mr={{ xs: "20px", lg: "46px" }}>
            <AdmTypography
              component="a"
              href="https://www.creative-tim.com/blog/"
              variant="body2"
              color="white"
            >
              Blog
            </AdmTypography>
          </AdmBox>
          <AdmBox>
            <AdmTypography
              component="a"
              href="https://www.creative-tim.com/license"
              variant="body2"
              color="white"
            >
              License
            </AdmTypography>
          </AdmBox>
        </AdmBox>
      </AdmBox>
    </AdmBox>
  );
}

export default Footer;
