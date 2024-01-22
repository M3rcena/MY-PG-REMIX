// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/node/Icon/index.js";

import AdmBox from "../../../components/AdmBox";
import AdmTypography from "../../../components/AdmTypography";
import AdmBadge from "../../../components/AdmBadge";

// Timeline context
import { useTimeline } from "../../../admin-examples/Timeline/context";

// Custom styles for the TimelineItem
import { timelineItem } from "../../../admin-examples/Timeline/TimelineItem/styles";

function TimelineItem({ color, icon, title, dateTime, description, badges, lastItem }) {
  const isDark = useTimeline();

  const renderBadges =
    badges.length > 0
      ? badges.map((badge, key) => {
          const badgeKey = `badge-${key}`;

          return (
            <AdmBox key={badgeKey} mr={key === badges.length - 1 ? 0 : 0.5}>
              <AdmBadge color={color} size="xs" badgeContent={badge} container />
            </AdmBox>
          );
        })
      : null;

  return (
    <AdmBox position="relative" mb="24px" sx={(theme) => timelineItem(theme, { color })}>
      <AdmBox
        width="1.625rem"
        height="1.625rem"
        borderRadius="50%"
        position="absolute"
        top="3.25%"
        left="-8px"
        zIndex={2}
      >
        {icon}
      </AdmBox>
      <AdmBox ml="30px" pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth="30rem">
        <AdmTypography variant="button" fontWeight="medium" color="white">
          {title}
        </AdmTypography>
        <AdmBox mt={0.5}>
          <AdmTypography variant="caption" fontWeight="medium" color="text">
            {dateTime}
          </AdmTypography>
        </AdmBox>
        <AdmBox mt={2} mb={1.5}>
          {description ? (
            <AdmTypography variant="button" fontWeight="regular" color="text">
              {description}
            </AdmTypography>
          ) : null}
        </AdmBox>
        {badges.length > 0 ? (
          <AdmBox display="flex" pb={lastItem ? 1 : 2}>
            {renderBadges}
          </AdmBox>
        ) : null}
      </AdmBox>
    </AdmBox>
  );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  badges: [],
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  lastItem: PropTypes.bool,
};

export default TimelineItem;
