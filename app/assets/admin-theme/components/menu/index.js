import boxShadows from "#app/assets/admin-theme/base/boxShadows";
import typography from "#app/assets/admin-theme/base/typography";
import colors from "#app/assets/admin-theme/base/colors";
import borders from "#app/assets/admin-theme/base/borders";
import linearGradient from "#app/assets/admin-theme/functions/linearGradient";

import pxToRem from "#app/assets/admin-theme/functions/pxToRem";

const { borderWidth } = borders;
const { lg } = boxShadows;
const { size } = typography;
const { white, borderCol, gradients, transparent } = colors;
const { borderRadius } = borders;

export default {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    "& .MuiIcon-root": {
      stroke: white.main,
    },
    paper: {
      minWidth: pxToRem(160),
      boxShadow: lg,
      padding: `0 !important`,
      fontSize: size.sm,
      color: white.main,
      textAlign: "left",
      border: `${borderWidth[1]} solid ${borderCol.navbar}`,
      borderRadius: borderRadius.md,
    },
    list: {
      background: linearGradient(gradients.menu.main, gradients.menu.state, gradients.menu.deg),
      "& .MuiMenuItem-root": {
        "& .MuiBox-root .MuiTypography-root": {
          color: white.main,
        },
        "&:hover": {
          background: transparent.main,
        },
      },
    },
  },
};
