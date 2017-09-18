import React from 'react';
import {
  Dropdown,
  Icon,
  Menu,
  Input,
  Label,
  Divider
} from 'semantic-ui-react';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import {Link} from 'react-router';
export default class MenuBar extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      activeItem: 'home'
    }
  }
  handleItemClick(e, {name})
  {
    this.setState({activeItem: name});
  }
  render()
  {
    // <Menu.Item as={Link} to='/home' />
    const activeItem = this.state.activeItem;
    return (
      <div className="Menubar">
        <Menu secondary style={{
          paddingLeft: "130px",
          marginBottom: "0px"
        }} size="huge">
          <Menu.Item size='massive'></Menu.Item>
            <Menu.Item as={Link} to='/electronics' className="MenuBarMenuItem" color={'red'} name='electronics' onClick={this.handleItemClick.bind(this)}>
              Electronics
            </Menu.Item>
            <Menu.Item as={Link} to='/fashion' className="MenuBarMenuItem" color={'red'} name='fashion' onClick={this.handleItemClick.bind(this)}>
              Fashion
            </Menu.Item>
            <Menu.Item as={Link} to='/appliances' className="MenuBarMenuItem" color={'red'} name='electronics' onClick={this.handleItemClick.bind(this)}>
              Appliances
            </Menu.Item>
            <Menu.Item as={Link} to='/deals' className="MenuBarMenuItem" color={'red'} name='fashion' onClick={this.handleItemClick.bind(this)}>
              Deals of the Day
            </Menu.Item>
            <Menu.Menu position="center">
          <Menu.Item style={{
            height: "35px",
            marginTop: "6px",
          }}>
            <Input icon={< Icon name = 'search' inverted circular link size = "small" />} style={{ marginBottom: "2px"}} placeholder='Search Products'/>
          </Menu.Item>
          <Menu.Item as={Link} to='/cartItem' style={{
            marginTop: "16px"
          }}>
            <Icon name='shop'/>
          <Label color='red' floating>{this.props.cartCounter}</Label>
          </Menu.Item>
        </Menu.Menu>
        </Menu>
        <Link to={'/'}>
        <Reveal effect="animated fadeInLeft">
          <img src="http://res.cloudinary.com/stackroute/image/upload/v1505209904/logo1_twx5vv.png" style={{
            marginbottom: "0px",
            height: "145px",
            paddingLeft: "30px",
            marginTop: "-130px",
            position: "absolute"
          }}/>
        </Reveal>
      </Link>
      </div>
    );
  }
}
