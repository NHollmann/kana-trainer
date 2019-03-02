import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo } from '@material-ui/core/colors'
import Routes from './components/utils/Routes';

/**
 * Application theme
 */
const theme = createMuiTheme({
    palette: {
        secondary: {
            main: blue[900]
        },
        primary: {
            main: indigo[700]
        }
    },
    typography: {
        useNextVariants: true,
    },
});

/**
 * The main component of this application.
 */
function App() {
    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <Routes />
            </MuiThemeProvider>
        </div>
    );
}

export default App;
