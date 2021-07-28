import styled from 'styled-components';
import { GlobalStyle } from './styles/global';

const Title = styled.h1`
  color: #8257e6;
  font-size: 100px;

`
export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>
        <Title>Hello World</Title>
      </h1>
    </div>
  );
}


