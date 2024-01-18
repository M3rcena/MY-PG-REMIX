import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/node/Icon/index.js";

import AdmBox from "~/components/AdmBox";
import AdmTypography from "~/components/AdmTypography";

function DefaultNavbarLink({ icon, name, route }) {
  return (
    <>
      <AdmBox
        component={Link}
        to={route}
        mx={1}
        p={1}
        display="flex"
        alignItems="center"
        sx={{ cursor: "pointer", userSelect: "none" }}
      >
        <Icon
          sx={{
            color: ({ palette: { white } }) => white.main,
            verticalAlign: "middle",
          }}
        >
          {icon}
        </Icon>
        <AdmTypography
          variant="button"
          fontWeight="regular"
          color="white"
          textTransform="capitalize"
          sx={{ width: "100%", lineHeight: 0 }}
        >
          &nbsp;{name}
        </AdmTypography>
      </AdmBox>
    </>
  );
}

// Typechecking props for the DefaultNavbarLink
DefaultNavbarLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default DefaultNavbarLink;
