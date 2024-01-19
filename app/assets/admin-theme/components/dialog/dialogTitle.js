import typography from "#app/assets/admin-theme/base/typography";

import pxToRem from "#app/assets/admin-theme/functions/pxToRem";

const { size } = typography;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};
