import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '100em',
            }
        }
    },
    palette: {
      common: {
        black: "rgba(39, 59, 85, 1)",
        white: "#fff",
      },
      type: "light",
      primary: {
        light: 'rgba(233, 233, 249, 1)',
        main: 'rgba(37, 30, 195, 1)',
        dark: 'rgba(17, 11, 158, 1)',
        contrastText: "#fff"
      },
      secondary: {
        light: 'rgba(234, 252, 245, 1)',
        main: 'rgba(48, 221, 157, 1)',
        dark: 'rgba(1, 135, 134, 1)',
        contrastText: '#ffffff',
      },
      error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f",
        contrastText: "#fff"
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#d5d5d5",
        A200: "#aaaaaa",
        A400: "#303030",
        A700: "#616161"
      },
      text: {
        primary: "#273B55",
        secondary: "rgba(39, 59, 85, 1)",
        disabled: "rgba(148, 148, 148, 1)",
        hint: "rgba(131, 131, 131, 1)"
      },
      divider: "rgba(39, 59, 85, 1)",
      background: {
        paper: "rgba(255, 255, 255, 1)",
        default: "#F4F5F6"
      },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(0, 0, 0, 0.14)",
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)"
      },
    },
    typography: {
        htmlFontSize: 14,
        fontFamily: "'Lato', Helvetica, Arial, sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: "'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "2.5rem",
            lineHeight: 1,
            letterSpacing: "-0.01562em"
        },
        h2: {
            fontFamily: "'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "1.75rem",
            lineHeight: 1,
            letterSpacing: "-0.00833em"
        },
        h3: {
            fontFamily: "'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "1.5rem",
            lineHeight: 1.04,
            letterSpacing: "0em"
        },
        h4: {
            fontFamily: "'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "1.375rem",
            lineHeight: 1.17,
            letterSpacing: "0.00735em"
        },
        h5: {
            fontFamily: "'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "1.25rem",
            lineHeight: 1.33,
            letterSpacing: "0em"
        },
        h6: {
            fontFamily: "'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "1.125rem",
            lineHeight: 1.6,
            letterSpacing: "0.0075em"
        },
        subtitle1: {
            fontFamily: "'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em"
        },
        subtitle2: {
            fontFamily: "'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "0.875rem",
            lineHeight: 1.57,
            letterSpacing: "0.00714em"
        },
        body1: {
            fontFamily: "'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: "0.00938em"
        },
        body2: {
            fontFamily: "'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.43,
            letterSpacing: "0.01071em"
        },
        button: {
            fontFamily: "'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.75,
            letterSpacing: "0.02857em",
            textTransform: "uppercase"
        },
        caption: {
            fontFamily: "'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            letterSpacing: "0.03333em"
        },
        overline: {
            fontFamily:"'Lato', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 2.66,
            letterSpacing: "0.08333em",
            textTransform: "uppercase"
        },

    }


  });

// full doc --> https://material-ui.com/customization/default-theme/
