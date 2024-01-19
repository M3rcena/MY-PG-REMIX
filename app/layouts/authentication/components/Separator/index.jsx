import Divider from "@mui/material/Divider";

import AdmBox from "#app/components/AdmBox";
import AdmTypography from "#app/components/AdmTypography";

function Separator() {
  return (
    <AdmBox position="relative" py={0.25}>
      <Divider />
      <AdmBox
        bgColor="white"
        position="absolute"
        top="50%"
        left="50%"
        px={1.5}
        lineHeight={1}
        sx={{ transform: "translate(-50%, -60%)" }}
      >
        <AdmTypography variant="button" fontWeight="medium" color="text">
          or
        </AdmTypography>
      </AdmBox>
    </AdmBox>
  );
}

export default Separator;
