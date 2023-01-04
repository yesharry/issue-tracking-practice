import React, { useState } from 'react';
import styled from 'styled-components';
import IssueItem from '../issue/IssueItem';
import Modal from '../modal/Modal';

const IssueContainer = ({ title }) => {
  const [issueList, setIssueList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <ContainerWrapper color={title.color}>
      <CardTitle>{title.name}</CardTitle>
      <CardItem onClick={showModal}>
        {issueList.map(issueList => (
          <IssueItem issueList={issueList} />
        ))}
      </CardItem>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  width: 390px;
  /* height: 500px; */
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

export default IssueContainer;
