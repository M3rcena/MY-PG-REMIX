import typography from "remix/assets/admin-theme/base/typography";
import borders from "remix/assets/admin-theme/base/borders";
import colors from "remix/assets/admin-theme/base/colors";

import pxToRem from "remix/assets/admin-theme/functions/pxToRem";

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