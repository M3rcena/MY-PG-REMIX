// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

import AdmBox from "#app/components/AdmBox";
import AdmTypography from "#app/components/AdmTypography";

// Timeline context
import { TimelineProvider } from "#app/admin-examples/Timeline/context";

function TimelineList({ title, dark, children }) {
  return (
    <TimelineProvider value={dark}>
      <Card>
        <AdmBox bgColor={dark ? "dark" : "white"} variant="gradient">
          <AdmBox pt={3} px={3}>
            <AdmTypography variant="h6" fontWeight="medium" color={dark ? "white" : "dark"}>
              {title}
            </AdmTypography>
          </AdmBox>
          <AdmBox p={2}>{children}</AdmBox>
        </AdmBox>
      </Card>
    </TimelineProvider>
  );
}

// Setting default values for the props of TimelineList
TimelineList.defaultProps = {
  dark: false,
};

// Typechecking props for the TimelineList
TimelineList.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TimelineList;
