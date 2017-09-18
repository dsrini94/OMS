import React from 'react';
import {Table, Button, Icon, Grid, Header} from 'semantic-ui-react';
export default class OrderVerification extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      productTable: [],
      cartItem:[],
      counter:1
    }
  }
  componentWillReceiveProps()
  {
    var totalCost=0,cartArray = [];
    cartArray.push(this.props.cartItem.map((item, i) => {
      totalCost+=parseInt(item.purchasedCost);
      return (
        <Table.Row>
          <Table.Cell>{item.productName}</Table.Cell>
          <Table.Cell>
            <div>
              <Button icon color='blue' style={{
                marginRight: "10px"
              }} size="tiny" onClick={()=>this.props.handleIncreament(this.props.cartItem,i)}>
                <Icon name='add'/>
              </Button>
              {item.productQuantity}
              <Button icon color='orange' style={{
                marginLeft: "10px"
              }} size="tiny" onClick={()=>this.props.handleDecreament(this.props.cartItem,i)}>
                <Icon name='minus'/>
              </Button>
            </div>
          </Table.Cell>
          <Table.Cell>{item.offerPrice}</Table.Cell>
          <Table.Cell>{item.purchasedCost}</Table.Cell>
          <Table.Cell >
            <Button icon color='' onClick={()=>this.props.handleRemoveItem(this.props.cartItem,i)}>
              <Icon name='remove'/>
            </Button>
          </Table.Cell>
        </Table.Row>
      );
    }));
    this.setState({productTable: cartArray,totalAmount:totalCost});
  }
  render()
  {
    return (
      <div>
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as='h3' block inverted style={{
              marginTop: "25px"
            }}>
              Shopping Cart
            </Header>
            <Table striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Product Name</Table.HeaderCell>
                  <Table.HeaderCell>Product Quantity</Table.HeaderCell>
                  <Table.HeaderCell>Product Price</Table.HeaderCell>
                  <Table.HeaderCell>Total Amount</Table.HeaderCell>
                <Table.HeaderCell >Delete Product</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.productTable}
              </Table.Body>
            </Table>
            <center>
            <Button animated='fade' onClick={()=>this.props.handleProductCheckout(this.props.cartItem)}>
              <Button.Content visible>
                Checkout Cart
              </Button.Content>
              <Button.Content hidden>
                <Icon name='rupee' />{this.state.totalAmount}
              </Button.Content>
            </Button>
          </center>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
