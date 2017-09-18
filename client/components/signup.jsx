import React, {Component} from 'react'
import {  Button,  Header,  Icon,  Modal,  Image,  Grid} from 'semantic-ui-react'
import {Checkbox, Form, Radio, Select} from 'semantic-ui-react'
import {Input, Segment, Label, Dropdown} from 'semantic-ui-react'

const options = [  { key: 'm',text: 'M a l e', value: 'male', icon: "man"}, {key: 'f', text: 'F e m a l e', value: 'female', icon: "woman"}]

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fname(event) {
    this.setState({value: event.target.value});
  }

  lname(event) {
    this.setState({value2: event.target.value});
  }

  email(event) {
    this.setState({value3: event.target.value});
  }

  mobile(event) {
    this.setState({value4: event.target.value});
  }

  password(event) {
    this.setState({value5: event.target.value});
  }

  rePassword(event) {
    this.setState({value6: event.target.value});
  }

  handleSubmit() {
    this.setState({modalOpen: false});
    this.props.modalOpen(this.state.modalOpen);
    console.log(this.state.modalOpen);
    // var signupForm = {
    //   'firstName': this.state.value,
    //   'lastName': this.state.value2,
    //   'email': this.state.value3,
    //   'mnum': this.state.value4,
    //   'password': this.state.value5
    // }
    //console.log(signupForm);
  }
  checkPassword() {
    var password = this.state.value5;
    if (password.match("^[A-Za-z]+[0-9]+$")) {} else {
      alert('Password should be alphanumeric')
    }
  }
  checkRePassword() {
    var password = this.state.value5;
    var rePassword = this.state.value6;
    console.log(password);
    console.log(rePassword);
    if (password != rePassword) {
      alert('Password and Confirm Password should be same');
    } else {}
  }

    render() {
    return (
      <Segment style={{height:"500px"}} inverted>
        <Image fluid style={{position: "absolute", left: 0, top: 0, height:"500px"}} src="http://res.cloudinary.com/stackroute/image/upload/v1504098478/stones_v3fizh.jpg"/>
        <Grid textAlign='center'  style={{marginTop:"15px"}} >
          <Grid.Column style={{ maxWidth: 450 }}>
          <Segment className="SignUpSegment" style={{color:"white"}}>
            <Header as='h2' color='teal' textAlign='center'> {' '}SignUp
            </Header>
            <br/>
            <br/>
            <Form size='large' onSubmit={this.handleSubmit}>
            <Form.Group widths='equal' inline>
                <Form.Input inverted transparent fluid icon='user' iconPosition='left' placeholder='First Name' type='text' onChange={this.fname.bind(this)} required={true}/>
              <Form.Input inverted transparent fluid icon='user' iconPosition='left' placeholder='Last Name' type='text' onChange={this.password.bind(this)} required={true}/>
            </Form.Group>
                <br/>
              <Form.Input inverted transparent fluid icon='mail' iconPosition='left' placeholder='E-mail address' type='email' onChange={this.email.bind(this)} required={true}/>
                <br/>
                <Form.Group unstackable widths={2} inline>
                <Form.Input inverted transparent fluid icon='phone' iconPosition='left' placeholder='Mobile' type='Number' onChange={this.password.bind(this)} required={true}/>
                <Dropdown inline options={options} defaultValue={options[0].value} />
                </Form.Group>
                <br/>
                <Form.Group widths='equal' inline>
                <Form.Input inverted transparent fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={this.password.bind(this)} required={true}/>
              <Form.Input inverted transparent fluid icon='lock' iconPosition='left' placeholder='Confirm Password' type='password' onChange={this.password.bind(this)} required={true}/>
                </Form.Group>
                <br/>
                <Button type="submit" value="Submit" color='teal' fluid size='medium'>Register</Button>
                <br/>
            </Form>
            <Button color='grey' fluid size='medium' onClick={this.props.handleClick.bind(this,0)}><Icon name='reply' />Already A User !</Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}
