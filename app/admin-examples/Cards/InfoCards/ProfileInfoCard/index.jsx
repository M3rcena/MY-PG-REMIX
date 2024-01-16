import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import AdmBox from "remix/components/AdmBox";
import AdmTypography from "remix/components/AdmTypography";

import colors from "remix/assets/admin-theme/base/colors";
import typography from "remix/assets/admin-theme/base/typography";

function ProfileInfoCard({ title, description, info, social }) {
  const labels = [];
  const values = [];
  const { size } = typography;

  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  Object.values(info).forEach((el) => values.push(el));

  const renderItems = labels.map((label, key) => (
    <AdmBox key={label} display="flex" py={1} pr={2}>
      <AdmTypography variant="button" color="text" fontWeight="regular" textTransform="capitalize">
        {label}: &nbsp;
      </AdmTypography>
      <AdmTypography variant="button" fontWeight="regular" color="white">
        &nbsp;{values[key]}
      </AdmTypography>
    </AdmBox>
  ));

  const renderSocial = social.map(({ link, icon, color }) => (
    <AdmBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color="white"
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </AdmBox>
  ));

  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <AdmBox display="flex" mb="14px" justifyContent="space-between" alignItems="center">
        <AdmTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          {title}
        </AdmTypography>
      </AdmBox>
      <AdmBox>
        <AdmBox mb={2} lineHeight={1}>
          <AdmTypography variant="button" color="text" fontWeight="regular">
            {description}
          </AdmTypography>
        </AdmBox>
        <AdmBox opacity={0.3}>
          <Divider />
        </AdmBox>
        <AdmBox>
          {renderItems}
          <AdmBox display="flex" py={1} pr={2} color="white">
            <AdmTypography
              variant="button"
              fontWeight="regular"
              color="text"
              textTransform="capitalize"
            >
              social: &nbsp;
            </AdmTypography>
            {renderSocial}
          </AdmBox>
        </AdmBox>
      </AdmBox>
    </Card>
  );
}

ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfileInfoCard;
