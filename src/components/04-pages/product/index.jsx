
import React, { Component } from "react";
import PropTypes from "prop-types";

//Tokens

//Arrangements
import Container 	from "../../01-arrangements/container/index";

//Patterns

//Modules
import PageHeader 	from "../../03-modules/page-header/index";
import PageFooter 	from "../../03-modules/page-footer/index";

//Pages

//Conponent style
import "./index.scss";

export default class ProductPage extends Component {

  render() {

    //const { } = this.props;

    return (
      <div className="product-page">
        <PageHeader />

        <PageFooter />
      </div>
    );
  }
}

ProductPage.propTypes = {

};

ProductPage.defaultProps = {

};