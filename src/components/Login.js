import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <>
      <Container>
        <Nav>
          <Icons id="btn-logo">
            <img alt="" src="/images/login-logo.svg"></img>
          </Icons>
          <IconsWrapper>
            <Icons>
              <img alt="" src="/images/discover.svg"></img>
              <span>Discover</span>
            </Icons>
            <Icons>
              <img alt="" src="/images/people.svg"></img>
              <span>People</span>
            </Icons>
            <Icons>
              <img alt="" src="/images/learning.svg"></img>
              <span>Learning</span>
            </Icons>
            <Icons>
              <img alt="" src="/images/jobs.svg"></img>
              <span>Jobs</span>
            </Icons>
          </IconsWrapper>
        </Nav>
      </Container>
    </>
  );
};

const Container = styled.div`
  img {
    display: block;
  }
`;
const Icons = styled.button`
  background-color: transparent;
  position: relative;
  max-width: 5vw;
  span {
    // display: inline-block;
    position: relative;
    top: 0.25em;
    left: 0.2em;
  }
  &:nth-child(3) {
    span {
      top: 0.1em;
      left: 0.2em;
    }
  }
`;
const IconsWrapper = styled.div`
  // border: 2px solid yellow;
  position: relative;
  left: -9.2vw;
  color: #00000099;
  display: flex;
  ${Icons} {
    // border: 1px solid red;
    margin-left: 1.2vw;
    height: 7vh;
    width: 4vw;
    text-align: center;
    font-size: 0.9em;
    img {
      margin: auto;
    }
    opacity: 0.6;
    &:hover{
      opacity: 1;
      cursor: pointer;
    }
    // background-color: pink;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1.5vh;
  #btn-logo {
    display: block;
    min-width: fit-content;
    margin-left: -5.7vw;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    img {
      height: 4.7vh;
      // border: 1px solid red;
      position: relative;
      cursor: pointer;
      display: block;
    }
  }
`;

export default Login;
