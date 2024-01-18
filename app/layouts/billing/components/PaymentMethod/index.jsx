import Card from "@mui/material/Card";
import Grid from "@mui/material/node/Grid/index.js";
import Icon from "@mui/material/node/Icon/index.js";
import Tooltip from "@mui/material/Tooltip";

import AdmBox from "~/components/AdmBox";
import AdmTypography from "~/components/AdmTypography";
import AdmButton from "~/components/AdmButton";

import borders from "~/assets/admin-theme/base/borders";

import colors from "~/assets/admin-theme/base/colors";

import Mastercard from "~/admin-examples/Icons/Mastercard";
import Visa from "~/admin-examples/Icons/Visa";

function PaymentMethod() {
  const { grey } = colors;

  return (
    <Card id="delete-account">
      <AdmBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
        <AdmTypography variant="lg" fontWeight="bold" color="white">
          Payment Method
        </AdmTypography>
        <AdmButton variant="contained" color="info">
          ADD NEW CARD
        </AdmButton>
      </AdmBox>
      <AdmBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <AdmBox
              border="2px solid"
              borderRadius="20px"
              borderColor={grey[600]}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="22px 20px"
            >
              <Mastercard width="21px" />
              <AdmTypography pl={2} variant="button" color="white" fontWeight="medium">
                7812 2139 0823 XXXX
              </AdmTypography>
              <AdmBox ml="auto" lineHeight={0}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer", color: "#fff" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </AdmBox>
            </AdmBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <AdmBox
              border="2px solid"
              borderRadius="20px"
              borderColor={grey[600]}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="22px 20px"
            >
              <Visa width="25px" />
              <AdmTypography pl={2} variant="button" color="white" fontWeight="medium">
                7812 2139 0823 XXXX
              </AdmTypography>
              <AdmBox ml="auto" lineHeight={0}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer", color: "#fff" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </AdmBox>
            </AdmBox>
          </Grid>
        </Grid>
      </AdmBox>
    </Card>
  );
}

export default PaymentMethod;
