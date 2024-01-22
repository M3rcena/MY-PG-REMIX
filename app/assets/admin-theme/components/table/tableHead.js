import borders from "../../../../assets/admin-theme/base/borders";

import pxToRem from "../../../../assets/admin-theme/functions/pxToRem";

const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      display: "block",
      padding: `${pxToRem(16)} ${pxToRem(16)} 0  0`,
      borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
    },
  },
};
