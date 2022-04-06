import React, { Component } from 'react'

export class UseGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {

  /*    let message
        if(!this.state.isLoggedIn){
            message = <div>Welcome Rohit</div>
        }
        else{
            message =  <div>Welcome Guest </div>
        }
        return message; */

        /* return( this.state.isLoggedIn ? <div>Welcome Rohit</div>: <div>Welcome Guest</div>) */

        return this.state.isLoggedIn && <div>Welcome Rohit!</div>
    } 
}

export default UseGreeting