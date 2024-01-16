import { forwardRef, createContext, useContext } from "react";

import PropTypes from "prop-types";

import AdmBox from "remix/components/AdmBox";

import AdmPaginationItemRoot from "remix/components/AdmPagination/AdmPaginationItemRoot";

const Context = createContext();

const AdmPagination = forwardRef(
  ({ item, variant, color, size, active, children, ...rest }, ref) => {
    const context = item ? useContext(Context) : null;
    const paginationSize = context ? context.size : null;

    return (
      <Context.Provider value={{ variant, color, size }}>
        {item ? (
          <AdmPaginationItemRoot
            {...rest}
            ref={ref}
            variant={active ? context.variant : "outlined"}
            color={active ? context.color : "text"}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </AdmPaginationItemRoot>
        ) : (
          <AdmBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ listStyle: "none" }}
          >
            {children}
          </AdmBox>
        )}
      </Context.Provider>
    );
  }
);

AdmPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false,
};

AdmPagination.propTypes = {
  item: PropTypes.bool,
  variant: PropTypes.oneOf(["gradient", "contained"]),
  color: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default AdmPagination;
