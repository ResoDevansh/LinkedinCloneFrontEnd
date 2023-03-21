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
            Welcome to your <br />
            professional community
          </Heading>
          <Form>
            <label htmlFor="email">Email or phone</label>
            <input id="email" type="email"></input>
            <br></br>
            <label htmlFor="password">Password</label>
            <input id="password" type="password"></input>
            <ForgotPassword>Forgot password?</ForgotPassword>
            <SignInButton>Sign in</SignInButton>
            <Line><hr/>or<hr/></Line>
            <Google><img src="/images/google.svg"></img>Sign in with Google</Google>
          </Form>
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
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
    img {
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
const Bar = styled.div`
  height: 5vh;
  border: 0.001em solid #d9d9d9;
  position: absolute;
  left: 71.5vw;
  top: 2.5vh;
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
`;
const Heading = styled.h1`
  font-size: 3.5em;
  font-weight: 100;
  // color: rgba(102, 51, 0,.8);
  color: rgba(153, 51, 51, 0.9);
  border: 1px solid black;
  max-width: 50vw;
  position: absolute;
  top: 16vh;
  left: 13vw;
  line-height: 1.2em;
`;
const Content = styled.div``;
const Form = styled.form`
  border: 1px solid red;
  position: absolute;
  top: 40vh;
  height: 50vh;
  width: 40vw;
  padding-left: 13vw;
  label {
    border: 1px solid yellow;
    font-size: 0.9em;
    font-weight: 500;
    color: #4c4949;
  }
  input {
    display: block;
    border-radius: 0.3em;
    height: 7.5vh;
    width: 100%;
    margin-top: 0.5em;
    border: 1px solid #4c4949;
  }
`;
const ForgotPassword = styled.p`
  color: #0a66c2;
  margin-top: 1.5em;
  font-weight: 500;
`;
const SignInButton = styled.div`
  // border: 1px solid red;
  margin-top: 1.2em;
  color: #ffffff;
  font-weight: 500;
  background-color: #0a66c2;
  border-radius: 2em;
  padding: .7em;
  text-align: center;  
`;
const Line = styled.div`
font-size: .9em;
border: 1px solid blue;
color: black;
text-align: center;
background:transparent;
padding: 1.2em;
hr{
  width: 50%;
  border: 1px solid rgba(76,76,73,.3);
  &:nth-child(1){
    position: relative;
    top: .8em;
    left: -1em;
  }
  &:nth-child(2){
    position: relative;
    top: -.7em;
    left: 14em;
  }
}
`;
const Google = styled(SignInButton)`
background-color: #f6f6f6;
color: black;
color: #4c4949;
border: 1px solid #4c4949;
img{
  display: inline-block;
  // border: 1px solid red;
  position: relative;
  top: .3em;
  left: -.7em;
}
`;
export default Login;
