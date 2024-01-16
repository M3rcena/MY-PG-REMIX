import Card from "@mui/material/Card";

import AdmBox from "remix/components/AdmBox";
import AdmTypography from "remix/components/AdmTypography";
import AdmButton from "remix/components/AdmButton";

// Billing page components
import Invoice from "remix/layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card id="delete-account" sx={{ height: "100%" }}>
      <AdmBox mb="28px" display="flex" justifyContent="space-between" alignItems="center">
        <AdmTypography variant="h6" fontWeight="medium" color="white">
          Invoices
        </AdmTypography>
        <AdmButton variant="contained" color="info" size="small">
          VIEW ALL
        </AdmButton>
      </AdmBox>
      <AdmBox>
        <AdmBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2020" id="#MS-415646" price="$180" />
          <Invoice date="February, 10, 2021" id="#RV-126749" price="$250" />
          <Invoice date="April, 05, 2020" id="#QW-103578" price="$120" />
          <Invoice date="June, 25, 2019" id="#MS-415646" price="$180" />
          <Invoice date="March, 01, 2019" id="#AR-803481" price="$300" noGutter />
        </AdmBox>
      </AdmBox>
    </Card>
  );
}

export default Invoices;
