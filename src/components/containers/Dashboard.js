import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class Dashboard extends Component {
    state = {};

    render() {
        return (
            <div>
            <Drawer docked={true}>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
            </div>
        )
    }
}

export default Dashboard;