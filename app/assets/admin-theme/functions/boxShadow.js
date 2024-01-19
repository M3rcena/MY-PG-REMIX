/**
  The boxShadow() function helps you to create a box shadow for an element
 */

import rgba from "#app/assets/admin-theme/functions/rgba";
import pxToRem from "#app/assets/admin-theme/functions/pxToRem";

function boxShadow(offset = [], radius = [], color, opacity, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity
  )}`;
}

export default boxShadow;
