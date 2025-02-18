import { createTheme as createMuiTheme, responsiveFontSizes } from "@mui/material";

export const createTheme = ({ darkMode }: { darkMode: boolean }) =>
  responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily:
          '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      },
      palette: {
        ...(darkMode
          ? {
              mode: "dark",
              primary: { main: "#72bbff" },
              secondary: { main: "#22e833" },
              error: { main: "#ff4455" },
            }
          : {
              mode: "light",
              primary: { main: "#2d85fa" },
              secondary: { main: "#12b823" },
              error: { main: "#ff1100" },
            }),
      },
      components: {
        MuiButton: {
          defaultProps: {
            variant: "contained",
          },
        },
        MuiSelect: {
          defaultProps: {
            size: "small",
          },
        },
        MuiTabs: {
          defaultProps: {
            indicatorColor: "secondary",
            textColor: "secondary",
          },
        },
      },
    })
  );
