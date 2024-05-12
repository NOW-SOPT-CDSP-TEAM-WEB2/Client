import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Test>test입니다</Test>
    </ThemeProvider>
  );
}

export default App;

const Test = styled.div`
  width: 1366px;

  color: ${({ theme }) => theme.colors.blue400};
  ${({ theme }) => theme.fonts.heading04}
`;
