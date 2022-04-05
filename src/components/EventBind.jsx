import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          message: 'Hello'
       }
       /* this.changeHandler = this.changeHandler.bind(this); */
     }
     /* changeHandler(){
         this.setState({
             message: 'Good Bye'
         })
     } */
     changeHandler = () => {
         this.setState({
             message: 'Good Bye'
         })
     }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
         {/*  <button onClick={this.changeHandler.bind(this)}>Click</button> */}
          {/* <button onClick={() => this.changeHandler}>Click</button> */}
          <button onClick={this.changeHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind