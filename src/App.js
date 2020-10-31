import { createGlobalStyle } from 'styled-components';

import MainPage from './pages/Main';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, Roboto, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    background-repeat: no-repeat;
    background-size: 100%;
    background-image: linear-gradient(
      188.62deg,
      rgba(223, 233, 115, 0.55),
      rgba(122, 61, 250, 0.385),
      rgba(250, 61, 73, 0.385),
      rgba(61, 250, 69, 0.385),
      rgba(223, 233, 115, 0.55),
      rgba(122, 61, 250, 0.385),
      rgba(250, 61, 73, 0.385),
      rgba(61, 250, 69, 0.385)
    );
  }

  html {
    @font-face {
    font-family: 'Kool Beans';
    font-style: normal;
    font-weight: normal;
    src: local('Kool Beans'), url('KoolBean.woff') format('woff');
    }
  }

  body {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainPage />
    </div>
  );
}

export default App;
