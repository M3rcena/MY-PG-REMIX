import PropTypes from "prop-types";

import AdmBox from "~/components/AdmBox";
import AdmTypography from "~/components/AdmTypography";
import { IoDocumentText } from "react-icons/io5";

function Invoice({ date, id, price }) {
  return (
    <AdmBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb="32px"
    >
      <AdmBox lineHeight={1}>
        <AdmTypography display="block" variant="button" fontWeight="medium" color="white">
          {date}
        </AdmTypography>
        <AdmTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </AdmTypography>
      </AdmBox>
      <AdmBox display="flex" alignItems="center">
        <AdmTypography variant="button" fontWeight="regular" color="text">
          {price}
        </AdmTypography>
        <AdmBox display="flex" alignItems="center" lineHeight={0} ml={3} sx={{ cursor: "poiner" }}>
          <IoDocumentText color="#fff" size="15px" />
          <AdmTypography variant="button" fontWeight="medium" color="text">
            &nbsp;PDF
          </AdmTypography>
        </AdmBox>
      </AdmBox>
    </AdmBox>
  );
}

Invoice.defaultProps = {
  noGutter: false,
};

Invoice.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Invoice;
