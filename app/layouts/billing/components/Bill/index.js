import PropTypes from "prop-types";

import Icon from "@mui/material/Icon";

import AdmBox from "../../../../components/AdmBox";
import AdmTypography from "../../../../components/AdmTypography";
import AdmButton from "../../../../components/AdmButton";
import linearGradient from "../../../../assets/admin-theme/functions/linearGradient";
import colors from "../../../../assets/admin-theme/base/colors";

function Bill({ name, company, email, vat, noGutter }) {
  const { gradients } = colors;
  const { bill } = gradients;

  return (
    <AdmBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ background: linearGradient(bill.main, bill.state, bill.deg) }}
      borderRadius="lg"
      p="24px"
      mb={noGutter ? "0px" : "24px"}
      mt="20px"
    >
      <AdmBox width="100%" display="flex" flexDirection="column">
        <AdmBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb="5px"
        >
          <AdmTypography
            variant="button"
            color="white"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {name}
          </AdmTypography>

          <AdmBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
            sx={({ breakpoints }) => ({
              [breakpoints.only("sm")]: {
                flexDirection: "column",
              },
            })}
          >
            <AdmBox mr={1}>
              <AdmButton variant="text" color="error">
                <Icon sx={{ mr: "4px" }}>delete</Icon>&nbsp;DELETE
              </AdmButton>
            </AdmBox>
            <AdmButton variant="text" color="text">
              <Icon sx={{ mr: "4px" }}>edit</Icon>&nbsp;EDIT
            </AdmButton>
          </AdmBox>
        </AdmBox>
        <AdmBox mb={1} lineHeight={0}>
          <AdmTypography variant="caption" color="text">
            Company Name:&nbsp;&nbsp;&nbsp;
            <AdmTypography
              variant="caption"
              color="text"
              fontWeight="regular"
              textTransform="capitalize"
            >
              {company}
            </AdmTypography>
          </AdmTypography>
        </AdmBox>
        <AdmBox mb={1} lineHeight={0}>
          <AdmTypography variant="caption" color="text">
            Email Address:&nbsp;&nbsp;&nbsp;
            <AdmTypography variant="caption" fontWeight="regular" color="text">
              {email}
            </AdmTypography>
          </AdmTypography>
        </AdmBox>
        <AdmTypography variant="caption" color="text">
          VAT Number:&nbsp;&nbsp;&nbsp;
          <AdmTypography variant="caption" fontWeight="regular" color="text">
            {vat}
          </AdmTypography>
        </AdmTypography>
      </AdmBox>
    </AdmBox>
  );
}

Bill.defaultProps = {
  noGutter: false,
};

Bill.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Bill;
