import pxToRem from "#app/assets/admin-theme/functions/pxToRem";

import colors from "#app/assets/admin-theme/base/colors";
import boxShadows from "#app/assets/admin-theme/base/boxShadows";
import borders from "#app/assets/admin-theme/base/borders";

const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      padding: pxToRem(8),
      borderRadius: borderRadius.lg,
    },
  },
};
