import React from 'react';
import { Header, Segment,List } from 'semantic-ui-react';

export default class Footer extends React.Component
{
  render()
  {
    return(
      <div className="Footer" style={{marginTop:"30px"}}>
          <Segment clearing inverted>
            <img src="http://res.cloudinary.com/stackroute/image/upload/v1505209904/logo2_jquour.png" style={{marginbottom:"0px",height:"160px",paddingLeft:"110px",marginTop:"-120px",position:"absolute"}}/>
          <br />
          <List bulleted horizontal style={{marginLeft:"70px",marginTop:"20px"}}>
            <List.Item as='a' style={{color:"white"}}>Home</List.Item>
            <List.Item as='a' style={{color:"white"}}>Blog</List.Item>
            <List.Item as='a' style={{color:"white"}}>Pricing</List.Item>
            <List.Item as='a' style={{color:"white"}}>About</List.Item>
            <List.Item as='a' style={{color:"white"}}>FAQ</List.Item>
            <List.Item as='a' style={{color:"white"}}>Contact</List.Item>
          </List>
          <br />
          <h5 style={{marginLeft:"70px",color:"#d1d3d6"}}>OMS @ 2016 </h5>
          </Segment>
      </div>
    );
  }
}
