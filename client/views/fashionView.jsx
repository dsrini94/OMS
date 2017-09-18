import React from 'react';
import Fashion from './../components/fashion.jsx';

export default class FashionView extends React.Component
{
  render()
  {
    return(
        <div>
          <Fashion handleCartItem={this.context.handleCartItem} handleSelectedProduct={this.context.handleSelectedProduct} />
        </div>
    );
  }
}

FashionView.contextTypes = {
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
