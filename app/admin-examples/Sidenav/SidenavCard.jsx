// @mui material components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

import AdmButton from "remix/components/AdmButton";
import AdmBox from "remix/omponents/AdmBox";
import AdmTypography from "remix/components/AdmTypography";

// Custom styles for the SidenavCard
import { card, cardContent, cardIconBox, cardIcon } from "remix/admin-examples/Sidenav/styles/sidenavCard";

import { useMyPGController } from "context";

function SidenavCard({ color, ...rest }) {
  const [controller] = useMyPGController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
        <AdmBox
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <Icon fontSize="medium" sx={(theme) => cardIcon(theme, { color })}>
            star
          </Icon>
        </AdmBox>
        <AdmBox lineHeight={1}>
          <AdmTypography variant="h6" color="white">
            Need help?
          </AdmTypography>
          <AdmBox mb={1.825} mt={-1}>
            <AdmTypography variant="caption" color="white" fontWeight="regular">
              Please check our docs
            </AdmTypography>
          </AdmBox>
          <AdmButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/vision-ui-dashboard/"
            target="_blank"
            rel="noreferrer"
            size="small"
            // sx={{ color: "white !important", background: "red" }}
            sx={({ palette: { gradients, white }, functions: { linearGradient } }) => ({
              color: `${white.main} !important`,
              background: linearGradient(
                gradients.cardDark.main,
                gradients.cardDark.state,
                gradients.cardDark.deg
              ),
              "&:hover": {
                background: linearGradient(
                  gradients.cardDark.main,
                  gradients.cardDark.state,
                  gradients.cardDark.deg
                ),
              },
            })}
            fullWidth
          >
            DOCUMENTATION
          </AdmButton>
        </AdmBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;