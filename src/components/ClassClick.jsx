import React, { Component } from 'react'

export class ClassClick extends Component {
    changeHandler(){
        console.log("Class Btn clicked")
    }
  render() {
    return (
      <div>
          <button onClick={this.changeHandler}>Click Class</button></div>
    )
  }
}

export default ClassClick