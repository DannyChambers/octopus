
import React, { Component } from "react";
import PropTypes from "prop-types";

//Tokens

//Arrangements

//Patterns
import Button 			from "../../02-patterns/button/index";
import TextInput 		from "../../02-patterns/text-input/index";

//Modules

//Pages

//Conponent style
import "./index.scss";

export default class QuantityBox extends Component {

  state = {
    quantity: this.props.minimum,
    available: this.props.maximum
  }

  decreaseQuantity = () => {

    if(this.state.quantity > this.props.minimum){

      this.setState({ quantity: (this.state.quantity - 1) })

    }

  }

  increaseQuantity = () => {

    if(this.state.quantity < this.props.maximum){

      this.setState({ quantity: (this.state.quantity + 1) })

    }

  }

  render() {

    //const { } = this.props;

    return (
      <div className="quantity-box">
        	
        	<label htmlFor="xyz" className="quantity-box_label">Qty</label>

        	<Button className="dec" variant="icononly" text="Decrease quantity" onClick={this.decreaseQuantity}>
        		<span className="icon">-</span>
        	</Button>

        	<TextInput id="xyz" value={this.state.quantity} />

        	<Button className="inc" variant="icononly" text="Increase quantity" onClick={this.increaseQuantity}>
        		<span className="icon">+</span>
        	</Button>

      </div>
    );
  }
}

QuantityBox.propTypes = {
  minimum: PropTypes.number,
  maximum: PropTypes.number
};

QuantityBox.defaultProps = {
  minimum: 1,
  maximum: 9999
};