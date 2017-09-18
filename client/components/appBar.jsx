import React from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import {Modal, Button} from 'semantic-ui-react'
import SwipeableViews from 'react-swipeable-views';
import LoginForm from './Login2.jsx';
import SignupForm from './signup.jsx';
export default class AppBar extends React.Component
{
  constructor(prop)
  {
    super();
    this.state = {
      slideIndex: 0,
      modalOpen: false
    };
  }
  handleOpen() {
    this.setState({
      modalOpen: true
    }, function() {
      console.log("--------------->" + this.state.modalOpen);
    });
  }
  handleClose(modalOpen) {
    this.setState({modalOpen: modalOpen});
  }
  handleCustomerService()
  {
    alert('clicked');
  }
  handleTrackOrder()
  {
    alert('clicked');
  }
  handleChange(value) {
    this.setState({slideIndex: value});
  }
  render()
  {
    return (
      <div id="Appbar">
        <Menu style={{
          backgroundColor: "#e0e1e2"
        }} pointing secondary size='massive' className="Appbar">
          <Menu.Menu position='right' style={{
            marginRight: "55px"
          }}>
            <Menu.Item name='customer service' onClick={this.handleCustomerService.bind(this)} className='appBarMenuItem'/>
            <Menu.Item name='Track order' onClick={this.handleTrackOrder.bind(this)} className='appBarMenuItem'/>
            <Modal trigger={< Menu.Item name = 'SignIn' className = 'appBarMenuItem' />} closeIcon className='appBarMenuItem'>
              <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
                <div>
                  <LoginForm handleClick={this.handleChange.bind(this)}/>
                </div>
                <div>
                  <SignupForm modalOpen={this.handleClose.bind(this)} handleClick={this.handleChange.bind(this)}/>
                </div>
              </SwipeableViews>
            </Modal>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
