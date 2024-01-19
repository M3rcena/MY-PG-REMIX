import Grid from "@mui/material/node/Grid/index.js";

import AdmBox from "#app/components/AdmBox";

import MasterCard from "#app/admin-examples/Cards/MasterCard";
import DashboardLayout from "#app/admin-examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "#app/admin-examples/Navbars/DashboardNavbar";
import Footer from "#app/admin-examples/Footer";

import PaymentMethod from "./components/PaymentMethod";
import Invoices from "./components/Invoices";
import BillingInformation from "./components/BillingInformation";
import Transactions from "./components/Transactions";
import CreditBalance from "./components/CreditBalance";

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <AdmBox mt={4}>
        <AdmBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7} xl={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MasterCard number={7812213908237916} valid="05/24" cvv="09X" />
                </Grid>
                <Grid item xs={12} md={12} xl={6}>
                  <CreditBalance />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={5} xl={4}>
              <Invoices />
            </Grid>
          </Grid>
        </AdmBox>
        <AdmBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </AdmBox>
      </AdmBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
