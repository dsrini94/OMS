import React, { Component } from 'react'
import { Grid, Menu, Segment, Card, Rating, Statistic, Icon, Button, Image } from 'semantic-ui-react'
import HeaderComponent from './headerComponent.jsx';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import {Link} from 'react-router';

const productDetails = [
  {
    'imgId':'v1504074102',
    'imgName':'basics_pxdk5c.jpg',
    'productName':'Basics casual shirt',
    'pdtRating':'3',
    'offerPrice':'950',
    'pdtId':'12345',
    'Mrp' : '1275',
    'itemCategory':'apparels',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'950'
  },{
    'imgId':'v1504074236',
    'imgName':'shoe_qm4x9b.jpg',
    'productName':'Addidas Shoe',
    'pdtRating':'3',
    'offerPrice':'2950',
    'pdtId':'12345',
    'Mrp' : '3150',
    'itemCategory':'footwear',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'2950'
  },
  {
    'imgId':'v1504074295',
    'imgName':'tops_jhqg6o.jpg',
    'productName':'Biba Tops',
    'pdtRating':'3',
    'offerPrice':'2000',
    'pdtId':'12345',
    'Mrp' : '1150',
    'itemCategory':'apparels',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'2000'
  },
  {
    'imgId':'v1504074295',
    'imgName':'watches2_u6gtzm.jpg',
    'productName':'Fossil FS4656',
    'pdtRating':'3',
    'offerPrice':'8000',
    'pdtId':'12345',
    'Mrp' : '9495',
    'itemCategory':'watches',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'8000'
  },
  {
    'imgId':'v1504074295',
    'imgName':'watches1_w36fqq.jpg',
    'productName':'Fossil FS4835',
    'pdtRating':'3',
    'offerPrice':'8499',
    'pdtId':'12345',
    'Mrp' : '9495',
    'itemCategory':'watches',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'8499'
  },
  {
    'imgId':'v1504074295',
    'imgName':'watches3_ylzbip.jpg',
    'productName':'Casio Edifice ED4499',
    'pdtRating':'3',
    'offerPrice':'4999',
    'pdtId':'12345',
    'Mrp' : '5495',
    'itemCategory':'watches',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'4999'
  },
  {
    'imgId':'v1504074295',
    'imgName':'watches4_rrcwsz.jpg',
    'productName':'Casio Edifice',
    'pdtRating':'3',
    'offerPrice':'5499',
    'pdtId':'12345',
    'Mrp' : '5955',
    'itemCategory':'watches',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'5499'
  },
  {
    'imgId':'v1504074295',
    'imgName':'watches5_o1q02q.jpg',
    'productName':'Casio Enticer Ladies',
    'pdtRating':'3',
    'offerPrice':'3599',
    'pdtId':'12345',
    'Mrp' : '3795',
    'itemCategory':'watches',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'3599'
  },
  {
    'imgId':'v1504074295',
    'imgName':'jew2_bs1r8f.jpg',
    'productName':'Jisha 18kt Diamond',
    'pdtRating':'3',
    'offerPrice':'9999',
    'pdtId':'12345',
    'Mrp' : '12000',
    'itemCategory':'jewellery',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'9999'
  },
  {
    'imgId':'v1504074295',
    'imgName':'jew1_kfmcyr.jpg',
    'productName':'Karatcraft 7 Stone',
    'pdtRating':'3',
    'offerPrice':'3599',
    'pdtId':'12345',
    'Mrp' : '3795',
    'itemCategory':'jewellery',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'3599'
  },
  {
    'imgId':'v1504074295',
    'imgName':'jew3_obdbbp.jpg',
    'productName':'Diamond Ring',
    'pdtRating':'3',
    'offerPrice':'99999',
    'pdtId':'12345',
    'Mrp' : '120000',
    'itemCategory':'jewellery',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'99999'
  },
];



export default class Fashion extends Component {
  constructor()
  {
    super();
    this.state = { activeItem: 'apparels', pdtDetails:[] }
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  componentDidMount()
  {
    var template=[];
    template.push(productDetails.map((item,i)=>{
      if(item.itemCategory=='apparels')
      return(
      <Grid.Column key={i}>
        <Card >
          <Link to={'/productInformation'}>
          <Image src={'http://res.cloudinary.com/stackroute/image/upload/'+item.imgId+'/'+item.imgName} onClick={()=>this.props.handleSelectedProduct(item)}/></Link>
          <Card.Content>
            <Card.Header>
              {item.productName}
            </Card.Header>
            <Card.Meta>
              <span className='rating'>
                <Rating defaultRating={item.pdtRating} maxRating={5} disabled/>
              </span>
            </Card.Meta>
            <Card.Description>
              <center>
                <Statistic color='teal' size="tiny">
                  <Statistic.Value >
                    <Icon name='rupee'/>{item.offerPrice}
                  </Statistic.Value>
                  <Statistic.Label >
                    <strike>
                      <Icon name='rupee'/>{item.Mrp}
                    </strike>
                  </Statistic.Label>
                </Statistic>
              </center>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <center>
              <Button basic color="red" animated='vertical' onClick={()=>this.props.handleCartItem(item)}>
                <Button.Content hidden>
                  <Icon name='shop'/>
                </Button.Content>
                <Button.Content visible>
                  Add to Cart
                </Button.Content>
              </Button>
            </center>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
    }))
    this.setState({pdtDetails:template});
  }
  handleItemClick(e, { name }){
     this.setState({ activeItem: name })
       console.log(name);

         var template=[];
         template.push(productDetails.map((item,i)=>{
           if(item.itemCategory==name){
           return(
           <Grid.Column key={i}>
             <Card>
               <Link to={'/productInformation'}>
               <Image src={'http://res.cloudinary.com/stackroute/image/upload/'+item.imgId+'/'+item.imgName} onClick={()=>this.props.handleSelectedProduct(item)}/></Link>
               <Card.Content>
                 <Card.Header>
                   {item.productName}
                 </Card.Header>
                 <Card.Meta>
                   <span className='rating'>
                     <Rating defaultRating={item.pdtRating} maxRating={5} disabled/>
                   </span>
                 </Card.Meta>
                 <Card.Description>
                   <center>
                     <Statistic color='teal' size="tiny">
                       <Statistic.Value >
                         <Icon name='rupee'/>{item.offerPrice}
                       </Statistic.Value>
                       <Statistic.Label >
                         <strike>
                           <Icon name='rupee'/>{item.Mrp}
                         </strike>
                       </Statistic.Label>
                     </Statistic>
                   </center>
                 </Card.Description>
               </Card.Content>
               <Card.Content extra>
                 <center>
                   <Button basic color="red" animated='vertical' onClick={()=>this.props.handleCartItem(item)}>
                     <Button.Content hidden>
                       <Icon name='shop'/>
                     </Button.Content>
                     <Button.Content visible>
                       Add to Cart
                     </Button.Content>
                   </Button>
                 </center>
               </Card.Content>
             </Card>
           </Grid.Column>
         );
       }
         }))
         this.setState({pdtDetails:template});
       }
   handleCart(cart)
   {
     console.log(cart);
   }

  render() {
    const { activeItem } = this.state

    return (
      <Reveal effect="animated fadeInUp">
      <Grid style={{marginTop:"100px"}}>
        <Grid.Column width={3}>
          <Menu fluid vertical tabular>
            <Menu.Item name='apparels' active={activeItem === 'apparels'} onClick={this.handleItemClick} className="MenuBarMenuItem"/>
            <Menu.Item name='footwear' active={activeItem === 'footwear'} onClick={this.handleItemClick} className="MenuBarMenuItem"/>
            <Menu.Item name='watches' active={activeItem === 'watches'} onClick={this.handleItemClick} className="MenuBarMenuItem"/>
            <Menu.Item name='jewellery' active={activeItem === 'jewellery'} onClick={this.handleItemClick} className="MenuBarMenuItem"/>
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={13}>
          <Grid columns={4} divided padded>
            {this.state.pdtDetails}
          </Grid>
        </Grid.Column>
      </Grid>
    </Reveal>
    )
  }
}
