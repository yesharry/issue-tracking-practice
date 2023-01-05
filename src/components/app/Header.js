import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../modal/Modal';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <HeaderWrapper>
      <h1>Issue Tracking</h1>
      <CreateBtn onClick={showModal}>등록</CreateBtn>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CreateBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #44c975;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export default Header;
