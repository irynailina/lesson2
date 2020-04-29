import React, { Component } from "react";
import styled from "styled-components";
import { CounterApp } from "./components/CounterApp";

// const DelivFruits = (props) => {
//     console.log(props);
//     return <h2>{props.delivery.apple}</h2>
// }

const Btn = styled.button`
  background-color: ${({ changeColor }) => {
    return changeColor ? "red" : "green";
  }};
`;

export class App extends Component {
  state = {
    count: 0,
    step: this.props.step || 0,
    isOpen: false
  };

  increment = () => {
    console.log(this);
    this.setState(prev => {
      return { count: prev.count + this.state.step };
    });
  };

  decrement = () => {
    console.log(this);
    if (this.state.count <= 0) return;
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  toggle = () => {
    this.setState(prev => {
      console.log(prev);
      return { isOpen: !prev.isOpen };
    });
  };

  render() {
    const { count, isOpen } = this.state;
    return (
      <>
        <Btn changeColor={isOpen} onClick={() => this.toggle()}>
          {isOpen ? "HIDE" : "SHOW"}
        </Btn>
        {isOpen && <CounterApp 
        image={this.props.img}
        increment={this.increment} 
        decrement={this.decrement} 
        count={count}/>}
      </>
    );
  }
}
