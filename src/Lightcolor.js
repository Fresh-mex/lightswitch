import React, { Component } from 'react';




class Lightcolor extends Component{
  constructor(props){
    super(props)
      this.state ={
        light: 'off'
        // color: [{"off", "on"}]
      }
    }

    lightToggle(){
      let { light } = this.state

    let newLight = light === 'off' ? 'on': 'off'

      // if (light === "light") {
      //   light = "on"
      // } else {
      //   light = "off"
      // }

      this.setState({light: newLight})

   }


  render(){
    let { light } = this.state



return (
  <div onClick={this.lightToggle.bind(this)}>
   <h1 className="box">{light}</h1>
  </div>
    )
  }
}





export default Lightcolor;
