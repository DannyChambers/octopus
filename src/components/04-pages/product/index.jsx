
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Tokens

//Arrangements
import Container 	from "../../01-arrangements/container/index";

//Patterns
import ProductTile 	from "../../02-patterns/product-tile/index";

//Modules
import PageHeader 	from "../../03-modules/page-header/index";
import PageFooter 	from "../../03-modules/page-footer/index";

//Pages

//Conponent style
import "./index.scss";

class ProductPage extends Component {

  render() {

    const { products } = this.props;

    //console.log("Props is: ", this.props);

    const productList = products.length ? (
      products.map(product => {

      return (

          <ProductTile key={product.id} productData={product} />

      )

    }) 

    ) : (

      <p>Octo-No! There aren't any products</p>

    )

    return (
      <div className="product-page">
        <PageHeader />

		      {productList}

        <PageFooter />
      </div>
    );
  }
}

ProductPage.propTypes = {

};

ProductPage.defaultProps = {

};

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
