import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import AdmBox from "../../../components/AdmBox";
import AdmAvatar from "../../../components/AdmAvatar";
import AdmTypography from "../../../components/AdmTypography";

import colors from "../../../assets/admin-theme/base/colors";
import typography from "../../../assets/admin-theme/base/typography";
import borders from "../../../assets/admin-theme/base/borders";

function Table({ columns, rows }) {
  const { grey } = colors;
  const { size, fontWeightBold } = typography;
  const { borderWidth } = borders;

  const renderColumns = columns.map(({ name, align, width }, key) => {
    let pl;
    let pr;

    if (key === 0) {
      pl = 3;
      pr = 3;
    } else if (key === columns.length - 1) {
      pl = 3;
      pr = 3;
    } else {
      pl = 1;
      pr = 1;
    }

    return (
      <AdmBox
        key={name}
        component="th"
        width={width || "auto"}
        pt={1.5}
        pb={1.25}
        pl={align === "left" ? pl : 3}
        pr={align === "right" ? pr : 3}
        textAlign={align}
        fontSize={size.xxs}
        fontWeight={fontWeightBold}
        color="text"
        opacity={0.7}
        borderBottom={`${borderWidth[1]} solid ${grey[700]}`}
      >
        {name.toUpperCase()}
      </AdmBox>
    );
  });

  const renderRows = rows.map((row, key) => {
    const rowKey = `row-${key}`;

    const tableRow = columns.map(({ name, align }) => {
      let template;

      if (Array.isArray(row[name])) {
        template = (
          <AdmBox
            key={uuidv4()}
            component="td"
            p={1}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null}
          >
            <AdmBox display="flex" alignItems="center" py={0.5} px={1}>
              <AdmBox mr={2}>
                <AdmAvatar src={row[name][0]} name={row[name][1]} variant="rounded" size="sm" />
              </AdmBox>
              <AdmTypography
                color="white"
                variant="button"
                fontWeight="medium"
                sx={{ width: "max-content" }}
              >
                {row[name][1]}
              </AdmTypography>
            </AdmBox>
          </AdmBox>
        );
      } else {
        template = (
          <AdmBox
            key={uuidv4()}
            component="td"
            p={1}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${grey[700]}` : null}
          >
            <AdmTypography
              variant="button"
              fontWeight="regular"
              color="text"
              sx={{ display: "inline-block", width: "max-content" }}
            >
              {row[name]}
            </AdmTypography>
          </AdmBox>
        );
      }

      return template;
    });

    return <TableRow key={rowKey}>{tableRow}</TableRow>;
  });

  return useMemo(
    () => (
      <TableContainer>
        <MuiTable>
          <AdmBox component="thead">
            <TableRow>{renderColumns}</TableRow>
          </AdmBox>
          <TableBody>{renderRows}</TableBody>
        </MuiTable>
      </TableContainer>
    ),
    [columns, rows]
  );
}

// Setting default values for the props of Table
Table.defaultProps = {
  columns: [],
  rows: [{}],
};

// Typechecking props for the Table
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
