import { createTheme } from "@mui/material/node/styles/index.js";

import colors from "~/assets/admin-theme/base/colors";
import breakpoints from "~/assets/admin-theme/base/breakpoints";
import typography from "~/assets/admin-theme/base/typography";
import boxShadows from "~/assets/admin-theme/base/boxShadows";
import borders from "~/assets/admin-theme/base/borders";
import globals from "~/assets/admin-theme/base/globals";

import boxShadow from "~/assets/admin-theme/functions/boxShadow";
import hexToRgb from "~/assets/admin-theme/functions/hexToRgb";
import linearGradient from "~/assets/admin-theme/functions/linearGradient";
import tripleLinearGradient from "~/assets/admin-theme/functions/tripleLinearGradient";
import pxToRem from "~/assets/admin-theme/functions/pxToRem";
import rgba from "~/assets/admin-theme/functions/rgba";

import sidenav from "~/assets/admin-theme/components/sidenav";
import list from "~/assets/admin-theme/components/list";
import listItem from "~/assets/admin-theme/components/list/listItem";
import listItemText from "~/assets/admin-theme/components/list/listItemText";
import card from "~/assets/admin-theme/components/card";
import cardMedia from "~/assets/admin-theme/components/card/cardMedia";
import cardContent from "~/assets/admin-theme/components/card/cardContent";
import button from "~/assets/admin-theme/components/button";
import iconButton from "~/assets/admin-theme/components/iconButton";
import inputBase from "~/assets/admin-theme/components/form/inputBase";
import menu from "~/assets/admin-theme/components/menu";
import menuItem from "~/assets/admin-theme/components/menu/menuItem";
import switchButton from "~/assets/admin-theme/components/form/switchButton";
import divider from "~/assets/admin-theme/components/divider";
import tableContainer from "~/assets/admin-theme/components/table/tableContainer";
import tableHead from "~/assets/admin-theme/components/table/tableHead";
import tableCell from "~/assets/admin-theme/components/table/tableCell";
import linearProgress from "~/assets/admin-theme/components/linearProgress";
import breadcrumbs from "~/assets/admin-theme/components/breadcrumbs";
import slider from "~/assets/admin-theme/components/slider";
import avatar from "~/assets/admin-theme/components/avatar";
import tooltip from "~/assets/admin-theme/components/tooltip";
import appBar from "~/assets/admin-theme/components/appBar";
import tabs from "~/assets/admin-theme/components/tabs";
import tab from "~/assets/admin-theme/components/tabs/tab";
import stepper from "~/assets/admin-theme/components/stepper";
import step from "~/assets/admin-theme/components/stepper/step";
import stepConnector from "~/assets/admin-theme/components/stepper/stepConnector";
import stepLabel from "~/assets/admin-theme/components/stepper/stepLabel";
import stepIcon from "~/assets/admin-theme/components/stepper/stepIcon";
import select from "~/assets/admin-theme/components/form/select";
import formControlLabel from "~/assets/admin-theme/components/form/formControlLabel";
import formLabel from "~/assets/admin-theme/components/form/formLabel";
import checkbox from "~/assets/admin-theme/components/form/checkbox";
import radio from "~/assets/admin-theme/components/form/radio";
import autocomplete from "~/assets/admin-theme/components/form/autocomplete";
import input from "~/assets/admin-theme/components/form/input";
import container from "~/assets/admin-theme/components/container";
import popover from "~/assets/admin-theme/components/popover";
import buttonBase from "~/assets/admin-theme/components/buttonBase";
import icon from "~/assets/admin-theme/components/icon";
import svgIcon from "~/assets/admin-theme/components/svgIcon";
import link from "~/assets/admin-theme/components/link";

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
