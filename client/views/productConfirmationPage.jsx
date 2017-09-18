import React from 'react';
import AppBar from './../components/appBar.jsx';
import MenuBar from './../components/menuBar.jsx';
import ProductConfirmationSlider from './../components/productConfirmationSlider.jsx'
export default class ProductConfirmation extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    console.log("pdt",this.context.productCheckOut);
    return (
      <div style={{marginTop:"110px"}}>
        < ProductConfirmationSlider orderDetailsObject={this.context.productCheckOut} selectedProduct={this.context.productCheckOut}/>
      </div>
    );
  }
}

ProductConfirmation.contextTypes ={
  cartCounter: React.PropTypes.number,
  handleCartItem: React.PropTypes.func,
  handleSelectedProduct: React.PropTypes.func,
  cartItem: React.PropTypes.array,
  productCheckOut: React.PropTypes.array,
  selectedproduct: React.PropTypes.object,
  handleProductCheckout: React.PropTypes.func,
  handleIncreament: React.PropTypes.func,
  handleDecreament: React.PropTypes.func,
  handleSingleProductCheckout:React.PropTypes.func
};
