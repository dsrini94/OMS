import React from 'react';
import OrderVerification from './../components/orderVerification.jsx';
import AppBar from './../components/appBar.jsx';
import MenuBar from './../components/menuBar.jsx';
export default class CartItem extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      cartCounter: 0,
    }
  }
  render() {
    return (
      <div style={{marginTop:"110px"}}>
        < OrderVerification handleRemoveItem={this.context.handleRemoveItem} handleIncreament={this.context.handleIncreament} handleDecreament={this.context.handleDecreament} cartItem={this.context.cartItem} handleProductCheckout={this.context.handleProductCheckout}/>
      </div>
    );
  }
}
CartItem.contextTypes = {
  cartCounter: React.PropTypes.number,
  handleCartItem: React.PropTypes.func,
  handleSelectedProduct: React.PropTypes.func,
  cartItem: React.PropTypes.array,
  productCheckOut: React.PropTypes.array,
  selectedproduct: React.PropTypes.object,
  handleProductCheckout: React.PropTypes.func,
  handleIncreament: React.PropTypes.func,
  handleDecreament: React.PropTypes.func,
  handleSingleProductCheckout:React.PropTypes.func,
  handleRemoveItem:React.PropTypes.func
};
