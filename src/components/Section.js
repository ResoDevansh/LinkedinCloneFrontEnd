import React from "react";
import styled from "styled-components";
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Middle from './Middle'

const Section = () => {
  return (
    <Container>
      <LeftSide/>
      <Middle/>
      <RightSide/>
    </Container>
  );
};

const Container = styled.div`
    border: 1px solid red;
  position: relative;
  top: 5em;
  left: 13vw;
  width: 80vw;
  display: grid;
  grid-template-columns: minmax(14em,min-content) minmax(45%,50%) 30%;
  column-gap: 1em;
  @media only screen and (max-width: 768px) {
    width: 90vw;
    left: 2vw;
  }
  @media only screen and (min-width: 990px) and (max-width: 1024px){
    width: 90vw;
    left: 5vw;
  }
`;

// const LeftSide = styled.div`
//   border: 1px solid red;
// `;

// const Middle = styled.div`
//   border: 1px solid blue;
// `;

// const RightSide = styled.div`
//   border: 1px solid green;
// `;

export default Section;
