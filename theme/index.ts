import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: `#637d63`,
    },
    secondary: {
      main: `#ff9e25`,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: `#f6f8fc`,
      //637d63
    },
  },
});

export default theme;
