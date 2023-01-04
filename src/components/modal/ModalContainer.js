import React from 'react';
import styled from 'styled-components';
import ContentText from './container/ContentText';
import Deadline from './container/Deadline';
import ManagePerson from './container/ManagePerson';
import State from './container/State';

const ModalContainer = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ContainerWrapper>
      <ContainerHeader>
        <ModalTitleInput type="text" />
        <CloseBtn onClick={closeModal}>X</CloseBtn>
      </ContainerHeader>
      <ContainerBody>
        <State />
        <Deadline />
        <ManagePerson />
        <ContentText />
        <SubmitBtn>저장</SubmitBtn>
      </ContainerBody>
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  width: 800px;
  height: 740px;
  background-color: white;
  border-radius: 10px;
`;

const ContainerHeader = styled.div`
  height: 70px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitleInput = styled.input`
  width: 90%;
  height: 40px;
  font-size: 30px;
  outline: none;
`;

const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ContainerBody = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;

const SubmitBtn = styled.button`
  width: 70px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #44c975;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export default ModalContainer;
