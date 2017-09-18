import React, { Component } from 'react'
import { Grid, Menu, Segment, Card, Rating, Statistic, Icon, Button, Image } from 'semantic-ui-react'
import HeaderComponent from './headerComponent.jsx';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import {Link} from 'react-router';

const productDetails = [
{
  'imgId':'v1504074433',
  'imgName':'tv_auz1xy.jpg',
  'productName':'VU LED TV',
  'pdtRating':'3',
  'offerPrice':'50000',
  'pdtId':'12345',
  'Mrp' : '69500',
  'itemCategory':'televisions',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'50000'
},{
  'imgId':'v1504074433',
  'imgName':'tv2_hw9wwm.jpg',
  'productName':'Micromax Full HD LED TV',
  'pdtRating':'3',
  'offerPrice':'22999',
  'pdtId':'12345',
  'Mrp' : '39990',
  'itemCategory':'televisions',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'22999'
},{
  'imgId':'v1504074433',
  'imgName':'tv3_ycjpgv.jpg',
  'productName':'SONY LED TV',
  'pdtRating':'3',
  'offerPrice':'24999',
  'pdtId':'12345',
  'Mrp' : '26900',
  'itemCategory':'televisions',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'950'
},{
  'imgId':'v1504074433',
  'imgName':'tv4_jzddei.jpg',
  'productName':'SAMSUNG LED TV',
  'pdtRating':'3',
  'offerPrice':'19299',
  'pdtId':'12345',
  'Mrp' : '28900',
  'itemCategory':'televisions',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'19299'
},{
  'imgId':'v1504074433',
  'imgName':'tv5_nobd37.jpg',
  'productName':'SAMSUNG Curve ULED TV',
  'pdtRating':'3',
  'offerPrice':'64999',
  'pdtId':'12345',
  'Mrp' : '94900',
  'itemCategory':'televisions',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'64999'
},
{
  'imgId':'v1504074488',
  'imgName':'wm1_fs1et5.jpg',
  'productName':'IFB Washing Machine',
  'pdtRating':'3',
  'offerPrice':'20999',
  'pdtId':'12345',
  'Mrp' : '26990',
  'itemCategory':'washing macine',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'20999'
},
{
  'imgId':'v1504074488',
  'imgName':'wm2_l0bz03.jpg',
  'productName':'LG Washing Machine',
  'pdtRating':'3',
  'offerPrice':'22990',
  'pdtId':'12345',
  'Mrp' : '25990',
  'itemCategory':'washing macine',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'22990'
},
{
  'imgId':'v1504074488',
  'imgName':'wm3_azwacr.jpg',
  'productName':'Bosch Washing Machine',
  'pdtRating':'3',
  'offerPrice':'31990',
  'pdtId':'12345',
  'Mrp' : '34999',
  'itemCategory':'washing macine',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'31990'
},
{
  'imgId':'v1504074488',
  'imgName':'wm4_zwkmam.jpg',
  'productName':'SAMSUNG Washing Machine',
  'pdtRating':'3',
  'offerPrice':'25490',
  'pdtId':'12345',
  'Mrp' : '27790',
  'itemCategory':'washing macine',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'25490'
},
{
  'imgId':'v1504074488',
  'imgName':'wm5_vhli8e.jpg',
  'productName':'Carrier Washing Machine',
  'pdtRating':'3',
  'offerPrice':'19999',
  'pdtId':'12345',
  'Mrp' : '2290',
  'itemCategory':'washing macine',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'19999'
},
{
  'imgId':'v1504074187',
  'imgName':'rf1_zozpfx.jpg',
  'productName':'LG 190 LSingle Door',
  'pdtRating':'3',
  'offerPrice':'14599',
  'pdtId':'12345',
  'Mrp' : '15940',
  'itemCategory':'refrigerators',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'14599'
},
{
  'imgId':'v1504074187',
  'imgName':'rf2_ok7w3q.jpg',
  'productName':'Samsung 192 L Single Door',
  'pdtRating':'3',
  'offerPrice':'12099',
  'pdtId':'12345',
  'Mrp' : '14550',
  'itemCategory':'refrigerators',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'12099'
},
{
  'imgId':'v1504074187',
  'imgName':'rf3_rqskin.jpg',
  'productName':'Whirlpool 190 L Single Door',
  'pdtRating':'3',
  'offerPrice':'11990',
  'pdtId':'12345',
  'Mrp' : '13150',
  'itemCategory':'refrigerators',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'11990'
},
{
  'imgId':'v1504074187',
  'imgName':'rf4_memsvt.jpg',
  'productName':'Electrolux 190 L Double Door',
  'pdtRating':'3',
  'offerPrice':'15499',
  'pdtId':'12345',
  'Mrp' : '19990',
  'itemCategory':'refrigerators',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'15499'
},
{
  'imgId':'v1504074187',
  'imgName':'rf5_gjnwbh.jpg',
  'productName':'Whirlpool 245 L Double Door',
  'pdtRating':'3',
  'offerPrice':'19499',
  'pdtId':'12345',
  'Mrp' : '21525',
  'itemCategory':'refrigerators',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'19499'
},
{
  'imgId':'v1504074335',
  'imgName':'backpack_hm6nl0.jpg',
  'productName':'Puma Backpack',
  'pdtRating':'4',
  'offerPrice':'2150',
  'pdtId':'12345',
  'Mrp' : '2650',
  'itemCategory':'small appliances',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'2150'
},
{
  'imgId':'v1504074388',
  'imgName':'Handshower_lg1ctl.jpg',
  'productName':'Hand Shower',
  'pdtRating':'3',
  'offerPrice':'7000',
  'pdtId':'12345',
  'Mrp' : '8500',
  'itemCategory':'small appliances',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'7000'
},
{
  'imgId':'v1504074539',
  'imgName':'ironbox_cmscse.png',
  'productName':'Philips Iron Box',
  'pdtRating':'3',
  'offerPrice':'2950',
  'pdtId':'12345',
  'Mrp' : '3150',
  'itemCategory':'small appliances',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'2950'
},
{
  'imgId':'v1504074592',
  'imgName':'geyser_vqd1el.jpg',
  'productName':'Bajaj Geyser',
  'pdtRating':'3',
  'offerPrice':'2899',
  'pdtId':'12345',
  'Mrp' : '4000',
  'itemCategory':'small appliances',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'2899'
},
{
  'imgId':'v1504074667',
  'imgName':'kettle_tgfqpt.jpg',
  'productName':'Russel Hobbs Kettle',
  'pdtRating':'3',
  'offerPrice':'550',
  'pdtId':'12345',
  'Mrp' : '899',
  'itemCategory':'small appliances',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'550'
}];



export default class Appliances extends Component {
  constructor()
  {
    super();
    this.state = { activeItem: 'televisions', pdtDetails:[] }
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  componentDidMount()
  {
    var template=[];
    template.push(productDetails.map((item,i)=>{
      if(item.itemCategory=='televisions')
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
            <Menu.Item name='televisions' active={activeItem === 'televisions'} onClick={this.handleItemClick} className="MenuBarMenuItem"/>
            <Menu.Item name='washing macine' active={activeItem === 'washing macine'} onClick={this.handleItemClick} className="MenuBarMenuItem"/>
            <Menu.Item name='refrigerators' active={activeItem === 'refrigerators'} onClick={this.handleItemClick} className="MenuBarMenuItem"/>
            <Menu.Item name='small appliances' active={activeItem === 'small appliances'} onClick={this.handleItemClick} className="MenuBarMenuItem"/>
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
