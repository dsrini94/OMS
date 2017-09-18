import React from 'react';
import Electronics from './../components/electronics.jsx';

export default class ElectronicsView extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    console.log(this.context);
    return(
        <div>
          <Electronics handleCartItem={this.context.handleCartItem} handleSelectedProduct={this.context.handleSelectedProduct}/>
        </div>
    );
  }
}

ElectronicsView.contextTypes = {
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
