import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <span>
          <img src="/images/home-logo.svg" />
        </span>
      </Logo>
      <Search>
        <input type="text" placeholder="Search"></input>
        <SearchIcon>
          <img src="/images/search-icon.svg" alt="broken"></img>
        </SearchIcon>
      </Search>
      <NavList>
        <NavIcons id="home" className="active">
          <img src="/images/nav-home.svg" />
          <span>Home</span>
        </NavIcons>
        <NavIcons id="network">
          <img src="/images/networkhome.svg" />
          <span>My Network</span>
        </NavIcons>
        <NavIcons id="jobs">
          {/* <img src="/images/nav-jobs.svg" /> */}
          <img src="/images/jobshome.svg"/>
          <span>Jobs</span>
        </NavIcons>
        <NavIcons id="messaging">
          <img src="/images/messagehome.svg" />
          <span>Messaging</span>
        </NavIcons>
        <NavIcons id="notifications">
          <img src="/images/notihome.svg" />
          <span>Notifications</span>
        </NavIcons>
        <NavIcons id="user">
          <img src="/images/user.svg" />
          <span>Me</span>
        </NavIcons>
        <NavIcons id="work">
          <img src="/images/workhome.svg" />
          <span>Work</span>
        </NavIcons>
        <Ad>
          <a href="#">
            Try Premium free <br />+ up to 25% off
          </a>
        </Ad>
      </NavList>
    </Nav>
  );
};

const Nav = styled.nav`
  // border: 1px solid red;
  height: 3.5em;
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;
const Logo = styled.div`
  margin-left: 13vw;
  margin-top: calc(3.5em / 5);
  width: fit-content;
  display: inline-block;
  span {
    display: inline-block;
  }
  @media only screen and (max-width: 1024px){
    position: relative;
    left: -10vw;
    border: 1px solid blue;
  }
`;
const SearchIcon = styled.div``;
const Search = styled.div`
  position: relative;
  width: 18em;
  left: 16.5vw;
  //   margin-left: 1vw;
  top: -2.4em;
  //   border: 1px solid blue;
  input {
    width: 100%;
    padding: 0.4em;
    padding-left: 2.5em;
    background-color: rgba(185, 235, 251, 0.4);
    border-radius: 0.2em;
    color: black;
  }
  ${SearchIcon} {
    // border: 1px solid green;
    position: absolute;
    left: 1em;
    top: 0.5em;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
const NavList = styled.div`
  // border: 2px solid magenta;
  // height: 2.5em;
  position: absolute;
  left: 45vw;
  top: 0.3em;
  width: 50vw;
  display: flex;
  // justify-content: space-evenly;
  align-items: center;
  // align-content: center;
  #user {
    padding-right: 1em;
    img{
      height: 1.5em;
    }
    span{
      // width: 10em;
      left: -1.8em;
    }
    @media only screen and (max-width: 768px){
      padding-right: 0;
    }
    @media only screen and (max-width: 860px){
      margin-right: -1em;
    }
  }
  #work{
    padding-left: 2em;
    span{
      left: -2em;
    }
    @media only screen and (max-width: 768px){
      padding-left: 1em;
    }
  }
  #jobs{
    padding-right: 1em;
    span{
      left: -2em;
    }
  }
  #network{
    padding-left: 1em;
    padding-right: .5em;
    span{
      left: -3.5em;
    }
  }
  #messaging{
    span{
      left: -3em;
    }
  }
  #home{
    span{
      left: -2.2em;
    }
  }
  #notifications{
    span{
      left: -3em;
    }
  }
  #home:after {
    content: "";
    position: absolute;
    top: 3.2em;
    left: -1.2em;
    display: inline-block;
    width: 4em;
    // width: 100%;
    border: 1px solid black;
    -webkit-transform: rotate(180deg);
    opacity: 1;
  }
  #user:after {
    content: "";
    display: inline-block;
    border: 1px solid grey;
    position: absolute;
    top: -0.6em;
    left: 26em;
    height: 3.5em;
    opacity: 1;
    @media only screen and (max-width: 860px){
      left: 29em;
    }
  }
  @media only screen and (max-width: 1024px){
    left: 15vw;
  }
`;
const NavIcons = styled.div`
  // padding-left: 1em;
  max-width: 5em;
  text-align: center;
  cursor: pointer;
  border: 1px solid green;
  width: fit-content;
  transition: all 267ms ease-in;
  display: flex;
  align-items: center;
  &:active,
  &:hover {
    color: black;
    span {
      color: black;
      opacity: 1;
    }
    img{
      opacity: 1;
    }
  }
  img{
    opacity: .7;
  }
  span {
    opacity: 0.7;
    display: inline-block;
    position: relative;
    white-space: nowrap;
    top: 1.6em;
    left: -2vw;
    font-size: 0.75em;
    font-weight: 400;
    border: 1px solid red;
    @media only screen and (max-width: 860px){
      display: none;
    }
  }
  @media only screen and (max-width: 860px){
      min-width: 5em;
      border: 1px solid blue;
    }
`;
const Ad = styled.div`
  font-size: 0.8em;
  font-weight: 400;
  margin-top: 0.7em;
  border: 1px solid red;
  min-width: 10em;
  a {
    color: brown;
  }
`;
export default Header;
