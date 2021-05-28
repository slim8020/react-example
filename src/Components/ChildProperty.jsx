import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildProperty extends Component {
    render() {
        return (
            <h1>
                {this.props.children}
            </h1>
        );
    }
}
ChildProperty.propTypes = {
    children : PropTypes.node,
}

export default ChildProperty;
