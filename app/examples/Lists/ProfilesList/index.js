import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import Card from "@mui/material/Card";

import AdmBox from "components/AdmBox";
import AdmTypography from "components/AdmTypography";
import AdmAvatar from "components/AdmAvatar";
import AdmButton from "components/AdmButton";

function ProfilesList({ title, profiles }) {
  const renderProfiles = profiles.map(({ image, name, description, action }) => (
    <AdmBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <AdmBox mr={2}>
        <AdmAvatar src={image} alt="something here" variant="rounded" shadow="md" />
      </AdmBox>
      <AdmBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <AdmTypography variant="button" fontWeight="medium">
          {name}
        </AdmTypography>
        <AdmTypography variant="caption" color="text">
          {description}
        </AdmTypography>
      </AdmBox>
      <AdmBox ml="auto">
        {action.type === "internal" ? (
          <AdmButton component={Link} to={action.route} variant="text" color="info">
            {action.label}
          </AdmButton>
        ) : (
          <AdmButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </AdmButton>
        )}
      </AdmBox>
    </AdmBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <AdmBox pt={2} px={2}>
        <AdmTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </AdmTypography>
      </AdmBox>
      <AdmBox p={2}>
        <AdmBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </AdmBox>
      </AdmBox>
    </Card>
  );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfilesList;
