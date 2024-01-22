import FacebookIcon from "@mui/icons-material/Facebook.js";
import InstagramIcon from "@mui/icons-material/Instagram.js";
import TwitterIcon from "@mui/icons-material/Twitter.js";
import Card from "@mui/material/Card";
import Grid from "@mui/material/node/Grid/index.js";
import team1 from "../../assets/admin-images/avatar1.png";
import team2 from "../../assets/admin-images/avatar2.png";
import team3 from "../../assets/admin-images/avatar3.png";
import team4 from "../../assets/admin-images/avatar4.png";

import profile1 from "../../assets/admin-images/profile-1.png";
import profile2 from "../../assets/admin-images/profile-2.png";
import profile3 from "../../assets/admin-images/profile-3.png";

import AdmBox from "../../components/AdmBox";
import AdmTypography from "../../components/AdmTypography";
import ProfileInfoCard from "../../admin-examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "../../admin-examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "../../admin-examples/Footer";

import DashboardLayout from "../../admin-examples/LayoutContainers/DashboardLayout";

import Header from "./components/Header";
import PlatformSettings from "./components/PlatformSettings";
import Welcome from "./components/Welcome/index";
import CarInformations from "./components/CarInformations";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <AdmBox mt={5} mb={3}>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
        >
          <Grid
            item
            xs={12}
            xl={4}
            xxl={3}
            sx={({ breakpoints }) => ({
              minHeight: "400px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2",
              },
            })}
          >
            <Welcome />
          </Grid>
          <Grid
            item
            xs={12}
            xl={5}
            xxl={6}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "2 / 1 / 3 / 3",
              },
            })}
          >
            <CarInformations />
          </Grid>
          <Grid
            item
            xs={12}
            xl={3}
            xxl={3}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "1 / 2 / 2 / 3",
              },
            })}
          >
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "Mark Johnson",
                mobile: "(44) 123 1234 123",
                email: "mark@simmmple.com",
                location: "United States",
              }}
              social={[
                {
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
            />
          </Grid>
        </Grid>
      </AdmBox>
      <Grid container spacing={3} mb="30px">
        <Grid item xs={12} xl={3} height="100%">
          <PlatformSettings />
        </Grid>
        <Grid item xs={12} xl={9}>
          <Card>
            <AdmBox display="flex" flexDirection="column" height="100%">
              <AdmBox display="flex" flexDirection="column" mb="24px">
                <AdmTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  Projects
                </AdmTypography>
                <AdmTypography color="text" variant="button" fontWeight="regular">
                  Architects design houses
                </AdmTypography>
              </AdmBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile1}
                    label="project #2"
                    title="modern"
                    description="As Uber works through a huge amount of internal management turmoil."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team1, name: "Elena Morison" },
                      { image: team2, name: "Ryan Milly" },
                      { image: team3, name: "Nick Daniel" },
                      { image: team4, name: "Peterson" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile2}
                    label="project #1"
                    title="scandinavian"
                    description="Music is something that every person has his or her own specific opinion about."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team3, name: "Nick Daniel" },
                      { image: team4, name: "Peterson" },
                      { image: team1, name: "Elena Morison" },
                      { image: team2, name: "Ryan Milly" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile3}
                    label="project #3"
                    title="minimalist"
                    description="Different people have different taste, and various types of music."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team4, name: "Peterson" },
                      { image: team3, name: "Nick Daniel" },
                      { image: team2, name: "Ryan Milly" },
                      { image: team1, name: "Elena Morison" },
                    ]}
                  />
                </Grid>
              </Grid>
            </AdmBox>
          </Card>
        </Grid>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
