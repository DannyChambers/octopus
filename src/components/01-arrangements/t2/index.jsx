
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class T2 extends Component {
  render() {

    const { classes, text } = this.props;

    return (
      <p className={`t2 ${this.props.classes}`}>{text}</p>

    );
  }
}

T2.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string.isRequired,
};

T2.defaultProps = {
  classes: "",
  text: "The Quick Brown Fox Jumps Over The Lazy Dog",
};