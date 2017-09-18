import React from 'react';
import {
  Grid,
  Image,
  Header,
  Card,
  Icon,
  Rating,
  Statistic,
  Button
} from 'semantic-ui-react';
import HeaderComponent from './headerComponent.jsx';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import {Link} from 'react-router-dom';

const productDetails = [
  {
    'imgId': 'v1504073953',
    'imgName': 'bluetoothspeaker_gwmorx.jpg',
    'productName': 'Bluetooth Speakers',
    'productRating': '3',
    'offerPrice': '2500',
    'productId': 'PR10000001',
    'Mrp': '3500',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'2500'
  }, {
    'imgId': 'v1504074005',
    'imgName': 'bottle_walkc6.jpg',
    'productName': 'Camelbak water bottle',
    'productRating': '3',
    'offerPrice': '150',
    'productId': 'PR10000002',
    'Mrp': '275',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'150'
  }, {
    'imgId': 'v1504074102',
    'imgName': 'basics_pxdk5c.jpg',
    'productName': 'Basics casual shirt',
    'productRating': '3',
    'offerPrice': '950',
    'productId': 'PR10000003',
    'Mrp': '1275',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'950'
  }, {
    'imgId': 'v1504074144',
    'imgName': 'cam_sf3jyb.jpg',
    'productName': 'Canon EOS 5D | 30.4 MP',
    'productRating': '3',
    'offerPrice': '25990',
    'productId': 'PR10000004',
    'Mrp': '29990',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'25990'
  }, {
    'imgId': 'v1504074236',
    'imgName': 'addshoe_ozw145.jpg',
    'productName': 'Addidas Shoe',
    'productRating': '3',
    'offerPrice': '2950',
    'productId': 'PR10000005',
    'Mrp': '3150',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'2950'
  }, {
    'imgId': 'v1504074295',
    'imgName': 'tops_jhqg6o.jpg',
    'productName': 'Biba Tops',
    'productRating': '3',
    'offerPrice': '2000',
    'productId': 'PR10000006',
    'Mrp': '1150',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'2000'
  }, {
    'imgId': 'v1504074187',
    'imgName': 'prams_lhl9xl.jpg',
    'productName': 'Baby pram',
    'productRating': '3',
    'offerPrice': '2050',
    'productId': 'PR10000007',
    'Mrp': '3150',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'2050'
  }, {
    'imgId': 'v1504074335',
    'imgName': 'backpack_hm6nl0.jpg',
    'productName': 'Puma Backpack',
    'productRating': '4',
    'offerPrice': '2150',
    'productId': 'PR10000008',
    'Mrp': '2650',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'2150'
  }, {
    'imgId': 'v1504074388',
    'imgName': 'Handshower_lg1ctl.jpg',
    'productName': 'Hand Shower',
    'productRating': '3',
    'offerPrice': '700',
    'productId': 'PR10000009',
    'Mrp': '850',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'700'
  }, {
    'imgId': 'v1504074433',
    'imgName': 'flask_fei692.jpg',
    'productName': 'Flask',
    'productRating': '3',
    'offerPrice': '500',
    'productId': '12345',
    'Mrp': '695',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'500'
  }, {
    'imgId': 'v1504074488',
    'imgName': '212_rrjyfp.jpg',
    'productName': '212 Body Spray',
    'productRating': '3',
    'offerPrice': '350',
    'productId': '12345',
    'Mrp': '700',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'350'
  }, {
    'imgId': 'v1504074539',
    'imgName': 'ironbox_cmscse.png',
    'productName': 'Philips Iron Box',
    'productRating': '3',
    'offerPrice': '2950',
    'productId': '12345',
    'Mrp': '3150',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'2950'
  }, {
    'imgId': 'v1504074592',
    'imgName': 'ear_yfmy89.jpg',
    'productName': 'Philips Earphones',
    'productRating': '3',
    'offerPrice': '2500',
    'productId': '12345',
    'Mrp': '3500',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'2500'
  }, {
    'imgId': 'v1504074632',
    'imgName': 'hardisk_ykgyyu.jpg',
    'productName': 'Seagate 1TB Hard Disk',
    'productRating': '3',
    'offerPrice': '5500',
    'productId': '12345',
    'Mrp': '7500',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'5500'
  }, {
    'imgId': 'v1504074667',
    'imgName': 'kettle_tgfqpt.jpg',
    'productName': 'Russel Hobbs Kettle',
    'productRating': '3',
    'offerPrice': '550',
    'productId': '12345',
    'Mrp': '899',
    'totalProductQuantity':'5',
    'productQuantity':'1',
    'purchasedCost':'550'
  }
];

export default class Deals extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      selectedproduct: [],
      cartNo: ''
    }
    this.handleCart = this.handleCart.bind(this);
  }


  componentDidMount()
  {
    var template = [];
    template.push(productDetails.map((item, i) => {
      return (
        <Grid.Column key={i}>
          <Card>
            <Image src={'http://res.cloudinary.com/stackroute/image/upload/' + item.imgId + '/' + item.imgName} onClick={()=>this.props.handleSelectedProduct(item)} className="ImagePointer"/>
            <Card.Content>
              <Card.Header>
                {item.productName}
              </Card.Header>
              <Card.Meta>
                <span className='rating'>
                  <Rating defaultRating={item.productRating} maxRating={5} disabled/>
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
    this.setState({productDetails: template});
  }
  handleCart(cart)
  {
    this.props.cartCounter += 1;
    console.log(this.props.cartCounter);
  }
  render()
  {

    return (
      <Reveal effect="animated fadeInUp">
        <div>
          <div style={{
            marginTop: "25px",
            marginBottom: "25px"
          }}>
            <HeaderComponent heading="Deals of the Day"/>
          </div>
          <div>
            <Grid columns={5} divided padded>
              {this.state.productDetails}
            </Grid>
          </div>
        </div>
      </Reveal>
    );
  }
}
