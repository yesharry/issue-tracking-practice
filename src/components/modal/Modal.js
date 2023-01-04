import React from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';

const Modal = ({ setModalOpen }) => {
  return (
    <ModalWrapper>
      <ModalContainer setModalOpen={setModalOpen} />
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(44, 43, 43, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Modal;
