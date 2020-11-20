import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// const ButtonPrimary = styled.button`
//   background: palevioletred;
//   color: white;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;
const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

export default function StyledComponent() {
  return (
    <Wrapper>
      <Title>Hi its styled component</Title>
      <Button>Normal </Button>
      <Button primary>Primary</Button>
      <TomatoButton>Tomato Button</TomatoButton>

      <Button as="a" href="/">
        Link with Button styles
      </Button>

      <TomatoButton as="a" href="/">
        Link with Tomato Button styles
      </TomatoButton>

      <Button as={ReversedButton}>Reversed</Button>
    </Wrapper>
  );
}
