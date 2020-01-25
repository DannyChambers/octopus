
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class CaptionedMedia extends Component {

  render() {

    //const { } = this.props;

    return (
      <div className="captioned-media">
        
      	<img src="https://via.placeholder.com/330x386" />

      </div>
    );
  }
}

CaptionedMedia.propTypes = {

};

CaptionedMedia.defaultProps = {

};