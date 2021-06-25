import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import Router from './routes';
import theme from './theme';
import AppProvider from './providers';

function App() {
  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <AppProvider>
            <Router />
          </AppProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </MaterialThemeProvider>
  );
}

export default App;
