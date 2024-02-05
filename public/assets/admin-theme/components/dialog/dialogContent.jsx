import typography from "../../../../assets/admin-theme/base/typography";
import borders from "../../../../assets/admin-theme/base/borders";
import colors from "../../../../assets/admin-theme/base/colors";

import pxToRem from "../../../../assets/admin-theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;
const { borderWidth, borderColor } = borders;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: text.main,
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${borderColor}`,
      borderBottom: `${borderWidth[1]} solid ${borderColor}`,
    },
  },
};
