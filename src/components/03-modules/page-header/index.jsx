
import React, { Component } from "react";
import PropTypes from "prop-types";

//Tokens
import Logo 	from "../../00-tokens/logo/index";

//Arrangements
import Container 	from "../../01-arrangements/container/index";

//Patterns

//Modules

//Pages

//Conponent style
import "./index.scss";

export default class PageHeader extends Component {

  render() {

    //const { } = this.props;

    return (
      <div className="page-header">
      	<Container>
        	<Logo />
        </Container>
      </div>
    );
  }
}

PageHeader.propTypes = {

};

PageHeader.defaultProps = {

};