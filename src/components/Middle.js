import React from "react";
import styled from "styled-components";

const Middle = () => {
  return (
    <Container>
      <img id="pp" src="/images/profileimg.jpg" alt="broken"/>
      <button id="post">Start a post</button>
      <Tools>
        <button>
          <img src="/images/phototool.svg" alt="broken"/>
          <span>Photo</span>
        </button>
        <button>
          <img src="/images/videotool.svg" alt="broken"/>
          <span>Video</span>
        </button>
        <button>
          <img src="/images/eventtool.svg" alt="broken"/>
          <span>Event</span>
        </button>
        <button>
          <img src="/images/articeltool.svg" alt="broken"/>
          <span>Write article</span>
        </button>
      </Tools>
      <Post>
        <Header>
          <Image>
            <img src="/images/postimage.jpg" alt="broken"></img>
          </Image>
          <div id="intro">
            <Name>Alexa Bliss</Name>
            <About>
              Sr. Data Analyst at Forge
              <br />
              6d <span>&#9679;</span>
            </About>
          </div>
          <FollowOrConnect>
                      {/* <img src="/images/plus-icon.svg" /> &nbsp; */}
                      	&#10133;
            <span>Follow</span>
          </FollowOrConnect>
        </Header>
        <Content>
          <div>
            The trick, however, is to build the habits that you set ups for
            short, focused periods of time so that you create a routine! So,
            I've set up a 25-day block of 5 things that I MUST do! <br></br>
            <br></br>1) Exercise everyday <br></br>2) Meditate for at least 10
            mins<br></br> 3) No Alcohol!<br></br> 4) Read at least 10 pages.
            <br></br> 5) Not looking at my phone first thing in the morning!
            <br></br>
            <br></br>
            Additionally, my closest friend & social media are my accountability
            partners (I'll update my progress every day). Currently, I'm on day
            14 of my 25-day block!
          </div>
          <div id="imgs">
            <img src="/images/workout.jpg" alt="broken"/>
          </div>
        </Content>
        <Footer></Footer>
      </Post>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #dfdbda;
  background-color: #ffffff;
  border-radius: 0.5em;
  height: 20%;
  #pp {
    height: 3em;
    border-radius: 50%;
    margin-left: 2%;
    margin-top: 1.4%;
    cursor: pointer;
    // border: 1px solid red;
  }
  #post {
    color: grey;
    border: 1px solid grey;
    width: 75%;
    position: relative;
    top: -1.3em;
    left: 1em;
    background-color: white;
    border-radius: 2em;
    padding: 0.8em;
    text-align: left;
    font-weight: 500;
    font-size: 0.9em;
    transition: all 200ms ease-in-out;
    &:hover {
      cursor: pointer;
      background-color: #efedec;
    }
  }
`;

const Tools = styled.div`
  display: flex;
  // border: 1px solid red;
  padding: 0 0.2em 0 0.2em;
  margin-top: -0.9em;
  justify-content: space-between;
  button {
    font-size: 0.9em;
    // padding: left: .2em;
    // padding-right: .2em;
    cursor: pointer;
    background-color: transparent;
    display: inline-flex;
    // border: 1px solid blue;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    min-width: 20%;
    padding: 0.5em 0.2em 0.5em 0.2em;
    transition: all 50ms ease-in-out;
    span {
      // border: 1px solid red;
      white-space: nowrap;
    }
    &:hover {
      cursor: pointer;
      background-color: #efedec;
    }
  }
`;

const Post = styled.div`
//   border: 1px solid red;
  margin-top: 2em;
  background-color: white;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
//   border: 1px solid green;
  // height: 5em;
  padding: 0;
  #intro {
    // border: 1px solid red;
    margin-left: -25%;
    padding-top: 1em;
  }
`;
const Image = styled.div`
  img {
    cursor: pointer;
    height: 3em;
    border-radius: 50%;
    margin-top: 1em;
    margin-left: -100%;
  }
`;
const Name = styled.div`
  font-size: 0.9em;
  font-weight: 500;
  cursor: pointer;
//   border: 1px solid green;
  width: fit-content;
`;
const About = styled.div`
  font-size: 0.8em;
  font-weight: normal;
  color: grey;
  cursor: pointer;
  span {
    font-size: 0.5em;
    display: inline-block;
    position: relative;
    top: -0.3em;
  }
`;
const Content = styled.div`
  font-size: 0.85em;
  padding: 0.5em;
  color: #151515;
  line-height: 1.5em;
  #imgs {
    margin-top: 1em;
    // border: 1px dashed blue;
    & > img {
      height: 50vh;
      width: 104%;
      position: relative;
      left: -2%;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;
const Footer = styled.div``;
const FollowOrConnect = styled.div`
  position: relative;
  cursor: pointer;
  color: blue;
//   border: 1px solid red;
  padding: .5em;
  &>span{
    font-weight: 500;
    }
    &:hover{
        background-color: #efedec;
    }
`;
export default Middle;
