import React from 'react';
import Deals from './../components/Deals.jsx';
import AppBar from './../components/appBar.jsx';
import MenuBar from './../components/menuBar.jsx';

export default class DealsOfTheDay extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
      <div style={{marginTop:"110px"}}>
        < Deals handleCartItem={this.context.handleCartItem} handleSelectedProduct={this.context.handleSelectedProduct}/>
      </div>
    );
  }
}

DealsOfTheDay.contextTypes = {
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
