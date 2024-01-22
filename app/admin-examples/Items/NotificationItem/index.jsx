import { forwardRef } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/node/Icon/index.js";

import AdmBox from "../../../components/AdmBox";
import AdmTypography from "../../../components/AdmTypography";

// custom styles for the NotificationItem
import { menuItem, menuImage } from "../../../admin-examples/Items/NotificationItem/styles";

const NotificationItem = forwardRef(({ color, image, title, date, ...rest }, ref) => (
  <MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
    <AdmBox
      width="2.25rem"
      height="2.25rem"
      mt={0.25}
      mr={2}
      mb={0.25}
      borderRadius="lg"
      sx={(theme) => menuImage(theme, { color })}
    >
      {image}
    </AdmBox>
    <AdmBox>
      <AdmTypography variant="button" textTransform="capitalize" fontWeight="regular">
        <strong>{title[0]}</strong> {title[1]}
      </AdmTypography>
      <AdmTypography
        variant="caption"
        color="text"
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 0.5,
        }}
      >
        <AdmTypography variant="button" color="text">
          <Icon
            sx={{
              lineHeight: 1.2,
              mr: 0.5,
            }}
          >
            watch_later
          </Icon>
        </AdmTypography>
        {date}
      </AdmTypography>
    </AdmBox>
  </MenuItem>
));

// Setting default values for the props of NotificationItem
NotificationItem.defaultProps = {
  color: "dark",
};

// Typechecking props for the NotificationItem
NotificationItem.propTypes = {
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
  ]),
  image: PropTypes.node.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
};

export default NotificationItem;
