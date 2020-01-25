
import React, { Component } from "react";
import PropTypes from "prop-types";

//Tokens

//Arrangements
import Container 	from "../../01-arrangements/container/index";
import T3         from "../../01-arrangements/t3/index";

//Patterns

//Modules

//Pages

//Conponent style
import "./index.scss";

export default class PageFooter extends Component {

  render() {

    //const { } = this.props;

    return (
      <div className="page-footer">
        <Container>
        	<T3 text="Octopus Energy Ltd is a company registered in England and Wales. Registered number: 09263424. Registered office: 33 Holborn, London, EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT" />
        </Container>
      </div>
    );
  }
}

PageFooter.propTypes = {

};

PageFooter.defaultProps = {

};