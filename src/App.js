import { createGlobalStyle } from 'styled-components';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import routes from './routes';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    @font-face {
      font-family: 'Kool Beans';
      font-style: normal;
      font-weight: normal;
      src: local('Kool Beans'), url('KoolBean.woff') format('woff');
    }
    @font-face {
      font-family: 'Comic Sans MS';
      font-style: normal;
      font-weight: normal;
      src: local('Comic Sans MS'), url('comic-sans.woff') format('woff');
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Comic Sans MS', -apple-system, Roboto, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 0;
    font-family: inherit;
    font-size: 100%;
    background: none;
    border: 0;
  }

  * {
    box-sizing: border-box;
  }

  // modal
  .react-responsive-modal-modal {
    padding: 0;
    width: 100%;
    background-color: transparent;
    max-width: 1150px;
  }

`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          {routes.map((route) => {
            return <Route key={route.path} {...route} />;
          })}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
