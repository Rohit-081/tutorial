import React from "react";

const Greet = ({name , heroname}) => {
    console.log()
    return (
        <div>
            <h1>Hello {name} a.k.a {heroname}</h1>
             
        </div>
    )
  /*    return React.createElement('div', {id: 'hello', className: "dummyClass"}, React.createElement('h1', null, 'Hello Rohit')); */
}

export default Greet;