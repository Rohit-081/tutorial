import React, { Component } from 'react'

export class NameList extends Component {
    
  render() {
     const names = [{id:1, name:'Bruce'},{ id:2, name:'Clark'} , { id: 3, name:'Diana'}];
     const nameList =  names.map(name => <h2 key={name.id}>{name.name}</h2>);
    return (
      <div>{
         nameList
          }</div>
    )
  }
}

export default NameList