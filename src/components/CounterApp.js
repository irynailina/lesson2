import React from "react";
import styled from "styled-components";

const Counter = styled.div`
  padding: 40px;
  border: 1px solid red;
  background-size: cover;
  background-image: ${props => {
    return `url(${props.image})`;
  }};
`;

export const CounterApp = ({image, count, increment, decrement }) => (
  <Counter image={image}>
    {/* //   <Counter style={{ padding: 40, border: "1px solid red" }}> */}
    <h2>{count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={() => decrement()}>Decrement</button>
  </Counter>
);
