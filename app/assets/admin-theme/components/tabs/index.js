import colors from "../../../../assets/admin-theme/base/colors";
import borders from "../../../../assets/admin-theme/base/borders";

import pxToRem from "../../../../assets/admin-theme/functions/pxToRem";

const { grey, info } = colors;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: grey[100],
      borderRadius: borderRadius.md,
      minHeight: "unset",
      padding: pxToRem(4),
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10,
    },

    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important",
    },

    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%",
      },
    },

    indicator: {
      height: "100%",
      borderRadius: borderRadius.lg,
      backgroundColor: info.main,
      transition: "all 500ms ease",
    },
  },
};
