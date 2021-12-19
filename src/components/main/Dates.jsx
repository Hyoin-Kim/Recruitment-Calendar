import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getData } from "../../libs/api";
import Modal from "./Modal";

const Dates = (props) => {
  const { lastDate, firstDate, elm, year, month, idx } = props;
  const [informationData, setInformationData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  let dateKey =
    `${year}` +
    `-` +
    `${month < 10 ? "0" + month.toString() : month.toString()}` +
    `-` +
    `${elm < 10 ? "0" + elm.toString() : elm.toString()}`;

  const dataList = async () => {
    const informationData = await getData();
    setInformationData(informationData);
  };

  useEffect(() => {
    dataList();
  }, []);

  return (
    <>
      <DateWrapper
        onDoubleClick={() => {
          setOpenModal(true);
        }}>
        <DateNum idx={idx} lastDate={lastDate} firstDate={firstDate}>
          {elm}
        </DateNum>
        <Lists>
          {informationData?.map((list, index) => {
            return (
              <>
                {informationData[index].start_time.slice(0, 10) === dateKey ? (
                  <StartInfo
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    image={informationData[index].image}
                    name={informationData[index].name}
                    start={informationData[index].start_time}
                    end={informationData[index].end_time}
                    content={informationData[index].content}
                    key={informationData[index].id}
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  />
                ) : informationData[index].end_time.slice(0, 10) === dateKey ? (
                  <EndInfo
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    image={informationData[index].image}
                    name={informationData[index].name}
                    start={informationData[index].start_time}
                    end={informationData[index].end_time}
                    content={informationData[index].content}
                    key={informationData[index].id}
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  />
                ) : null}
              </>
            );
          })}
        </Lists>
      </DateWrapper>
    </>
  );
};

function StartInfo(props) {
  const { setOpenModal, openModal } = props;
  return (
    <>
      <List>
        <div>시</div> {props.name}
      </List>
      {openModal && (
        <Modal
          modalImage={props.image}
          modalName={props.name}
          modalStart={props.start}
          modalEnd={props.end}
          modalContent={props.content}
          modalKey={props.id}
          setOpenModal={setOpenModal}
          openModal={openModal}
          isBlur={true}
        />
      )}
    </>
  );
}

function EndInfo(props) {
  const { setOpenModal, openModal } = props;
  return (
    <>
      <List>
        <div>끝</div> {props.name}
      </List>
      {openModal && (
        <Modal
          modalImage={props.image}
          modalName={props.name}
          modalStart={props.start}
          modalEnd={props.end}
          modalContent={props.content}
          modalKey={props.id}
          setOpenModal={setOpenModal}
          openModal={openModal}
          isBlur={true}
        />
      )}
    </>
  );
}

const DateWrapper = styled.div`
  position: relative;
  padding: 0 0.6vw;
  width: calc(100% / 8);
  height: 9vw;
  text-align: right;
  border-bottom: 1px solid #e4e3e6;
  border-left: 1px solid #e4e3e6;
`;

const DateNum = styled.div`
  padding: 0.3vw;
  text-align: center;
  background-color: #f2f2f2;
  ${(props) => props.idx < props.lastDate && `color: #969696;`};

  ${(props) =>
    props.firstDate > 0 &&
    props.idx > props.firstDate - 1 &&
    `
    color: #969696;
  `};
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const List = styled.span`
  margin-top: 0.3vw;
  padding-left: 0.5vw;
  font-size: 1vw;
  cursor: pointer;
  font-weight: bold;
  display: flex;

  & > div {
    display: flex;
    color: #ff4000;
  }
`;

export default Dates;
