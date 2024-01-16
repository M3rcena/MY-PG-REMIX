import colors from " assets/admin-theme/base/colors";
import typography from " assets/admin-theme/base/typography";

const { grey, text, info } = colors;
const { size } = typography;

export default {
  styleOverrides: {
    li: {
      lineHeight: 0,
    },

    separator: {
      fontSize: size.sm,
    },
  },
};
