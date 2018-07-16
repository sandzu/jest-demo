import React, {Component, Fragment} from "react";

class Foo extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <h1>  foo </h1>
    );
  }
}

export default Foo;

// fragment would allow us to return a list of elements by wrapping everything in a fragment element
