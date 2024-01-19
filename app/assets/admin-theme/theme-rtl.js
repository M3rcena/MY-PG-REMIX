import { createTheme } from "@mui/material/node/styles/index.js";

import colors from "#app/assets/admin-theme/base/colors";
import breakpoints from "#app/assets/admin-theme/base/breakpoints";
import typography from "#app/assets/admin-theme/base/typography";
import boxShadows from "#app/assets/admin-theme/base/boxShadows";
import borders from "#app/assets/admin-theme/base/borders";
import globals from "#app/assets/admin-theme/base/globals";

import boxShadow from "#app/assets/admin-theme/functions/boxShadow";
import hexToRgb from "#app/assets/admin-theme/functions/hexToRgb";
import linearGradient from "#app/assets/admin-theme/functions/linearGradient";
import pxToRem from "#app/assets/admin-theme/functions/pxToRem";
import rgba from "#app/assets/admin-theme/functions/rgba";

import sidenav from "#app/assets/admin-theme/components/sidenav";
import list from "#app/assets/admin-theme/components/list";
import listItem from "#app/assets/admin-theme/components/list/listItem";
import listItemText from "#app/assets/admin-theme/components/list/listItemText";
import card from "#app/assets/admin-theme/components/card";
import cardMedia from "#app/assets/admin-theme/components/card/cardMedia";
import cardContent from "#app/assets/admin-theme/components/card/cardContent";
import button from "#app/assets/admin-theme/components/button";
import iconButton from "#app/assets/admin-theme/components/iconButton";
import inputBase from "#app/assets/admin-theme/components/form/inputBase";
import menu from "#app/assets/admin-theme/components/menu";
import menuItem from "#app/assets/admin-theme/components/menu/menuItem";
import switchButton from "#app/assets/admin-theme/components/form/switchButton";
import divider from "#app/assets/admin-theme/components/divider";
import tableContainer from "#app/assets/admin-theme/components/table/tableContainer";
import tableHead from "#app/assets/admin-theme/components/table/tableHead";
import tableCell from "#app/assets/admin-theme/components/table/tableCell";
import linearProgress from "#app/assets/admin-theme/components/linearProgress";
import breadcrumbs from "#app/assets/admin-theme/components/breadcrumbs";
import slider from "#app/assets/admin-theme/components/slider";
import avatar from "#app/assets/admin-theme/components/avatar";
import tooltip from "#app/assets/admin-theme/components/tooltip";
import appBar from "#app/assets/admin-theme/components/appBar";
import tabs from "#app/assets/admin-theme/components/tabs";
import tab from "#app/assets/admin-theme/components/tabs/tab";
import stepper from "#app/assets/admin-theme/components/stepper";
import step from "#app/assets/admin-theme/components/stepper/step";
import stepConnector from "#app/assets/admin-theme/components/stepper/stepConnector";
import stepLabel from "#app/assets/admin-theme/components/stepper/stepLabel";
import stepIcon from "#app/assets/admin-theme/components/stepper/stepIcon";
import select from "#app/assets/admin-theme/components/form/select";
import formControlLabel from "#app/assets/admin-theme/components/form/formControlLabel";
import formLabel from "#app/assets/admin-theme/components/form/formLabel";
import checkbox from "#app/assets/admin-theme/components/form/checkbox";
import radio from "#app/assets/admin-theme/components/form/radio";
import autocomplete from "#app/assets/admin-theme/components/form/autocomplete";
import input from "#app/assets/admin-theme/components/form/input";
import container from "#app/assets/admin-theme/components/container";
import popover from "#app/assets/admin-theme/components/popover";
import buttonBase from "#app/assets/admin-theme/components/buttonBase";
import icon from "#app/assets/admin-theme/components/icon";
import svgIcon from "#app/assets/admin-theme/components/svgIcon";
import link from "#app/assets/admin-theme/components/link";

export default createTheme({
  direction: "rtl",
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
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
