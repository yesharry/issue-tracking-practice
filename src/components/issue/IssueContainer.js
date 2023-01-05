import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../modal/Modal';

const IssueContainer = ({ title }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // const getIssue = JSON.parse(localStorage.getItem('issues') || {});

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <ContainerWrapper color={title.color}>
      <CardTitle>{title.name}</CardTitle>
      <CardItem onClick={showModal}>
        <ItemWrapper>
          {/* {getIssue.title} */}
          <BtnWrapper>
            <EditBtn>수정</EditBtn>
            <DeleteBtn>삭제</DeleteBtn>
          </BtnWrapper>
        </ItemWrapper>
      </CardItem>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  width: 390px;
  background-color: ${props => props.color};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  border-radius: 10px;
`;

const CardTitle = styled.div`
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: #3b3b3b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardItem = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnWrapper = styled.div`
  width: 85px;
  display: flex;
  justify-content: space-between;
`;

const EditBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: #6a6aff;
  }
  display: none;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: tomato;
  }
  display: none;
  cursor: pointer;
`;

const ItemWrapper = styled.div`
  width: 350px;
  height: 70px;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    ${DeleteBtn} {
      display: initial;
    }
    ${EditBtn} {
      display: initial;
    }
  }
  cursor: pointer;
`;

export default IssueContainer;
