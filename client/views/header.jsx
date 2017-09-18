import React from 'react';
import AppBar from './../components/appBar.jsx';
import MenuBar from './../components/menuBar.jsx';
export default class Header extends React.Component
{
  getChildContext() {
    return {
      cartCounter: this.state.cartCounter,
      cartItem: this.state.cartItem,
      handleCartItem: this.handleCartItem,
      handleSelectedProduct: this.handleSelectedProduct,
      selectedproduct: this.state.selectedproduct,
      productCheckOut: this.state.productCheckOut,
      handleProductCheckout: this.handleProductCheckout,
      handleIncreament: this.handleIncreament,
      handleDecreament: this.handleDecreament,
      handleSingleProductCheckout:this.handleSingleProductCheckout,
      handleRemoveItem:this.handleRemoveItem
    };
  }
  constructor()
  {
    super();
    this.state = {
      cartCounter: 0,
      cartItem: [],
      selectedproduct: {},
      productCheckOut: []
    }
    this.handleCartItem = this.handleCartItem.bind(this);
    this.handleSelectedProduct = this.handleSelectedProduct.bind(this);
    this.handleProductCheckout = this.handleProductCheckout.bind(this);
    this.handleIncreament = this.handleIncreament.bind(this);
    this.handleDecreament = this.handleDecreament.bind(this);
    this.handleSingleProductCheckout = this.handleSingleProductCheckout.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.checkAvailability = this.checkAvailability.bind(this);
  }


  handleRemoveItem(cartItem, index)
  {
    var counter = this.state.cartCounter;
    counter-=1;
    cartItem.splice(index,1);
    this.setState({cartItem:cartItem,cartCounter:counter});
  }
  handleCartItem(addedCartItem)
  {
    if(this.checkAvailability(this.state.cartItem,addedCartItem) == false)
    {
      var counter = 0,
        cart = [];
      cart = this.state.cartItem;
      counter = this.state.cartCounter;
      cart.push(addedCartItem);
      counter += 1;
      this.setState({cartItem: cart, cartCounter: counter});
    }

  }


  checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val.productName === arrVal.productName;
  });
}


  handleSelectedProduct(item)
  {
    this.setState({selectedproduct: item});
    window.location = "http://localhost:1100/#/productInformation"
  }
  handleSingleProductCheckout(item)
  {
    console.log(item);
    var pdtChekout = [];
    pdtChekout.push([item]);
    console.log(pdtChekout);
    this.setState({productCheckOut: pdtChekout});
    window.location = "http://localhost:1100/#/buyProduct"
  }
  handleSingleProductCheckout(item)
  {
    console.log(item);
    var pdtChekout = [];
    pdtChekout.push([item]);
    console.log(pdtChekout);
    this.setState({productCheckOut: pdtChekout});
    window.location = "http://localhost:1100/#/buyProduct"
  }
  handleProductCheckout(item)
  {
    console.log(item);
    var pdtChekout = [];
    pdtChekout.push(item);
    console.log(pdtChekout);
    this.setState({productCheckOut: pdtChekout});
    window.location = "http://localhost:1100/#/buyProduct"
  }
  handleIncreament(cartItem, index)
  {
    if ((parseInt(cartItem[index].productQuantity) + 1) <= parseInt(cartItem[index].totalProductQuantity)) {
      cartItem[index].purchasedCost = parseInt(cartItem[index].purchasedCost) + parseInt(cartItem[index].offerPrice);
      cartItem[index].productQuantity = parseInt(cartItem[index].productQuantity) + 1;
      this.setState({cartItem: cartItem,productCheckOut: cartItem});
      console.log('+++++',this.state.productCheckOut);
    }
  }
  handleDecreament(cartItem, index)
  {
    console.log('called');
    if ((parseInt(cartItem[index].productQuantity) - 1) >= 1) {
      console.log('inside');
      cartItem[index].purchasedCost = parseInt(cartItem[index].purchasedCost) - parseInt(cartItem[index].offerPrice);
      cartItem[index].productQuantity = parseInt(cartItem[index].productQuantity) - 1;
      this.setState({cartItem: cartItem,productCheckOut: cartItem});
      console.log('+++++',this.state.productCheckOut);
    }
  }
  render()
  {
    return (
      <div>
        < AppBar/>
        < MenuBar cartCounter={this.state.cartCounter}/> {this.props.children}
      </div>
    );1100
  }
}
Header.childContextTypes = {
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
