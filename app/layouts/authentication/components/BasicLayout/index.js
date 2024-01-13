import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";

import AdmBox from "../../../../components/AdmBox";
import AdmTypography from "../../../../components/AdmTypography";

import PageLayout from "examples/LayoutContainers/PageLayout";

import Footer from "layouts/authentication/components/Footer";

function BasicLayout({ title, description, image, children }) {
  return (
    <PageLayout>
      <AdmBox
        width="calc(100% - 2rem)"
        minHeight="50vh"
        borderRadius="lg"
        mx={2}
        my={2}
        pt={6}
        pb={28}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={4}>
            <AdmBox mt={6} mb={1}>
              <AdmTypography variant="h1" color="white" fontWeight="bold">
                {title}
              </AdmTypography>
            </AdmBox>
            <AdmBox mb={2}>
              <AdmTypography variant="body2" color="white" fontWeight="regular">
                {description}
              </AdmTypography>
            </AdmBox>
          </Grid>
        </Grid>
      </AdmBox>
      <AdmBox mt={{ xs: -26, lg: -24 }} px={1} width="calc(100% - 2rem)" mx="auto">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </AdmBox>
      <Footer />
    </PageLayout>
  );
}

BasicLayout.defaultProps = {
  title: "",
  description: "",
};

BasicLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
