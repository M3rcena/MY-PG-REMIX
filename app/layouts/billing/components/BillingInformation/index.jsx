import Card from "@mui/material/Card";

import AdmBox from "#app/components/AdmBox";
import AdmTypography from "#app/components/AdmTypography";

import Bill from "#app/layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <AdmBox>
        <AdmTypography variant="lg" color="white" fontWeight="bold">
          Billing Information
        </AdmTypography>
      </AdmBox>
      <AdmBox>
        <AdmBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Bill
            name="lucas harper"
            company="stone tech zone"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
        </AdmBox>
      </AdmBox>
    </Card>
  );
}

export default BillingInformation;
