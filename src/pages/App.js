import Header from '../components/app/Header';
import Body from '../components/app/Body';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
