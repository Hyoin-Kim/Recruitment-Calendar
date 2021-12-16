import React from "react";
import styled from "styled-components";
import { logo } from "../../assets/index";

const Header = () => {
  return (
    <StyledRoot>
      <img className="logo" src={logo} alt="" />
      <div>
        <li>채용 공고</li>
        <li>자기소개서</li>
        <li>이력서</li>
        <li>데이터랩</li>
        <li>합격자소서</li>
        <li>실무경험 채우기</li>
      </div>
      <hr />
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
    width: 150px;
  }
  & > hr {
    opacity: 40%;
  }
  & > div {
    list-style: none;
    display: flex;
    align-self: center;
  }
  li {
    display: flex;
    font-size: 15px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
`;
