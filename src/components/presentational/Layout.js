import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from '../containers/Navbar';

export default props => {
    return (
        <MuiThemeProvider>
            <Navbar />
            {props.children}
        </MuiThemeProvider>
    )
};