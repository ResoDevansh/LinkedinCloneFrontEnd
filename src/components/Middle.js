import React from "react";
import styled from "styled-components";

const Middle = () => {
  return (
    <Container>
      <img id="pp" src="/images/profileimg.jpg" />
      <button id="post">Start a post</button>
      <Tools>
        <button>
          <img src="/images/phototool.svg" />
          <span>Photo</span>
        </button>
        <button>
          <img src="/images/videotool.svg" />
          <span>Video</span>
        </button>
        <button>
          <img src="/images/eventtool.svg" />
          <span>Event</span>
        </button>
        <button>
          <img src="/images/articeltool.svg" />
          <span>Write article</span>
        </button>
      </Tools>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #dfdbda;
  background-color: #ffffff;
  border-radius: 0.5em;
  height: 20%;
  #pp{
    height: 3em;
    border-radius: 50%;
    margin-left: 2%;
    margin-top: 1.4%;
    cursor: pointer;
    // border: 1px solid red;
  }
  #post{
    color: grey;
    border: 1px solid grey;
    width: 75%;
    position: relative;
    top: -1.3em;
    left: 1em;
    background-color: white;
    border-radius: 2em;
    padding: .8em;
    text-align: left;
    font-weight: 500;
    font-size: .9em;
    transition: all 200ms ease-in-out;
    &:hover{
        cursor: pointer;
        background-color: #efedec;
    }
  }
`;

const Tools = styled.div`
display: flex;
// border: 1px solid red;
padding: 0 .2em 0 .2em;
margin-top: -.9em;
justify-content: space-between;
button{
    font-size: .9em;
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
    padding: .5em 0.2em .5em 0.2em;
    transition: all 50ms ease-in-out;
    span{
        // border: 1px solid red;
        white-space: nowrap;
    }
    &:hover{
        cursor: pointer;
        background-color:#efedec;
    }
}`;
export default Middle;
