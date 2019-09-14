import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ED80E0',
    },
    text: {
      primary: '#707070',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        color: '#707070',
      },
    },
  },
});

export default theme;
