import PropTypes from "prop-types";

import AdmBox from " components/AdmBox";
import AdmTypography from " components/AdmTypography";

import PageLayout from " admin-examples/LayoutContainers/PageLayout";

import Footer from " layouts/authentication/components/Footer";

import colors from " assets/admin-theme/base/colors";

import tripleLinearGradient from " assets/admin-theme/functions/tripleLinearGradient";

function CoverLayout({
  color,
  header,
  title,
  description,
  motto,
  premotto,
  image,
  top,
  cardContent,
  children,
}) {
  const { gradients } = colors;
  return (
    <PageLayout
      background={tripleLinearGradient(
        gradients.cover.main,
        gradients.cover.state,
        gradients.cover.stateSecondary,
        gradients.cover.angle
      )}
    >
      <AdmBox
        height="100%"
        width="50vw"
        display={{ xs: "none", md: "block" }}
        position="absolute"
        top={0}
        left={0}
        sx={({ breakpoints }) => ({
          overflow: "hidden",
          [breakpoints.down("xl")]: {
            mr: "100px",
          },
          [breakpoints.down("lg")]: {
            display: "none",
          },
        })}
        zIndex={0}
      >
        <AdmBox
          height="100%"
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <AdmTypography
            textAlign={cardContent ? "center" : "start"}
            variant="subtitle1"
            fontWeight="medium"
            color="white"
            mb="10px"
            sx={{ mb: 1, letterSpacing: "8px" }}
          >
            {premotto}
          </AdmTypography>
          <AdmTypography
            textAlign={cardContent ? "center" : "start"}
            variant="h2"
            fontWeight="bold"
            color="logo"
            mb="10px"
            textGradient
            sx={{ letterSpacing: "8px" }}
          >
            {motto}
          </AdmTypography>
        </AdmBox>
      </AdmBox>
      <AdmBox
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          alignItems: "center",
          maxWidth: "1044px",
          minHeight: "75vh",
          margin: "0 auto",
        }}
      >
        <AdmBox
          mt={top}
          ml="auto !important"
          sx={({ breakpoints }) => ({
            [breakpoints.down("xl")]: {
              mr: cardContent ? "50px" : "100px",
            },
            [breakpoints.down("lg")]: {
              mr: "auto",
              ml: "auto !important",
            },
            [breakpoints.down("md")]: {
              maxWidth: "90%",
              pr: "7px",
              pl: "10px !important",
            },
          })}
        >
          <AdmBox pt={3} px={3} mx="auto !important" maxWidth={cardContent ? "400px" : "350px"}>
            {!header ? (
              <>
                <AdmBox mb="35px">
                  <AdmTypography
                    textAlign={cardContent ? "center" : "start"}
                    variant="h3"
                    fontWeight="bold"
                    color={color}
                    mb="10px"
                  >
                    {title}
                  </AdmTypography>
                  <AdmTypography
                    textAlign={cardContent ? "center !important" : "start !important"}
                    mx="auto"
                    sx={({ typography: { size }, functions: { pxToRem } }) => ({
                      fontWeight: "regular",
                      fontSize: size.sm,
                    })}
                    color="white"
                  >
                    {description}
                  </AdmTypography>
                </AdmBox>
              </>
            ) : (
              header
            )}
          </AdmBox>
          <AdmBox
            px={3}
            mb="50px"
            mx="auto"
            ml="auto !important"
            sx={({ breakpoints }) => ({
              mt: cardContent ? "60px" : { top },
              maxWidth: cardContent ? "450px" : "350px",
              [breakpoints.down("xl")]: {
                mr: cardContent ? "0px" : "100px",
              },
              [breakpoints.only("lg")]: {
                mr: "auto",
                ml: "auto !important",
              },
              [breakpoints.down("lg")]: {
                mr: "auto",
                ml: "auto !important",
              },
              [breakpoints.down("md")]: {
                mr: cardContent ? "auto !important" : "unset",
                pr: "7px",
                pl: cardContent ? "0px !important" : "10px !important",
              },
            })}
          >
            {children}
          </AdmBox>
          <Footer />
        </AdmBox>
      </AdmBox>
    </PageLayout>
  );
}

CoverLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20,
};

CoverLayout.propTypes = {
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
