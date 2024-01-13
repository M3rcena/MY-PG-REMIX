import { createTheme } from "@mui/material/styles";

import colors from "../admin-theme/base/colors";
import breakpoints from "../admin-theme/base/breakpoints";
import typography from "../admin-theme/base/typography";
import boxShadows from "../admin-theme/base/boxShadows";
import borders from "../admin-theme/base/borders";
import globals from "../admin-theme/base/globals";

import boxShadow from "../admin-theme/functions/boxShadow";
import hexToRgb from "../admin-theme/functions/hexToRgb";
import linearGradient from "../admin-theme/functions/linearGradient";
import tripleLinearGradient from "../admin-theme/functions/tripleLinearGradient";
import pxToRem from "../admin-theme/functions/pxToRem";
import rgba from "../admin-theme/functions/rgba";

import sidenav from "../admin-theme/components/sidenav";
import list from "../admin-theme/components/list";
import listItem from "../admin-theme/components/list/listItem";
import listItemText from "../admin-theme/components/list/listItemText";
import card from "../admin-theme/components/card";
import cardMedia from "../admin-theme/components/card/cardMedia";
import cardContent from "../admin-theme/components/card/cardContent";
import button from "../admin-theme/components/button";
import iconButton from "../admin-theme/components/iconButton";
import inputBase from "../admin-theme/components/form/inputBase";
import menu from "../admin-theme/components/menu";
import menuItem from "../admin-theme/components/menu/menuItem";
import switchButton from "../admin-theme/components/form/switchButton";
import divider from "../admin-theme/components/divider";
import tableContainer from "../admin-theme/components/table/tableContainer";
import tableHead from "../admin-theme/components/table/tableHead";
import tableCell from "../admin-theme/components/table/tableCell";
import linearProgress from "../admin-theme/components/linearProgress";
import breadcrumbs from "../admin-theme/components/breadcrumbs";
import slider from "../admin-theme/components/slider";
import avatar from "../admin-theme/components/avatar";
import tooltip from "../admin-theme/components/tooltip";
import appBar from "../admin-theme/components/appBar";
import tabs from "../admin-theme/components/tabs";
import tab from "../admin-theme/components/tabs/tab";
import stepper from "../admin-theme/components/stepper";
import step from "../admin-theme/components/stepper/step";
import stepConnector from "../admin-theme/components/stepper/stepConnector";
import stepLabel from "../admin-theme/components/stepper/stepLabel";
import stepIcon from "../admin-theme/components/stepper/stepIcon";
import select from "../admin-theme/components/form/select";
import formControlLabel from "../admin-theme/components/form/formControlLabel";
import formLabel from "../admin-theme/components/form/formLabel";
import checkbox from "../admin-theme/components/form/checkbox";
import radio from "../admin-theme/components/form/radio";
import autocomplete from "../admin-theme/components/form/autocomplete";
import input from "../admin-theme/components/form/input";
import container from "../admin-theme/components/container";
import popover from "../admin-theme/components/popover";
import buttonBase from "../admin-theme/components/buttonBase";
import icon from "../admin-theme/components/icon";
import svgIcon from "../admin-theme/components/svgIcon";
import link from "../admin-theme/components/link";

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
