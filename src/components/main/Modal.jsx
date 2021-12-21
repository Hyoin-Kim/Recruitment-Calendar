import React from "react";
import styled from "styled-components";
import { closeIcon } from "../../assets";

const Modal = (props) => {
  const { setOpenModal, openModal, modalName, modalImage, modalStart, modalEnd, modalContent } = props;

  function timeForToday(endValue) {
    const today = new Date();
    const endTimeValue = new Date(endValue);

    const betweenTime = Math.floor((today.getTime() - endTimeValue.getTime()) / 1000 / 60);
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);

    if (today === endTimeValue) {
      return `오늘 마감`;
    } else if (betweenTimeDay > 0) {
      return `${betweenTimeDay}일 지남`;
    } else if (betweenTimeDay < 0) {
      return `${-betweenTimeDay}일 전`;
    }
  }

  return (
    <Root>
      {openModal && (
        <div>
          <ModalWrapper>
            <Header>
              <LogoImg src={modalImage} alt="" />
              <Title>
                <div>{modalName}</div>
                <Period>
                  {modalStart.slice(0, 10)} {modalStart.slice(11, 16)} ~ {modalEnd.slice(0, 10)}{" "}
                  {modalEnd.slice(11, 16)}
                  <div>({timeForToday(modalEnd)})</div>
                </Period>
              </Title>
              <hr />
              <Icon
                className="closeIcon"
                src={closeIcon}
                alt=""
                onClick={() => {
                  setOpenModal(false);
                }}
              />
            </Header>
            <Content dangerouslySetInnerHTML={{ __html: modalContent }}></Content>
          </ModalWrapper>
        </div>
      )}
    </Root>
  );
};

export default Modal;

const Root = styled.div`
  & > div {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background-color: #d8d8d869;
    z-index: 100;
  }
`;

const Icon = styled.img`
  width: 1.5vw;
  height: 3vh;
  float: right;
  margin: 10px;
  cursor: pointer;
`;
const Header = styled.div`
  display: flex;
  margin: 40px;
`;
const Title = styled.div`
  & > div {
    display: flex;
    margin: 20px 40px 20px 10px;
    color: #777777;
    font-weight: bold;
  }
`;
const Period = styled.div`
  & > div {
    color: #fe642e;
    font-weight: bold;
    margin-left: 10px;
  }
`;
const Content = styled.div`
  width: auto;
  height: 100%;
  overflow: auto;
  margin: 10px 10px 20px 10px;
`;

const LogoImg = styled.img`
  display: flex;
  width: 100px;
  margin-left: 10px;
  margin-right: 10px;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 10px;
  border: none;
  background-color: white;
  width: 50%;
  height: auto;
  z-index: 9999;
  overflow: visible;
  box-sizing: border-box;
`;
