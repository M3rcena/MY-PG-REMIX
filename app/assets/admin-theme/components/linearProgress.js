import borders from "#app/assets/admin-theme/base/borders";
import colors from "#app/assets/admin-theme/base/colors";

import pxToRem from "#app/assets/admin-theme/functions/pxToRem";

const { borderRadius } = borders;
const { light } = colors;

export default {
  styleOverrides: {
    root: {
      height: pxToRem(3),
      borderRadius: borderRadius.md,
      overflow: "visible",
      position: "relative",
    },

    colorPrimary: {
      backgroundColor: light.main,
    },

    colorSecondary: {
      backgroundColor: light.main,
    },

    bar: {
      height: pxToRem(6),
      borderRadius: borderRadius.sm,
      position: "absolute",
      transform: `translate(0, ${pxToRem(-1.5)}) !important`,
      transition: "width 0.6s ease !important",
    },
  },
};
