
import React, { Component } from "react";
import PropTypes from "prop-types";

//Tokens

//Arrangements
import Container 		from "../../01-arrangements/container/index";
import CaptionedMedia 	from "../../01-arrangements/captioned-media/index";
import H2 				from "../../01-arrangements/h2/index";
import H3 				from "../../01-arrangements/h3/index";
import H4 				from "../../01-arrangements/h4/index";
import T2 				from "../../01-arrangements/t2/index";
import T3 				from "../../01-arrangements/t3/index";

//Patterns
import QuantityBox 		from "../../02-patterns/quantity-box/index";
import Button 			from "../../02-patterns/button/index";

//Modules

//Pages

//Conponent style
import "./index.scss";

export default class ProductTile extends Component {

  render() {

    const { productData } = this.props;

    return (
      <div className="product-tile">
        <Container>
        	
        	<CaptionedMedia />
        	
        	<H2 text={productData.title} classes="product-tile_title" />

        	<T2 text={productData.subtitle} classes="product-tile_subtitle" />

        </Container>

    	<div className="product-tile_controls">

    	    <Container>

	        	<span className="h2 product-tile_price">{productData.price}</span>

	        	<QuantityBox minimum={1} maximum={productData.available} />

	        	<Button variant="primary " text="Add to cart" />

        	</Container>

        </div>

    	<div className="product-tile_description">

    	    <Container>

    	    	<H3 text="Description" classes="h4" />

    	    	<T2 text={productData.description} />

        	</Container>

        </div>

    	<div className="product-tile_specification">

    	    <Container>

    	    	<H3 text="Specification" />

        	</Container>

        </div>

    	<div className="product-tile_performance">

    	    <Container>

    	    	<H3 text="Performance" />

        	</Container>

        </div>

      </div>
    );
  }
}

ProductTile.propTypes = {

};

ProductTile.defaultProps = {

};
