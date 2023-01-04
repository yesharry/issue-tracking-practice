import React from 'react';
import styled from 'styled-components';

const IssueItem = ({ issueList }) => {
  return (
    <ItemWrapper>
      {issueList.title}
      <BtnWrapper>
        <EditBtn>수정</EditBtn>
        <DeleteBtn>삭제</DeleteBtn>
      </BtnWrapper>
    </ItemWrapper>
  );
};

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

export default IssueItem;
