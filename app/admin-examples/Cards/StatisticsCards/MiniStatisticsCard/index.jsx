import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import Grid from "@mui/material/node/Grid/index.js";
import Icon from "@mui/material/node/Icon/index.js";

import AdmBox from "#app/components/AdmBox";
import AdmTypography from "#app/components/AdmTypography";
import colors from "#app/assets/admin-theme/base/colors";

function MiniStatisticsCard({ bgColor, title, count, percentage, icon, direction }) {
  const { info } = colors;

  return (
    <Card sx={{ padding: "17px" }}>
      <AdmBox>
        <AdmBox>
          <Grid container alignItems="center">
            {direction === "left" ? (
              <Grid item>
                <AdmBox
                  bgColor={info}
                  color="#fff"
                  width="3rem"
                  height="3rem"
                  borderRadius="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  {icon.component}
                </AdmBox>
              </Grid>
            ) : null}
            <Grid item xs={8}>
              <AdmBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                <AdmTypography
                  variant="caption"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                  {title.text}
                </AdmTypography>
                <AdmTypography variant="subtitle1" fontWeight="bold" color="white">
                  {count}{" "}
                  <AdmTypography variant="button" color={percentage.color} fontWeight="bold">
                    {percentage.text}
                  </AdmTypography>
                </AdmTypography>
              </AdmBox>
            </Grid>
            {direction === "right" ? (
              <Grid item xs={4}>
                <AdmBox
                  bgColor="#0075FF"
                  color="white"
                  width="3rem"
                  height="3rem"
                  marginLeft="auto"
                  borderRadius="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  <Icon fontSize="small" color="inherit">
                    {icon.component}
                  </Icon>
                </AdmBox>
              </Grid>
            ) : null}
          </Grid>
        </AdmBox>
      </AdmBox>
    </Card>
  );
}

// Setting default values for the props of MiniStatisticsCard
MiniStatisticsCard.defaultProps = {
  bgColor: "white",
  title: {
    fontWeight: "medium",
    text: "",
  },
  percentage: {
    color: "success",
    text: "",
  },
  direction: "right",
};

// Typechecking props for the MiniStatisticsCard
MiniStatisticsCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  title: PropTypes.PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
};

export default MiniStatisticsCard;
