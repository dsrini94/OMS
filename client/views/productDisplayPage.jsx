import React from 'react';
import AppBar from './../components/appBar.jsx';
import MenuBar from './../components/menuBar.jsx';
import PurchaseProduct from './../components/purchaseProductPage.jsx';

export default class ProductDisplay extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {

    return (
      <div style={{marginTop:"110px"}}>

        < PurchaseProduct handleSingleProductCheckout={this.context.handleSingleProductCheckout}  pdtObject={this.context.selectedproduct} handleCartItem={this.context.handleCartItem} handleProductCheckout={this.context.handleProductCheckout} mrp={this.context.selectedproduct.Mrp} offerPrice={this.context.selectedproduct.offerPrice} imageLink={this.context.selectedproduct.imgId + '/' + this.context.selectedproduct.imgName} productId={this.context.selectedproduct.productId} productName={this.context.selectedproduct.productName}/>

      </div>
    );
  }
}

ProductDisplay.contextTypes = {
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
