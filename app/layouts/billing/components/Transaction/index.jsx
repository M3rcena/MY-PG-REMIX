import PropTypes from "prop-types";

import Icon from "@mui/material/Icon";

import AdmBox from "../../../../components/AdmBox";
import AdmTypography from "../../../../components/AdmTypography";
import AdmButton from "../../../../components/AdmButton";

function Transaction({ color, icon, name, description, value }) {
  return (
    <AdmBox key={name} component="li" py={1} pr={2} mb={1}>
      <AdmBox display="flex" justifyContent="space-between" alignItems="center">
        <AdmBox display="flex" alignItems="center">
          <AdmBox mr={2}>
            <AdmButton
              variant="outlined"
              color={color}
              sx={{ fontWeight: "bold", width: "35px", height: "35px" }}
              size="small"
              iconOnly
              circular
            >
              <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon>
            </AdmButton>
          </AdmBox>
          <AdmBox display="flex" flexDirection="column">
            <AdmTypography variant="button" color="white" fontWeight="medium" gutterBottom>
              {name}
            </AdmTypography>
            <AdmTypography variant="caption" color="text">
              {description}
            </AdmTypography>
          </AdmBox>
        </AdmBox>
        <AdmTypography
          variant="button"
          color={color}
          fontWeight="medium"
          sx={({ breakpoints }) => ({
            [breakpoints.down("lg")]: {
              minWidth: "75px",
              ml: "12px",
            },
          })}
        >
          {value}
        </AdmTypography>
      </AdmBox>
    </AdmBox>
  );
}

Transaction.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
  ]).isRequired,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Transaction;
