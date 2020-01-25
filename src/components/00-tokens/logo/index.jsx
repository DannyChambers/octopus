
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class Logo extends Component {

  render() {

    //const { } = this.props;

    return (
      <a href="/" className="logo">
      	<h1 class="logo_text">Octopus Energy</h1>
      </a>
    );
  }
}

Logo.propTypes = {

};

Logo.defaultProps = {

};