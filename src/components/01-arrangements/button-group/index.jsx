
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class ButtonGroup extends Component {

  render() {

    //const { } = this.props;

    return (
      <div className={`button-group button-group--${this.props.variant}`}>
        {this.props.children}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  variant: PropTypes.string.isRequired
};

ButtonGroup.defaultProps = {
  variant: "centre",
};