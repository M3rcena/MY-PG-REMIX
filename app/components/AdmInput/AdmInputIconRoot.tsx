import Icon from "@mui/material/node/Icon/index.js";
import { styled } from "@mui/material/node/styles/index.js";

export default styled(Icon)(({ theme, ownerState }) => {
  const { typography } = theme;
  const { size } = ownerState;

  const { fontWeightBold, size: fontSize } = typography;

  return {
    fontWeight: fontWeightBold,
    fontSize: size === "small" && `${fontSize.md} !important`,
  };
});
