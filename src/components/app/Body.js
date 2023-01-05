import React from 'react';
import styled from 'styled-components';
import IssueContainer from '../issue/IssueContainer';

const Body = () => {
  return (
    <Wrapper>
      {TITLE.map(title => (
        <IssueContainer key={title.id} title={title} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1200px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const TITLE = [
  {
    id: 0,
    name: 'To-Do',
    color: '#ebebeb',
  },
  {
    id: 1,
    name: 'In-Progress',
    color: '#ffd2db',
  },
  {
    id: 2,
    name: 'Complete',
    color: '#bad6f9',
  },
];

export default Body;
