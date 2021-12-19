import React from "react";
import styled from "styled-components";
import { logo, chatIcon } from "../../assets/index";

const Header = () => {
  return (
    <StyledRoot>
      <img className="logo" src={logo} alt="" />
      <Menu>
        <li>채용 공고</li>
        <li>자기소개서</li>
        <li>이력서</li>
        <li>데이터랩</li>
        <li>합격자소서</li>
        <li>실무경험 채우기</li>
      </Menu>
      <hr />
      <Login>로그인</Login>
      <Service>기업서비스</Service>
      <ChatImg src={chatIcon}></ChatImg>
    </StyledRoot>
  );
};

export default Header;

const StyledRoot = styled.div`
  display: flex;
  .logo {
    display: flex;
    margin: 10px;
    cursor: pointer;
    width: 15vw;
    height: 10vh;
  }
  & > hr {
    opacity: 40%;
  }
`;

const Menu = styled.div`
  display: flex;
  align-self: center;
  margin-left: 10vw;

  li {
    display: flex;
    font-size: 15px;
    color: #6e6e6e;
    font-weight: bold;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
`;

const Login = styled.div`
  margin: 20px;
  color: #6e6e6e;
  font-weight: bold;
`;

const ChatImg = styled.img`
  width: 2.5vw;
  height: 5vh;
  margin: 20px;
`;

const Service = styled.div`
  margin: 20px;
  color: #6e6e6e;
  font-weight: bold;
`;
