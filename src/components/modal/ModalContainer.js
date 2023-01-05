import React from 'react';
import styled from 'styled-components';

const ModalContainer = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ContainerWrapper>
      <ContainerHeader>
        <CloseBtn onClick={closeModal}>X</CloseBtn>
      </ContainerHeader>
      <ContainerBody>
        <InputWrapper>
          제목
          <InputModal type="text" />
        </InputWrapper>
        <InputWrapper>
          상태
          <InputModal type="text" />
        </InputWrapper>
        <InputWrapper>
          마감일
          <InputModal type="datetime-local" />
        </InputWrapper>
        <InputWrapper>
          담당자
          <InputModal type="text" />
        </InputWrapper>
        내용
        <ContentInput />
      </ContainerBody>
      <ContainerFooter>
        <SubmitBtn>저장</SubmitBtn>
      </ContainerFooter>
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  width: 600px;
  height: 540px;
  background-color: white;
  border-radius: 10px;
`;

const ContainerHeader = styled.div`
  height: 70px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
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

const InputWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputModal = styled.input`
  width: 80%;
  height: 25px;
  outline: none;
`;

const ContentInput = styled.textarea`
  height: 180px;
  margin-top: 10px;
  outline: noen;
  resize: none;
`;

const ContainerFooter = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: end;
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
