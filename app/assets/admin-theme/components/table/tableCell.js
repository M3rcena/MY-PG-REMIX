import borders from "#app/assets/admin-theme/base/borders";
import colors from "#app/assets/admin-theme/base/colors";

import pxToRem from "#app/assets/admin-theme/functions/pxToRem";

const { borderWidth } = borders;
const { light } = colors;

export default {
  styleOverrides: {
    root: {
      backgroundColor: `${light.main} !important`,
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      "& .MuiBox-root": {
        pl: "0px !important",
      },
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};
