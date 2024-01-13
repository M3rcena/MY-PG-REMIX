import Tooltip from "@mui/material/Tooltip";

import AdmBox from "../../../../components/AdmBox";
import AdmTypography from "../../../../components/AdmTypography";
import AdmAvatar from "../../../../components/AdmAvatar";
import AdmProgress from "../../../../components/AdmProgress";

import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import avatar1 from "../../../../assets/admin-images/avatar1.png";
import avatar2 from "../../../../assets/admin-images/avatar2.png";
import avatar3 from "../../../../assets/admin-images/avatar3.png";
import avatar4 from "../../../../assets/admin-images/avatar4.png";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <AdmAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "companies", align: "left" },
      { name: "members", align: "left" },
      { name: "budget", align: "center" },
      { name: "completion", align: "center" },
    ],

    rows: [
      {
        companies: (
          <AdmBox display="flex" alignItems="center">
            <AdobeXD size="20px" />
            <AdmTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Chakra Vision UI Version
            </AdmTypography>
          </AdmBox>
        ),
        members: (
          <AdmBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar2, "Romina Hadid"],
              [avatar3, "Alexander Smith"],
              [avatar4, "Jessica Doe"],
            ])}
          </AdmBox>
        ),
        budget: (
          <AdmTypography variant="button" color="white" fontWeight="bold">
            $14,000
          </AdmTypography>
        ),
        completion: (
          <AdmBox width="8rem" textAlign="left">
            <AdmTypography color="white" variant="button" fontWeight="bold">
              60%
            </AdmTypography>
            <AdmProgress value={60} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </AdmBox>
        ),
      },
      {
        companies: (
          <AdmBox display="flex" alignItems="center">
            <Atlassian size="20px" />
            <AdmTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Add Progress Track
            </AdmTypography>
          </AdmBox>
        ),
        members: (
          <AdmBox display="flex" py={1}>
            {avatars([
              [avatar2, "Romina Hadid"],
              [avatar4, "Jessica Doe"],
            ])}
          </AdmBox>
        ),
        budget: (
          <AdmTypography variant="button" color="white" fontWeight="bold">
            $3,000
          </AdmTypography>
        ),
        completion: (
          <AdmBox width="8rem" textAlign="left">
            <AdmTypography color="white" variant="button" fontWeight="bold">
              10%
            </AdmTypography>
            <AdmProgress value={10} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </AdmBox>
        ),
      },
      {
        companies: (
          <AdmBox display="flex" alignItems="center">
            <Slack size="20px" />
            <AdmTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Fix Platform Errors
            </AdmTypography>
          </AdmBox>
        ),
        members: (
          <AdmBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar3, "Alexander Smith"],
            ])}
          </AdmBox>
        ),
        budget: (
          <AdmTypography variant="button" color="white" fontWeight="bold">
            Not set
          </AdmTypography>
        ),
        completion: (
          <AdmBox width="8rem" textAlign="left">
            <AdmTypography color="white" variant="button" fontWeight="bold">
              100%
            </AdmTypography>
            <AdmProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </AdmBox>
        ),
      },
      {
        companies: (
          <AdmBox display="flex" alignItems="center">
            <Spotify size="20px" />
            <AdmTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Launch our Mobile App
            </AdmTypography>
          </AdmBox>
        ),
        members: (
          <AdmBox display="flex" py={1}>
            {avatars([
              [avatar4, "Jessica Doe"],
              [avatar3, "Alexander Smith"],
              [avatar2, "Romina Hadid"],
              [avatar1, "Ryan Tompson"],
            ])}
          </AdmBox>
        ),
        budget: (
          <AdmTypography variant="button" color="white" fontWeight="bold">
            $20,500
          </AdmTypography>
        ),
        completion: (
          <AdmBox width="8rem" textAlign="left">
            <AdmTypography color="white" variant="button" fontWeight="bold">
              100%
            </AdmTypography>
            <AdmProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </AdmBox>
        ),
      },
      {
        companies: (
          <AdmBox display="flex" alignItems="center">
            <Jira size="20px" />
            <AdmTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Add the New Pricing Page
            </AdmTypography>
          </AdmBox>
        ),
        members: (
          <AdmBox display="flex" py={1}>
            {avatars([[avatar4, "Jessica Doe"]])}
          </AdmBox>
        ),
        budget: (
          <AdmTypography variant="button" color="white" fontWeight="bold">
            $500
          </AdmTypography>
        ),
        completion: (
          <AdmBox width="8rem" textAlign="left">
            <AdmTypography color="white" variant="button" fontWeight="bold">
              25%
            </AdmTypography>
            <AdmProgress value={25} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </AdmBox>
        ),
      },
      {
        companies: (
          <AdmBox display="flex" alignItems="center">
            <Invision size="20px" />
            <AdmTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Redesign New Online Shop
            </AdmTypography>
          </AdmBox>
        ),
        members: (
          <AdmBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar4, "Jessica Doe"],
            ])}
          </AdmBox>
        ),
        budget: (
          <AdmTypography variant="button" color="white" fontWeight="bold">
            $2,000
          </AdmTypography>
        ),
        completion: (
          <AdmBox width="8rem" textAlign="left">
            <AdmTypography color="white" variant="button" fontWeight="bold">
              40%
            </AdmTypography>
            <AdmProgress value={40} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </AdmBox>
        ),
      },
    ],
  };
}
