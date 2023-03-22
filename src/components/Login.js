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
          <Bar />
        </Nav>
        <JoinNow>Join now</JoinNow>
        <SignIn>Sign in</SignIn>
        <Content>
          <Heading>
            Welcome to your <br /> professional community
          </Heading>
          <Form>
            <label htmlFor="email">Email or phone</label>
            <input id="email" type="email"></input>
            <br></br>
            <label htmlFor="password">Password</label>
            <input id="password" type="password"></input>
            <ForgotPassword>Forgot password?</ForgotPassword>
            <SignInButton>Sign in</SignInButton>
            <Line>
              <hr id="first-line" />
              <span>or</span>
              <hr id="second-line" />
            </Line>
            <Google>
              <img src="/images/google.svg"></img>Sign in with Google
            </Google>
          </Form>
          <BgImage></BgImage>
        </Content>
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
const Content = styled.div`
  @media only screen and (min-width: 1000px) and (max-width: 1300px) {
    // border: 2px solid red;
    position: relative;
    // padding-left: -10vw;
    left: -13vw;
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    position: relative;
    left: -12vw;
  }
  @media only screen and (max-width: 768px) {
    position: relative;
    left: -11vw;
  }
`;
const IconsWrapper = styled.div`
  // border: 2px solid yellow;
  position: relative;
  left: -9.2vw;
  color: #00000099;
  display: flex;
  ${Icons} {
    border: 1px solid transparent;
    margin-left: 1.2vw;
    height: 7vh;
    width: 4vw;
    text-align: center;
    font-size: 0.9em;
    img {
      margin: auto;
    }
    opacity: 0.6;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
    @media only screen and (min-width: 1000px) and (max-width: 1300px) {
      // left: -2vw;
      // background-color: pink;
    }
  }
  @media only screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 25vw;
    justify-content: space-between;
    // border: 2px solid red;
    left: -9vw;
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    display: none;
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
  @media only screen and (min-width: 1000px) and (max-width: 1300px) {
    #btn-logo {
      // border: 2px solid pink;
      left: -16vw;
      img {
        height: 2em;
      }
    }
    top: 0.2em;
    position: relative;
    // border: 1px solid red;
    justify-content: space-evenly;
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    // border: 1px dashed blue;
    margin-top: 1.5em;
    justify-content: flex-start;
    #btn-logo {
      // border: 1px solid red;
      left: 7vw;
      img {
        height: 1.3em;
        // width: 100em;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    #btn-logo {
      top: 1.2em;
      left: -36vw;
      img {
        height: 1.2em;
      }
    }
  }
`;
const Bar = styled.div`
  height: 5vh;
  border: 0.001em solid #d9d9d9;
  position: absolute;
  left: 71.5vw;
  top: 2.5vh;
  @media only screen and (min-width: 1000px) and (max-width: 1300px) {
    left: 70vw;
    top: 0.5em;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const JoinNow = styled.button`
  position: absolute;
  left: 72vw;
  top: 2vh;
  padding: 0.8em 1.5em;
  border-radius: 2em;
  background-color: transparent;
  font-weight: 500;
  opacity: 0.9;
  &:hover {
    cursor: pointer;
    background-color: #f6f6f6;
  }
  @media only screen and (max-width: 1300px) and (min-width: 1000px) {
    left: 70.5vw;
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    // border: 1px solid red;
    top: 0.6em;
    left: 65vw;
  }
  @media only screen and (max-width: 768px) {
    left: 55vw;
  }
`;

const SignIn = styled(JoinNow)`
  left: 80vw;
  border: 1.2px solid #0040ff;
  color: #0a66c2;
  font-weight: 500;
  &:hover {
    background-color: rgba(204, 216, 255, 0.3);
    color: #00061a;
  }
  @media only screen and (max-width: 1300px) and (min-width: 1000px) {
    left: 84vw;
  }
  @media only screen and (max-width: 768px) {
    padding: 0.8em;
    width: 6em;
    left: 76vw;
  }
`;
const Heading = styled.h1`
  // border: 1px solid red;
  font-size: 3.5em;
  font-weight: 100;
  color: rgba(153, 51, 51, 0.9);
  max-width: 55vw;
  position: absolute;
  top: 16vh;
  left: 13vw;
  line-height: 1.2em;
  @media only screen and (min-width: 1000px) and (max-width: 1300px) {
    top: 1.2em;
  }
  @media only screen and (min-width: 860px) and (max-width: 1100px) {
    max-width: 50vw;
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    top: 1.2em;
  }
  @media only screen and (min-width: 768px) and (max-width: 860px) {
    max-width: 47vw;
  }
  @media only screen and (max-width: 768px) {
    height: 1.2em;
    min-width: 100vw;
    font-size: 2em;
    top: 2.3em;
    // left: 3.1em;
    left: 13vw;
    white-space: no-wrap;
    br {
      display: none;
    }
  }
`;
const BgImage = styled.div`
  background-image: url("images/login-hero.svg");
  background-repeat: no-repeat;
  position: relative;
  top: 15vh;
  left: 53vw;
  height: 100vh;
  width: 50vw;
  @media only screen and (min-width: 1000px) and (max-width: 1300px) {
    left: 62vw;
    height: 130vh;
    width: 60vw;
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    left: 68vw;
    background-size: 140%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1100px) {
    left: 65vw;
  }
  @media only screen and (max-width: 768px) {
    top: 97vh;
    left: 35vw;
  }
`;
const Form = styled.form`
  // border: 1px solid red;
  position: absolute;
  top: 40vh;
  height: 50vh;
  width: 40vw;
  padding-left: 13vw;
  label {
    // border: 1px solid yellow;
    font-size: 0.9em;
    font-weight: 500;
    color: #4c4949;
  }
  input {
    text-indent: 1.5em;
    display: block;
    border-radius: 0.3em;
    height: 7.5vh;
    width: 100%;
    margin-top: 0.5em;
    border: 1px solid #4c4949;
    &:hover {
      background-color: #f5f5f5;
      border-color: black;
      border-width: 2.3px;
      box-shadow: 0px 0px 1px black;
    }
  }
  @media only screen and (min-width: 1000px) and (max-width: 1300px) {
    top: 14.5em;
    width: 50vw;
    input {
      height: 10vh;
    }
  }
  @media only screen and (min-width: 1000px) and (max-width: 1150px) {
    input {
      height: 3.3em;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1100px) {
    top: 20em;
    width: 65%;
  }
  @media only screen and (min-width: 768px) and (max-width: 860px) {
    top: 23em;
    width: 62%;
  }
  @media only screen and (max-width: 768px) {
    // top: 9em;
    top: 37vw;
    input {
      width: 92vw;
    }
  }
  @media only screen and (min-width: 558px) and (max-width: 768px) {
    top: 9em;
  }
`;
const ForgotPassword = styled.p`
  color: #0a66c2;
  margin-top: 1.5em;
  font-weight: 500;
  width: fit-content;
  transition: all 367ms;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #045664;
  }
`;
const SignInButton = styled.div`
  // border: 1px solid red;
  margin-top: 1.2em;
  color: #ffffff;
  font-weight: 500;
  background-color: #0a66c2;
  border-radius: 2em;
  padding: 0.8em;
  text-align: center;
  &:hover {
    background-color: #3648d9;
    cursor: pointer;
  }
  @media only screen and (min-width: 1000px) and (max-width: 1300px) {
    // margin-top: 1em;
  }
  @media only screen and (max-width: 768px) {
    width: 94vw;
  }
`;
const Line = styled.div`
border: 1px solid red;
display: flex;
align-items: center;
justify-content: space-evenly;
  span {
    display: inline-block;
    margin: auto;
    border: 1px solid blue;
  }
  font-size: 0.9em;
  // border: 1px solid blue;
  color: black;
  text-align: center;
  // background: transparent;
  padding: 1.2em;
  #first-line {
    width: 12vw;
    border: 1px solid rgba(76, 76, 73, 0.3);
    position: relative;
  }
  #second-line {
    width: 12vw;
    border: 1px solid rgba(76, 76, 73, 0.3);
    position: relative;
  }
  @media only screen and (min-width: 740px) and (max-width: 1300px) {
    #second-line {
      width: 18vw;
      left: .5vw;
      border: 1px solid red;
    }
    #first-line {
      width: 18vw;
      left: 1vw;
      border: 1px solid blue;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 300%;
    #first-line {
      width: 43vw;
      // left: -0.5em;
      position: relative;
      top: 1.1em;
    }
    #second-line {
      width: 43vw;
      position: relative;
      // left: 47vw;
      top: -0.3em;
    }
    span {
      position: relative;
      left: 34vw;
      top: 0.4em;
    }
  }
`;
const Google = styled(SignInButton)`
  background-color: white;
  color: black;
  color: #4c4949;
  box-sizing: border-box;
  padding-bottom: 0.7em;
  padding-top: 0.4em;
  border: 1px solid #4c4949;
  img {
    display: inline-block;
    position: relative;
    top: 0.3em;
    left: -0.7em;
  }
  &:hover {
    background-color: #f5f5f5;
    color: black;
  }
  @media only screen and (min-width: 1000px) and (max-width: 1300px) {
    margin-top: -0.4em;
  }
`;
// const BgImage = styled.div`
// border: 2px solid red;
// height: 100px;
// background-image: url("images/login-hero.svg");

// `;
export default Login;
