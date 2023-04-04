import React from "react";
import styled from "styled-components";

const Middle = () => {
  return (
    <Container>
      <div id="header">
        <img id="pp" src="/images/profileimg.jpg" alt="broken" />
        <button id="post">Start a post</button>
      </div>
      <Tools>
        <button>
          <img src="/images/phototool.svg" alt="broken" />
          <span>Photo</span>
        </button>
        <button>
          <img src="/images/videotool.svg" alt="broken" />
          <span>Video</span>
        </button>
        <button>
          <img src="/images/eventtool.svg" alt="broken" />
          <span>Event</span>
        </button>
        <button>
          <img src="/images/articeltool.svg" alt="broken" />
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
          <div id="content">
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
            <img src="/images/workout.jpg" alt="broken" />
          </div>
        </Content>
        <Footer>
          <Reactions>
            <R1>
              <img
                id="first"
                src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                alt="broken"
              />
              <img
                id="second"
                src="https://static.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1"
                alt="broken"
              />
              <img
                id="third"
                src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
                alt="broken"
              />
              <span>1000</span>
            </R1>
            <R2>171 comments &#9679; 29 reposts</R2>
          </Reactions>
          <Share>
            <div>
              <img src="/images/like.png" id="like" alt="broken" />
              <span>Like</span>
            </div>
            <div>
              <img src="/images/comment.svg" id="comment" alt="broken" />
              <span>Comment</span>
            </div>
            <div>
              <img src="/images/repost.png" id="repost" alt="broken" />
              <span>Repost</span>
            </div>
            <div>
              <img src="/images/send.svg" id="send" alt="broken" />
              <span>Send</span>
            </div>
          </Share>
        </Footer>
      </Post>
    </Container>
  );
};

const Container = styled.div`
  // border: 1px solid #dfdbda;
  // background-color: #ffffff;
  border-radius: 0.5em;
  height: 20%;
  #header {
    background-color: #ffffff;
    border: 1px solid #dfdbda;
  }
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
  @media only screen and (min-width: 766px) and (max-width: 990px) {
    width: 85%;
  }
`;

const Tools = styled.div`
  display: flex;
  // border: 1px solid red;
  border-bottom: 1px solid #dfdbda;
  border-right: 1px solid #dfdbda;
  border-left: 1px solid #dfdbda;
  background-color: #ffffff;
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
  border: 1px solid #dfdbda;
  margin-top: 2em;
  background-color: white;
`;
const Header = styled.div`
  display: flex;
  border: 1px solid brown;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  #intro {
    border: 1px solid red;
    position: relative;
    left: -22%;
    padding-top: 1em;
    @media only screen and (min-width: 766px) and (max-width: 990px) {
      position: relative;
      left: -5%;
    }
    @media only screen and (min-width: 991px) and (max-width: 1450px) {
      left: -13%;
    }
  }
  @media only screen and (min-width: 766px) and (max-width: 990px) {
    border: 1px solid green;
  }
  @media only screen and (min-width: 991px) and (max-width: 1450px) {
    border: 1px solid green;
  }
`;
const Image = styled.div`
  img {
    cursor: pointer;
    height: 3em;
    border-radius: 50%;
    margin-top: 1em;
    position: relative;
    left: -3.5em;
    // margin-left: -220%;
    @media only screen and (min-width: 766px) and (max-width: 990px) {
      //  border: 1px solid blue;
      position: relative;
      left: -40%;
    }
    @media only screen and (min-width: 991px) and (max-width: 1450px) {
      left: -50%;
    }
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
  @media only screen and (min-width: 766px) and (max-width: 990px) {
    //  position: relative;
    //  left: -20%;
  }
`;
const Content = styled.div`
  font-size: 0.85em;
  border: 1px solid red;
  padding: 0.5em;
  color: #151515;
  line-height: 1.5em;
  overflow: hidden;
  #imgs {
    margin-top: 1em;
    border: 1px dashed blue;
    & > img {
      height: 50vh;
      transform: scale(1.03);
      object-fit: cover;
      cursor: pointer;
    }
  }
  #content {
    border: 1px solid orange;
    padding: 0 1% 0 1%;
    text-align: justify;
  }
`;
const Footer = styled.div``;
const FollowOrConnect = styled.div`
  position: relative;
  right: -10%;
  cursor: pointer;
  color: blue;
  //   border: 1px solid red;
  padding: 0.5em;
  & > span {
    font-weight: 500;
  }
  &:hover {
    background-color: #efedec;
  }
  @media only screen and (min-width: 766px) and (max-width: 990px) {
    position: relative;
    right: -10%;
  }
`;
const Reactions = styled.div`
  display: flex;
  justify-content: space-between;
`;
const R1 = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.5em;
  #first,
  #second,
  #third {
    z-index: 1;
    position: relative;
  }
  #second {
    left: -5%;
  }
  #third {
    left: -15%;
  }
  span {
    font-size: 0.7em;
    position: relative;
    left: -2%;
  }
`;
const R2 = styled.div`
  font-size: 0.75em;
  color: grey;
  // border: 1px solid blue;
  margin-right: 1em;
`;

const Share = styled.div`
  display: flex;
  justify-content: space-around;
  width: 98%;
  padding: 0;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-top: 1%;
  margin-left: 1%;
  border-top: 1px solid grey;
  #like {
    height: 3vh;
  }
  #repost {
    height: 3vh;
  }
  div {
    // border: 1px solid magenta;
    padding: 0.5em;
    display: flex;
    transition: all 100ms ease-in-out;
    align-items: center;
    & > span {
      margin-left: 5%;
    }
    &:hover {
      cursor: pointer;
      // opacity: .5;
      background-color: #d2d1d1;
    }
  }
`;
export default Middle;
