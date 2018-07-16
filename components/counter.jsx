import React, { Component } from 'react';
import Foo from './foo';



class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {count: 0};
    this.addOne = this.addOne.bind(this);
    this.makeFoo = this.makeFoo.bind(this);
  }

  makeFoo(){
    let returnArr = [];
    for(let i = 0; i < this.state.count; i++){
      returnArr.push(<Foo key={i}/>);
    }
    return returnArr;
  }

  addOne(){
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  }

  render(){
    return (
      <div>
        <p> count: {this.state.count}</p>
        <button  onClick={this.addOne}></button>
        {this.makeFoo()}
      </div>

    );
  }

}

export default Counter;

// to test, we need enzyme as well as the appropriate enzyme adapter ( enzyme-adapter-react-16)
