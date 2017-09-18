import React, {Component} from 'react'
import {  Button,  Header,  Icon,  Modal,  Image,  Grid} from 'semantic-ui-react'
import {Checkbox, Form, Radio, Select} from 'semantic-ui-react'
import {Input, Segment, Label, Dropdown} from 'semantic-ui-react'

const options = [  { key: 'm',text: 'Male', value: 'male', icon: "man"}, {key: 'f', text: 'Female', value: 'female', icon: "woman"}]

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  email(event) {
    this.setState({value3: event.target.value});
  }
  password(event) {
    this.setState({value5: event.target.value});
  }

  handleSubmit(event) {
    alert('A email was submitted: ' + this.state.value3);
    this.setState({modalOpen:false})
  }

  render() {
    return (
      <Segment style={{height:"500px"}} inverted>
        <Image fluid style={{position: "absolute", left: 0, top: 0, height:"500px"}} src="http://res.cloudinary.com/stackroute/image/upload/v1504098478/stones_v3fizh.jpg"/>
        <Grid textAlign='center' style={{ height: '100%'  }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }} textAlign='center'>
          <Segment className="LoginSegment" style={{color:"white"}}>
            <Header as='h2' color='teal' textAlign='center'> {' '}Log-in to your account
            </Header>
            <br/>
            <br/>
            <br/>
            <form size='large' onSubmit={this.handleSubmit.bind(this)}>
                <Form.Input inverted transparent fluid icon='user' iconPosition='left' type="email" required="true" placeholder='E-mail address' onChange={this.email.bind(this)}/>
                <br/>
                <br/>
                <Form.Input inverted transparent fluid icon='lock' iconPosition='left' type="password" required="true" placeholder='Password' type='password' onChange={this.password.bind(this)}/>
                <br/>
                <br/>
                <Button type="submit" value="Submit" color='teal' fluid size='large'>Login</Button>
                <br/>
            </form>
            <Button color='teal' fluid size='large' onClick={this.props.handleClick.bind(this,1)}><Icon name='external share' />New User</Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}
