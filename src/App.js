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
    scroll-behavior: smooth;
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

  // modal
  .react-responsive-modal-modal {
    background-color: #E7DCFA;
    padding: 21px 34px 38px 34px;
    width: 100%;
    border: 4px solid #000000;
    box-shadow: 0px 9px 4px rgba(0, 0, 0, 0.25);
    border-radius: 35px;
  }

`;

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <MainPage />
    </div>
  );
};

export default App;
