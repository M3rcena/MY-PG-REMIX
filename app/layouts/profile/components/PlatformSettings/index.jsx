import { useState } from "react";

import Card from "@mui/material/Card";

import AdmBox from " components/AdmBox";
import AdmTypography from " components/AdmTypography";
import AdmSwitch from " components/AdmSwitch";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const [mails, setMails] = useState(false);

  return (
    <Card sx={{ minHeight: "490px", height: "100%" }}>
      <AdmBox mb="26px">
        <AdmTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          platform settings
        </AdmTypography>
      </AdmBox>
      <AdmBox lineHeight={1.25}>
        <AdmTypography
          variant="xxs"
          fontWeight="medium"
          mb="20px"
          color="text"
          textTransform="uppercase"
        >
          account
        </AdmTypography>
        <AdmBox display="flex" mb="14px">
          <AdmBox mt={0.25}>
            <AdmSwitch color="info" checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </AdmBox>
          <AdmBox width="80%" ml={2}>
            <AdmTypography variant="button" fontWeight="regular" color="text">
              Email me when someone follows me
            </AdmTypography>
          </AdmBox>
        </AdmBox>
        <AdmBox display="flex" mb="14px">
          <AdmBox mt={0.25}>
            <AdmSwitch
              color="info"
              checked={answersPost}
              onChange={() => setAnswersPost(!answersPost)}
            />
          </AdmBox>
          <AdmBox width="80%" ml={2}>
            <AdmTypography variant="button" fontWeight="regular" color="text">
              Email me when someone answers on my post
            </AdmTypography>
          </AdmBox>
        </AdmBox>
        <AdmBox display="flex" mb="14px">
          <AdmBox mt={0.25}>
            <AdmSwitch
              sx={{ background: "#1B1F3D", color: "#fff" }}
              color="info"
              checked={mentionsMe}
              onChange={() => setMentionsMe(!mentionsMe)}
            />
          </AdmBox>
          <AdmBox width="80%" ml={2}>
            <AdmTypography variant="button" fontWeight="regular" color="text">
              Email me when someone mentions me
            </AdmTypography>
          </AdmBox>
        </AdmBox>
        <AdmBox mb="6px">
          <AdmTypography variant="xxs" fontWeight="medium" color="text" textTransform="uppercase">
            application
          </AdmTypography>
        </AdmBox>
        <AdmBox display="flex" mb="14px">
          <AdmBox mt={0.25}>
            <AdmSwitch
              color="info"
              checked={newLaunches}
              onChange={() => setNewLaunches(!newLaunches)}
            />
          </AdmBox>
          <AdmBox width="80%" ml={2}>
            <AdmTypography variant="button" fontWeight="regular" color="text">
              New launches and projects
            </AdmTypography>
          </AdmBox>
        </AdmBox>
        <AdmBox display="flex" mb="14px">
          <AdmBox mt={0.25}>
            <AdmSwitch
              color="info"
              checked={productUpdate}
              onChange={() => setProductUpdate(!productUpdate)}
            />
          </AdmBox>
          <AdmBox width="80%" ml={2}>
            <AdmTypography variant="button" fontWeight="regular" color="text">
              Monthly product updates
            </AdmTypography>
          </AdmBox>
        </AdmBox>
        <AdmBox display="flex" mb="14px">
          <AdmBox mt={0.25}>
            <AdmSwitch
              color="info"
              checked={newsletter}
              onChange={() => setNewsletter(!newsletter)}
            />
          </AdmBox>
          <AdmBox width="80%" ml={2}>
            <AdmTypography variant="button" fontWeight="regular" color="text">
              Subscribe to newsletter
            </AdmTypography>
          </AdmBox>
        </AdmBox>
        <AdmBox display="flex">
          <AdmBox mt={0.25}>
            <AdmSwitch color="info" checked={mails} onChange={() => setMails(!mails)} />
          </AdmBox>
          <AdmBox width="80%" ml={2}>
            <AdmTypography variant="button" fontWeight="regular" color="text">
              Receive mails weekly
            </AdmTypography>
          </AdmBox>
        </AdmBox>
      </AdmBox>
    </Card>
  );
}

export default PlatformSettings;
