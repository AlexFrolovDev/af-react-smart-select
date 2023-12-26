import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#f8f9fa",
    white2: "#e9ecef",
    lightGrey: "#dee2e6",
    grey: "#ced4da",
    darkGrey: "#adb5bd",
    darkGrey2: "#6c757d",
    darkGrey3: "#495057",
    darkGrey4: "#343a40",
    black: "#212529",
  },
  layout: {
    gap: "0.5em",
    padding: "0.5em",
    borderRadius: "0.25rem",
    borderColor: "rgba(0,0,0,0.125)",
    container: {
      width: "100%",
    },
    contents: {
      width: "100%",
    },
    input: {
      width: "100%",
    },
    dropdown: {
      width: "100%",
    },
  },
  typography: {
    fontSize: "1em",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    lineHeight: 1.5,
    letterSpacing: "0.05em",
    textTransform: "none",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
};

const Provider = (props: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Provider;
