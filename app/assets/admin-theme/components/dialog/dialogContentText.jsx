import typography from "../../../../assets/admin-theme/base/typography";
import colors from "../../../../assets/admin-theme/base/colors";

const { size } = typography;
const { text } = colors;

export default {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};
