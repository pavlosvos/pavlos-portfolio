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
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#fff',
        color: '#707070',
      },
    },
  },
});

export default theme;
