import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(52, 20, 108)',
      contrastText: 'rgb(255, 255, 255)',
      light: 'rgb(210, 187, 255)',
      dark: 'rgb(75, 46, 131)',
    },
    secondary: {
      main: 'rgb(101, 87, 129)',
      contrastText: 'rgb(255, 255, 255)',
      light: 'rgb(208, 191, 238)',
      dark: 'rgb(197, 180, 227)',
    },
    tertiary: {
      main: 'rgb(118, 91, 0)',
      contrastText: 'rgb(255, 255, 255)',
      light: 'rgb(245, 191, 0)',
      dark: 'rgb(255, 199, 0)',
    },
    error: {
      main: 'rgb(186, 26, 26)',
      contrastText: 'rgb(255, 255, 255)',
      light: 'rgb(255, 218, 214)',
      dark: 'rgb(147, 0, 10)',
    },
    background: {
      default: 'rgb(254, 247, 255)',
      paper: 'rgb(242, 236, 244)',
    },
    text: {
      primary: 'rgb(29, 27, 32)',
      secondary: 'rgb(73, 69, 81)',
    },
    divider: 'rgb(203, 196, 210)',
    action: {
      active: 'rgb(123, 117, 130)',
      hover: 'rgba(123, 117, 130, 0.08)',
      selected: 'rgba(123, 117, 130, 0.16)',
      disabled: 'rgba(123, 117, 130, 0.38)',
      disabledBackground: 'rgba(123, 117, 130, 0.12)',
    },
    common: {
      black: 'rgb(0, 0, 0)',
      white: 'rgb(255, 255, 255)',
    },
    surface: {
      main: 'rgb(254, 247, 255)',
      contrastText: 'rgb(29, 27, 32)',
    },

    // Custom Material You Roles
    custom: {
      surfaceVariant: 'rgb(232, 223, 238)',
      onSurfaceVariant: 'rgb(73, 69, 81)',
      outline: 'rgb(123, 117, 130)',
      outlineVariant: 'rgb(203, 196, 210)',
      inverseSurface: 'rgb(50, 47, 53)',
      inverseOnSurface: 'rgb(245, 239, 247)',
      inversePrimary: 'rgb(210, 187, 255)',

      primaryContainer: 'rgb(75, 46, 131)',
      onPrimaryContainer: 'rgb(186, 156, 248)',

      secondaryContainer: 'rgb(197, 180, 227)',
      onSecondaryContainer: 'rgb(82, 68, 108)',

      tertiaryContainer: 'rgb(255, 199, 0)',
      onTertiaryContainer: 'rgb(110, 84, 0)',

      cardContainer: 'rgb(220, 205, 226)',

      surfaceDim: 'rgb(222, 216, 224)',
      surfaceBright: 'rgb(254, 247, 255)',
      surfaceContainerLowest: 'rgb(255, 255, 255)',
      surfaceContainerLow: 'rgb(248, 241, 250)',
      surfaceContainer: 'rgb(242, 236, 244)',
      surfaceContainerHigh: 'rgb(236, 230, 238)',
      surfaceContainerHighest: 'rgb(231, 224, 233)',
    },

    tonalOffset: 0.2,
  },

  typography: {
    fontFamily: '"Ubuntu", sans-serif',
    h1: { fontFamily: '"Encode Sans", sans-serif' },
    h2: { fontFamily: '"Encode Sans", sans-serif' },
    h3: { fontFamily: '"Encode Sans", sans-serif' },
    h4: { fontFamily: '"Encode Sans", sans-serif' },
    h5: { fontFamily: '"Encode Sans", sans-serif' },
    h6: { fontFamily: '"Encode Sans", sans-serif' },
  }

});

export default theme;
