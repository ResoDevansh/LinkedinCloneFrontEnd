import React from "react";
import styled from "styled-components";

const LeftSide = () => {
  return (
    <Container>
      <ProfileCard>
        <img src="/images/cardbgimage.jpg" />
        <img src="/images/profileimg.jpg" />
        <MetaData>
          <Title>
            <a href="#">Devansh Sachan</a>
          </Title>
          <Subtitle>Student at IIIT Bhopal</Subtitle>
        </MetaData>
        <Views>
          <p>
            Who's viewed your profile<span>4</span>
          </p>
          <p>
            <div>
              Connections<span>173</span>
            </div>
            <div>Connect with alumni</div>
          </p>
        </Views>
        <Perks>
          <div>
            <p>Access exclusive tools & insights</p>
            {/* <img src="/images/bookmark.svg" /> */}
            <a href="#">Try Premium for free</a>
          </div>
        </Perks>
        <MyItems>My items</MyItems>
      </ProfileCard>
      <Additional>
        <ul>
          <li>Groups</li>
          <li>
            Events
            <img src="/images/plus-icon.svg" />
          </li>
          <li>Followed Hashtags</li>
        </ul>
        <Discover>Discover more</Discover>
      </Additional>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  border-radius: 0.5em;
  @media only screen and (min-width: 766px) and (max-width: 990px) {
    // margin-left: -2em;
    position: relative;
    // left: -15%;
  }
`;

const ProfileCard = styled.div`
  border-radius: 1em;
  background-color: white;
  border: 1px solid #dfdbda;
  img {
    width: 100%;
    &:nth-child(2) {
      border-radius: 50%;
      transform: scale(0.3);
      margin-top: -7.5em;
      cursor: pointer;
    }
  }
`;
const MetaData = styled.div`
  //   border: 1px solid red;
  text-align: center;
  margin-top: -4em;
`;

const Title = styled.div`
  // border: 1px solid blue;
  font-weight: 600;
  a {
    color: black;
    text-decoration: none;
  }
`;

const Subtitle = styled.div`
  //   border: 1px solid green;
  font-size: 0.75em;
  color: grey;
  margin-top: 0.3em;
  padding-bottom: 0.8em;
  border-bottom: 1px solid #efedec;
`;

const Views = styled.div`
  font-size: 0.75em;
  font-weight: 500;
  p {
    &:first-child {
      display: flex;
    }
    &:hover {
      cursor: pointer;
      background-color: #efedec;
    }
    justify-content: space-between;
    padding: 0.8em 1em;
    color: grey;
    span {
      color: blue;
      font-weight: 600;
    }
    &:last-child {
      padding-top: 0em;
      padding-bottom: 0em;
      div {
        display: flex;
        justify-content: space-between;
        &:last-child {
          color: black;
          // border: 1px solid black;
        }
      }
      // border: 1px solid red;
      span {
        color: blue;
        // border: 1px solid red;
        @media only screen and (max-width: 768px) {
          right: 37em;
        }
      }
    }
  }
`;
const Perks = styled.div`
  border-top: 1px solid #efedec;
  padding: 1em 1em;
  margin-top: 1em;
  font-size: 0.8em;
  text-align: left;
  color: grey;
  a {
    color: black;
    &:hover {
      color: blue;
      // background-color: pink;
    }
    font-weight: 600;
  }
  img {
    border: 1px solid red;
  }
  &:hover {
    background-color: #efedec;
    cursor: pointer;
  }
`;

const MyItems = styled.div`
  font-size: 0.8em;
  font-weight: 600;
  padding: 1em 1em;
  &:hover {
    background-color: #efedec;
    cursor: pointer;
  }
`;
const Additional = styled.div`
  border: 1px solid #dfdbda;
  margin-top: 0.5em;
  border-radius: 1em;
  background-color: white;
  font-size: 0.75em;
  overflow: hidden;
  li {
    // border: 1px solid red;
    position: relative;
    // z-index: -1;
    // width: fit-content;
    padding: 0.5em 1em;
    color: blue;
    font-weight: 600;
    transition: all 100ms ease-in;
    &:nth-child(2) {
      display: flex;
      width: auto;
      justify-content: space-between;
    }
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    img {
      position: relative;
      z-index: 1;
      border-radius: 1em;
      transform: scale(1.1);
      opacity: 0.7;
      &:hover {
        opacity: 1;
        background-color: #efedec;
      }
    }
  }
`;
const Discover = styled.p`
  text-align: center;
  font-size: 1.2em;
  border-top: 1px solid #efedec;
  padding-top: 1em;
  padding-bottom: 1em;
  color: grey;
  font-weight: 600;
  transition: all 100ms ease-in;
  &:hover {
    cursor: pointer;
    background-color: #efedec;
  }
`;
export default LeftSide;
