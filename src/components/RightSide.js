import React from "react";
import styled from "styled-components";

const RightSide = () => {
  return (
    <Container>
      <Heading>
        LinkedIn News <img src="/images/isymbol.svg" />
      </Heading>
      <Content>
        <ul>
          <li>
            <p>Top newsletters to follow</p>
            <p>Top news &#9679; 2168 readers</p>
          </li>
          <li>
            <p>Fresh IPO funding falls sharply</p>
            <p>1d ago</p>
          </li>
          <li>
            <p>Shorter wait for US visas</p>
            <p>3d ago &#9679; 5164 readers</p>
          </li>
          <li>
            <p>Startups upbeat about hiring</p>
            <p>3d ago &#9679; 2674 readers</p>
          </li>
          <li>
            <p>Alibaba to split,ready spinoffs</p>
            <p>3d ago &#9679; 5552 readers</p>
          </li>
        </ul>
        <p id="more">Show more &#9661; </p>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #dfdbda;
  border-radius: .5em;
  background-color: white;
  padding-right: .5em;
  ul {
    margin: 0 0 0 10%;
    // list-style-position: inside;
    list-style-type: circle;
    font-weight: 500;
    transition: all 100ms ease-in;
  }
  @media only screen and (max-width: 991px){
    display: none;
  }
`;

const Heading = styled.div`
  //   border: 1px solid purple;
  padding-left: 0.5em;
  padding-top: 0.6em;
  display: flex;
  justify-content: space-between;
  font-size: 1.1em;
  font-weight: 500;
  img {
    cursor: pointer;
  }
`;

const Content = styled.div`
  //   border: 1px solid red;
  padding: 0.6em 0.6em;
  li {
    // border: 1px solid red;
    margin-top: .2em;
    width: 100%;
    p {
      font-size: 0.9em;
    }
    &:hover {
      cursor: pointer;
      background-color: #efedec;
    }
    p:nth-child(2) {
      //   border: 1px solid pink;
      font-weight: normal;
      font-size: 0.8em;
    }
  }
  #more {
    // border: 1px solid red;
    width: fit-content;
    margin-left: 10%;
    margin-top: 0.5em;
    font-size: 0.9em;
    color: grey;
    font-weight: 500;
    &:hover {
      cursor: pointer;
      background-color: #efedec;
    }
  }
`;
export default RightSide;
