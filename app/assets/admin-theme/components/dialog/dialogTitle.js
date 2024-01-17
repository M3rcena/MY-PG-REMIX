import typography from "~/assets/admin-theme/base/typography";

import pxToRem from "~/assets/admin-theme/functions/pxToRem";

const { size } = typography;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};
