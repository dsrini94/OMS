import React, { Component } from 'react'
import { Grid, Menu, Segment, Card, Rating, Statistic, Icon, Button, Image } from 'semantic-ui-react'
import HeaderComponent from './headerComponent.jsx';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import {Link} from 'react-router';

const productDetails = [{
  'imgId':'v1504073953',
  'imgName':'bluetoothspeaker_gwmorx.jpg',
  'productName':'Bluetooth Speakers',
  'pdtRating':'3',
  'offerPrice':'2500',
  'pdtId':'12345',
  'Mrp' : '3500',
  'itemCategory':'computer peripherals',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'2500'
},{
  'imgId':'v1504073953',
  'imgName':'monitor_clh79t.jpg',
  'productName':'Monitor',
  'pdtRating':'4',
  'offerPrice':'24999',
  'pdtId':'12345',
  'Mrp' : '35000',
  'itemCategory':'computer peripherals',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'24999'
},{
  'imgId':'v1504073953',
  'imgName':'maxresdefault_hlqm8l.jpg',
  'productName':'Apple-Mouse',
  'pdtRating':'3',
  'offerPrice':'3999',
  'pdtId':'12345',
  'Mrp' : '4500',
  'itemCategory':'computer peripherals',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'50000'
},{
  'imgId':'v1504073953',
  'imgName':'maxresdefault_1_lvp3qj.jpg',
  'productName':'Apple-Keyboard',
  'pdtRating':'4',
  'offerPrice':'4999',
  'pdtId':'12345',
  'Mrp' : '6500',
  'itemCategory':'computer peripherals',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'4999'
},{
  'imgId':'v1504073953',
  'imgName':'hp-pendrive_n6h9cc.jpg',
  'productName':'HP-Pendrive',
  'pdtRating':'4',
  'offerPrice':'2500',
  'pdtId':'12345',
  'Mrp' : '3500',
  'itemCategory':'computer peripherals',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'2500'
},
{
  'imgId':'v1504074005',
  'imgName':'iphone7_rw5272.jpg',
  'productName':'Apple iphone 7',
  'pdtRating':'3',
  'offerPrice':'49999',
  'pdtId':'12345',
  'Mrp' : '60000',
  'itemCategory':'mobiles',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'49999'
},{
  'imgId':'v1504074102',
  'imgName':'samsung-S8_yxmjou.jpg',
  'productName':'Samsung S8',
  'pdtRating':'3',
  'offerPrice':'42999',
  'pdtId':'12345',
  'Mrp' : '55000',
  'itemCategory':'mobiles',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'50000'
},{
  'imgId':'v1504074005',
  'imgName':'iphone6_v0exyj.jpg',
  'productName':'Apple iphone 6',
  'pdtRating':'3',
  'offerPrice':'23200',
  'pdtId':'12345',
  'Mrp' : '32000',
  'itemCategory':'mobiles',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'23200'
},{
  'imgId':'v1504074102',
  'imgName':'lenovo_gehojr.png',
  'productName':'Lenovo K5 Note',
  'pdtRating':'3',
  'offerPrice':'10999',
  'pdtId':'12345',
  'Mrp' : '15000',
  'itemCategory':'mobiles',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'10999'
},{
  'imgId':'v1504074005',
  'imgName':'moto_g5_r5d6fs.jpg',
  'productName':'Moto G5 Plus',
  'pdtRating':'3',
  'offerPrice':'9999',
  'pdtId':'12345',
  'Mrp' : '14500',
  'itemCategory':'mobiles',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'9999'
},{
  'imgId':'v1504074005',
  'imgName':'redmi_fn9qfz.jpg',
  'productName':'Redmi Note 4',
  'pdtRating':'3',
  'offerPrice':'10999',
  'pdtId':'12345',
  'Mrp' : '12000',
  'itemCategory':'mobiles',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'10999'
},
{
  'imgId':'v1504074144',
  'imgName':'cam_sf3jyb.jpg',
  'productName':'Canon EOS 5D | 30.4 MP',
  'pdtRating':'3',
  'offerPrice':'25990',
  'pdtId':'12345',
  'Mrp' : '29990',
  'itemCategory':'camera',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'25990'
},
{
  'imgId':'v1504074144',
  'imgName':'nikon_bjugln.jpg',
  'productName':'Nikon D3400 DSLR',
  'pdtRating':'3',
  'offerPrice':'35000',
  'pdtId':'12345',
  'Mrp' : '47450',
  'itemCategory':'camera',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'35000'
},
{
  'imgId':'v1504074144',
  'imgName':'microsoft_vrjalk.jpg',
  'productName':'Microsoft',
  'pdtRating':'3',
  'offerPrice':'84999',
  'pdtId':'12345',
  'Mrp' : '130000',
  'itemCategory':'laptop',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'84999'
},
{
  'imgId':'v1504074144',
  'imgName':'macbook_f7osbd.jpg',
  'productName':'Macbook Pro',
  'pdtRating':'3',
  'offerPrice':'74998',
  'pdtId':'12345',
  'Mrp' : '102999',
  'itemCategory':'laptop',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'50000'
},
{
  'imgId':'v1504074144',
  'imgName':'dell_z11oyx.jpg',
  'productName':'Dell Inspiron',
  'pdtRating':'3',
  'offerPrice':'42999',
  'pdtId':'12345',
  'Mrp' : '60000',
  'itemCategory':'laptop',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'42999'
},
{
  'imgId':'v1504074144',
  'imgName':'hp_b6dbqx.jpg',
  'productName':'HP Probook',
  'pdtRating':'3',
  'offerPrice':'52000',
  'pdtId':'12345',
  'Mrp' : '72000',
  'itemCategory':'laptop',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'52000'
},
{
  'imgId':'v1504074144',
  'imgName':'acer_lkp7oa.jpg',
  'productName':'Acer',
  'pdtRating':'3',
  'offerPrice':'39999',
  'pdtId':'12345',
  'Mrp' : '58000',
  'itemCategory':'laptop',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'50000'
},
{
  'imgId':'v1504074236',
  'imgName':'ac_gnat77.jpg',
  'productName':'Onida AC',
  'pdtRating':'3',
  'offerPrice':'14999',
  'pdtId':'12345',
  'Mrp' : '20000',
  'itemCategory':'home appliances',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'14999'
},
{
  'imgId':'v1504074187',
  'imgName':'appliance_wzaltk.jpg',
  'productName':'Juicer-Mixer',
  'pdtRating':'3',
  'offerPrice':'2050',
  'pdtId':'12345',
  'Mrp' : '3150',
  'itemCategory':'home appliances',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'2050'
},
{
  'imgId':'v1504074335',
  'imgName':'backpack_hm6nl0.jpg',
  'productName':'Puma Backpack',
  'pdtRating':'4',
  'offerPrice':'2150',
  'pdtId':'12345',
  'Mrp' : '2650',
  'itemCategory':'computer peripherals',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'50000'
},
{
  'imgId':'v1504074388',
  'imgName':'Handshower_lg1ctl.jpg',
  'productName':'Hand Shower',
  'pdtRating':'3',
  'offerPrice':'7000',
  'pdtId':'12345',
  'Mrp' : '8500',
  'itemCategory':'home appliances',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'7000'
},
{
  'imgId':'v1504074433',
  'imgName':'tv_auz1xy.jpg',
  'productName':'LED TV',
  'pdtRating':'3',
  'offerPrice':'50000',
  'pdtId':'12345',
  'Mrp' : '69500',
  'itemCategory':'home appliances',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'50000'
},
{
  'imgId':'v1504074488',
  'imgName':'washingMachine_uixrt3.jpg',
  'productName':'Washing Machine',
  'pdtRating':'3',
  'offerPrice':'4599',
  'pdtId':'12345',
  'Mrp' : '7000',
  'itemCategory':'home appliances',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'50000'
},
{
  'imgId':'v1504074539',
  'imgName':'ironbox_cmscse.png',
  'productName':'Philips Iron Box',
  'pdtRating':'3',
  'offerPrice':'2950',
  'pdtId':'12345',
  'Mrp' : '3150',
  'itemCategory':'home appliances',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'2950'
},
{
  'imgId':'v1504074592',
  'imgName':'ear_yfmy89.jpg',
  'productName':'Philips Earphones',
  'pdtRating':'3',
  'offerPrice':'2500',
  'pdtId':'12345',
  'Mrp' : '3500',
  'itemCategory':'computer peripherals',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'2500'
},
{
  'imgId':'v1504074632',
  'imgName':'hardisk_ykgyyu.jpg',
  'productName':'Seagate 1TB Hard Disk',
  'pdtRating':'3',
  'offerPrice':'5500',
  'pdtId':'12345',
  'Mrp' : '7500',
  'itemCategory':'computer peripherals',
  'totalProductQuantity':'5',
  'productQuantity':'1',
  'purchasedCost':'5500'
}];



export default class Electronics extends Component {
  constructor()
  {
    super();
    this.state = { activeItem: 'mobiles', pdtDetails:[] }
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  componentDidMount()
  {
    var template=[];
    template.push(productDetails.map((item,i)=>{
      if(item.itemCategory=='mobiles')
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

  render() {
    const { activeItem } = this.state

    return (
      <Reveal effect="animated fadeInUp">
      <Grid style={{marginTop:"100px"}}>
        <Grid.Column width={3}>
          <Menu fluid vertical tabular>
            <Menu.Item name='mobiles' active={activeItem === 'mobiles'} onClick={this.handleItemClick} className="MenuBarMenuItem"/>
            <Menu.Item name='laptop' active={activeItem === 'laptop'} onClick={this.handleItemClick} className="MenuBarMenuItem"/>
            <Menu.Item name='camera' active={activeItem === 'camera'} onClick={this.handleItemClick} className="MenuBarMenuItem"/>
            <Menu.Item name='computer peripherals' active={activeItem === 'computer peripherals'} onClick={this.handleItemClick} className="MenuBarMenuItem"/>
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
