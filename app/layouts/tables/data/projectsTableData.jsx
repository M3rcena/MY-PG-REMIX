import Icon from "@mui/material/node/Icon/index.js";

import AdmBox from "#app/components/AdmBox";
import AdmTypography from "#app/components/AdmTypography";
import AdmProgress from "#app/components/AdmProgress";

import AdobeXD from "#app/admin-examples/Icons/AdobeXD";
import Atlassian from "#app/admin-examples/Icons/Atlassian";
import Slack from "#app/admin-examples/Icons/Slack";
import Spotify from "#app/admin-examples/Icons/Spotify";
import Jira from "#app/admin-examples/Icons/Jira";
import Invision from "#app/admin-examples/Icons/Invision";

import logoSpotify from "#app/assets/admin-images/small-logos/logo-spotify.svg";
import logoInvesion from "#app/assets/admin-images/small-logos/logo-invision.svg";
import logoJira from "#app/assets/admin-images/small-logos/logo-jira.svg";
import logoSlack from "#app/assets/admin-images/small-logos/logo-slack.svg";
import logoWebDev from "#app/assets/admin-images/small-logos/logo-webdev.svg";
import logoXD from "#app/assets/admin-images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <AdmBox display="flex" flexDirection="column" alignItems="flex-start">
      <AdmTypography variant="button" color="white" fontWeight="medium" mb="4px">
        {value}%&nbsp;
      </AdmTypography>
      <AdmBox width="8rem">
        <AdmProgress value={value} color={color} sx={{ background: "#2D2E5F" }} label={false} />
      </AdmBox>
    </AdmBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

export default {
  columns: [
    { name: "project", align: "left" },
    { name: "budget", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      project: (
        <AdmBox display="flex" alignItems="center">
          <AdobeXD size="20px" />
          <AdmTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Chakra Vision UI Version
          </AdmTypography>
        </AdmBox>
      ),
      budget: (
        <AdmTypography variant="button" color="white" fontWeight="medium">
          $14,000
        </AdmTypography>
      ),
      status: (
        <AdmTypography variant="button" color="white" fontWeight="medium">
          Working
        </AdmTypography>
      ),
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      project: (
        <AdmBox display="flex" alignItems="center">
          <Atlassian size="20px" />
          <AdmTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Add Progress Track
          </AdmTypography>
        </AdmBox>
      ),
      budget: (
        <AdmTypography variant="button" color="white" fontWeight="medium">
          $3,000
        </AdmTypography>
      ),
      status: (
        <AdmTypography variant="button" color="white" fontWeight="medium">
          Done
        </AdmTypography>
      ),
      completion: <Completion value={100} color="info" />,
      action,
    },
    {
      project: (
        <AdmBox display="flex" alignItems="center">
          <Slack size="20px" />
          <AdmTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Fix Platform Errors
          </AdmTypography>
        </AdmBox>
      ),
      budget: (
        <AdmTypography variant="button" color="white" fontWeight="medium">
          Not set
        </AdmTypography>
      ),
      status: (
        <AdmTypography variant="button" color="white" fontWeight="medium">
          Canceled
        </AdmTypography>
      ),
      completion: <Completion value={30} color="info" />,
      action,
    },
    {
      project: (
        <AdmBox display="flex" alignItems="center">
          <Spotify size="20px" />
          <AdmTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Launch our Mobile App
          </AdmTypography>
        </AdmBox>
      ),
      budget: (
        <AdmTypography variant="button" color="white" fontWeight="medium">
          $32,000
        </AdmTypography>
      ),
      status: (
        <AdmTypography variant="button" color="white" fontWeight="medium">
          Canceled
        </AdmTypography>
      ),
      completion: <Completion value={0} color="info" />,
      action,
    },
    {
      project: (
        <AdmBox display="flex" alignItems="center">
          <Jira size="20px" />
          <AdmTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Add the New Pricing Page
          </AdmTypography>
        </AdmBox>
      ),
      budget: (
        <AdmTypography variant="button" color="white" fontWeight="medium">
          $2,300
        </AdmTypography>
      ),
      status: (
        <AdmTypography variant="button" color="white" fontWeight="medium">
          Done
        </AdmTypography>
      ),
      completion: <Completion value={100} color="info" />,
      action,
    },
  ],
};
