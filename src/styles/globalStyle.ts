import * as styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  @font-face {
    font-weight: 400;
    font-family: 'Pretendard-Regular';
    font-style: normal;
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0 auto;

    font-size: 62.5%;
    font-family: 'Pretendard-Regular';
  }

  body {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;

    cursor: pointer;
  }

  button {
    font: inherit;

    background: none;
    cursor: pointer;
    border: none;
  }

  select {
    cursor: pointer;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
`;

export default GlobalStyle;
