import React from 'react';
import Appliances from './../components/appliances.jsx';
import AppBar from './../components/appBar.jsx';
import MenuBar from './../components/menuBar.jsx';

export default class AppliancesView extends React.Component
{
  render()
  {
    return(
        <div>
          <Appliances handleCartItem={this.context.handleCartItem} handleSelectedProduct={this.context.handleSelectedProduct}/>
        </div>
    );
  }
}

AppliancesView.contextTypes = {
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
