import React from "react";
import styled from "styled-components";
import { closeIcon } from "../../assets";

const Modal = (props) => {
  const { setOpenModal, openModal, isBlur } = props;

  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 지남`;
    }
  }

  return (
    <Root isBlur={isBlur}>
      {openModal && (
        <div>
          <ModalWrapper>
            <Header>
              <LogoImg src={props.modalImage} alt="" />
              <Title>
                <div>{props.modalName}</div>
                <Period>
                  {props.modalStart.slice(0, 10)} ~ {props.modalEnd.slice(0, 10)}
                  <div>({timeForToday(props.modalEnd)})</div>
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
            <Content dangerouslySetInnerHTML={{ __html: props.modalContent }}></Content>
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
    background-color: #d8d8d8;
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
`;
const Title = styled.div`
  & > div {
    display: flex;
    margin: 20px 40px 20px 10px;
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
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const LogoImg = styled.img`
  display: flex;
  width: 100px;
  margin: 10px;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 16px;
  border: solid 1px black;
  background-color: white;
  width: 50%;
  height: auto;
  z-index: 9999;
  overflow: visible;
  box-sizing: border-box;
`;
