import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppBar from 'material-ui/AppBar';

class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar title="Title"/>
            </div>
        )
    }
};

function mapStateToProps(state) {
  return {
    loaded: state.user.loaded
  };
}

export default connect(
  mapStateToProps
)(Navbar);