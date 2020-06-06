import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import primary from "@material-ui/core/colors/teal";
import secondary from "@material-ui/core/colors/cyan";
import CssBaseline from "@material-ui/core/CssBaseline";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: primary[300],
      main: primary[400],
      dark: primary[700],
    },
    secondary: {
      light: secondary[300],
      main: secondary[500],
      dark: secondary[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* https://material-ui.com/getting-started/usage/#cssbaseline */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
