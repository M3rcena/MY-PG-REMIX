import { createTheme } from "@mui/material/styles";

import colors from "remix/assets/admin-theme/base/colors";
import breakpoints from "remix/assets/admin-theme/base/breakpoints";
import typography from "remix/assets/admin-theme/base/typography";
import boxShadows from "remix/assets/admin-theme/base/boxShadows";
import borders from "remix/assets/admin-theme/base/borders";
import globals from "remix/assets/admin-theme/base/globals";

import boxShadow from "remix/assets/admin-theme/functions/boxShadow";
import hexToRgb from "remix/assets/admin-theme/functions/hexToRgb";
import linearGradient from "remix/assets/admin-theme/functions/linearGradient";
import tripleLinearGradient from "remix/assets/admin-theme/functions/tripleLinearGradient";
import pxToRem from "remix/assets/admin-theme/functions/pxToRem";
import rgba from "remix/assets/admin-theme/functions/rgba";

import sidenav from "remix/assets/admin-theme/components/sidenav";
import list from "remix/assets/admin-theme/components/list";
import listItem from "remix/assets/admin-theme/components/list/listItem";
import listItemText from "remix/assets/admin-theme/components/list/listItemText";
import card from "remix/assets/admin-theme/components/card";
import cardMedia from "remix/assets/admin-theme/components/card/cardMedia";
import cardContent from "remix/assets/admin-theme/components/card/cardContent";
import button from "remix/assets/admin-theme/components/button";
import iconButton from "remix/assets/admin-theme/components/iconButton";
import inputBase from "remix/assets/admin-theme/components/form/inputBase";
import menu from "remix/assets/admin-theme/components/menu";
import menuItem from "remix/assets/admin-theme/components/menu/menuItem";
import switchButton from "remix/assets/admin-theme/components/form/switchButton";
import divider from "remix/assets/admin-theme/components/divider";
import tableContainer from "remix/assets/admin-theme/components/table/tableContainer";
import tableHead from "remix/assets/admin-theme/components/table/tableHead";
import tableCell from "remix/assets/admin-theme/components/table/tableCell";
import linearProgress from "remix/assets/admin-theme/components/linearProgress";
import breadcrumbs from "remix/assets/admin-theme/components/breadcrumbs";
import slider from "remix/assets/admin-theme/components/slider";
import avatar from "remix/assets/admin-theme/components/avatar";
import tooltip from "remix/assets/admin-theme/components/tooltip";
import appBar from "remix/assets/admin-theme/components/appBar";
import tabs from "remix/assets/admin-theme/components/tabs";
import tab from "remix/assets/admin-theme/components/tabs/tab";
import stepper from "remix/assets/admin-theme/components/stepper";
import step from "remix/assets/admin-theme/components/stepper/step";
import stepConnector from "remix/assets/admin-theme/components/stepper/stepConnector";
import stepLabel from "remix/assets/admin-theme/components/stepper/stepLabel";
import stepIcon from "remix/assets/admin-theme/components/stepper/stepIcon";
import select from "remix/assets/admin-theme/components/form/select";
import formControlLabel from "remix/assets/admin-theme/components/form/formControlLabel";
import formLabel from "remix/assets/admin-theme/components/form/formLabel";
import checkbox from "remix/assets/admin-theme/components/form/checkbox";
import radio from "remix/assets/admin-theme/components/form/radio";
import autocomplete from "remix/assets/admin-theme/components/form/autocomplete";
import input from "remix/assets/admin-theme/components/form/input";
import container from "remix/assets/admin-theme/components/container";
import popover from "remix/assets/admin-theme/components/popover";
import buttonBase from "remix/assets/admin-theme/components/buttonBase";
import icon from "remix/assets/admin-theme/components/icon";
import svgIcon from "remix/assets/admin-theme/components/svgIcon";
import link from "remix/assets/admin-theme/components/link";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    tripleLinearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInputBase: { ...inputBase },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiInput: { ...input },
    MuiOutlinedInput: { ...input },
    MuiFilledInput: { ...input },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
  },
});
