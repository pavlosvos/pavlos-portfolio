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
    fontSize: 18,
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1rem',
    },
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
