import Grid from "@mui/material/node/Grid/index.js";
import Icon from "@mui/material/node/Icon/index.js";
import { Card, LinearProgress, Stack } from "@mui/material";

import AdmBox from "#app/components/AdmBox";
import AdmTypography from "#app/components/AdmTypography";
import AdmProgress from "#app/components/AdmProgress";

import DashboardLayout from "#app/admin-examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "#app/admin-examples/Navbars/DashboardNavbar";
import Footer from "#app/admin-examples/Footer";
import MiniStatisticsCard from "#app/admin-examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "#app/assets/admin-theme/functions/linearGradient";

import typography from "#app/assets/admin-theme/base/typography";
import colors from "#app/assets/admin-theme/base/colors";

import WelcomeMark from "./components/WelcomeMark";
import Projects from "./components/Projects";
import OrderOverview from "./components/OrderOverview";
import SatisfactionRate from "./components/SatisfactionRate";
import ReferralTracking from "./components/ReferralTracking";

import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

import LineChart from "#app/admin-examples/Charts/LineCharts/LineChart";
import BarChart from "#app/admin-examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "./dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "./dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "./dashboard/data/barChartData";
import { barChartOptionsDashboard } from "./dashboard/data/barChartOptions";

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <AdmBox py={3}>
        <AdmBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's money", fontWeight: "regular" }}
                count="$53,000"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: <IoWallet size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's users" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "new clients" }}
                count="+3,462"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: <IoDocumentText size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "total sales" }}
                count="$103,430"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "info", component: <FaShoppingCart size="20px" color="white" /> }}
              />
            </Grid>
          </Grid>
        </AdmBox>
        <AdmBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={5}>
              <WelcomeMark />
            </Grid>
            <Grid item xs={12} lg={6} xl={3}>
              <SatisfactionRate />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <ReferralTracking />
            </Grid>
          </Grid>
        </AdmBox>
        <AdmBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} xl={7}>
              <Card>
                <AdmBox sx={{ height: "100%" }}>
                  <AdmTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Sales Overview
                  </AdmTypography>
                  <AdmBox display="flex" alignItems="center" mb="40px">
                    <AdmTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <AdmTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </AdmTypography>
                    </AdmTypography>
                  </AdmBox>
                  <AdmBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboard}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </AdmBox>
                </AdmBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={5}>
              <Card>
                <AdmBox>
                  <AdmBox
                    mb="24px"
                    height="220px"
                    sx={{
                      background: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: "20px",
                    }}
                  >
                    <BarChart
                      barChartData={barChartDataDashboard}
                      barChartOptions={barChartOptionsDashboard}
                    />
                  </AdmBox>
                  <AdmTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Active Users
                  </AdmTypography>
                  <AdmBox display="flex" alignItems="center" mb="40px">
                    <AdmTypography variant="button" color="success" fontWeight="bold">
                      (+23){" "}
                      <AdmTypography variant="button" color="text" fontWeight="regular">
                        than last week
                      </AdmTypography>
                    </AdmTypography>
                  </AdmBox>
                  <Grid container spacing="50px">
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <AdmBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoWallet color="#fff" size="12px" />
                        </AdmBox>
                        <AdmTypography color="text" variant="button" fontWeight="medium">
                          Users
                        </AdmTypography>
                      </Stack>
                      <AdmTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        32,984
                      </AdmTypography>
                      <AdmProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <AdmBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoIosRocket color="#fff" size="12px" />
                        </AdmBox>
                        <AdmTypography color="text" variant="button" fontWeight="medium">
                          Clicks
                        </AdmTypography>
                      </Stack>
                      <AdmTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,42M
                      </AdmTypography>
                      <AdmProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <AdmBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaShoppingCart color="#fff" size="12px" />
                        </AdmBox>
                        <AdmTypography color="text" variant="button" fontWeight="medium">
                          Sales
                        </AdmTypography>
                      </Stack>
                      <AdmTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,400$
                      </AdmTypography>
                      <AdmProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <AdmBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoBuild color="#fff" size="12px" />
                        </AdmBox>
                        <AdmTypography color="text" variant="button" fontWeight="medium">
                          Items
                        </AdmTypography>
                      </Stack>
                      <AdmTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        320
                      </AdmTypography>
                      <AdmProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                  </Grid>
                </AdmBox>
              </Card>
            </Grid>
          </Grid>
        </AdmBox>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </AdmBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
