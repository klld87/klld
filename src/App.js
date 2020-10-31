import { createGlobalStyle } from 'styled-components';

import MainPage from './pages/Main';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Comic Sans MS', -apple-system, Roboto, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
