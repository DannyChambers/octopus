
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class H3 extends Component {
  render() {

    const { classes, text } = this.props;

    return (
      <h3 className={`h3 ${this.props.classes}`}>{text}</h3>

    );
  }
}

H3.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string.isRequired,
};

H3.defaultProps = {
  classes: "",
  text: "The Quick Brown Fox Jumps Over The Lazy Dog",
};