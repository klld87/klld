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

  /* carousel */
  .slick-slider  {
    position: relative;
    display: flex;
    flex-direction: row;
    outline: none;
    align-items: center;
    
    .slick-list {
      outline: none;
      height: auto !important;
      width: 100%;
      overflow: hidden;
      padding-bottom: 20px;

      .slick-track {
        display: flex;
        outline: none;
        flex-direction: row;
        transform: none;
      }
    }

    .slick-dots {
      position: absolute;
      display: flex!important;
      flex-direction: row;
      align-items: center;
      width: 100%;
      justify-content: center;
      height: 10px;
      padding-left: 0;
      top: 178px;

      li {
        margin-right:10px;
        width: 10px;
        height: 10px;
        list-style: none;

          &.slick-active button {
            background-color: #1589D4; 
        }

        button {
          width: 10px !important;
          height: 10px !important;
          font-size: 0px;
          border: none;
          outline: none;
          line-height: 0;
          white-space: nowrap;
          overflow: hidden;
          text-indent: -9999px;
          padding: 0;
          background-color: #E1EFF8;
          border-radius: 10px;
        }
      }

      @media (min-width: 400px) {
          top: 262px;
      }

      @media (min-width: 425px) {
          top: 295px;
      }

      @media (min-width: 768px) {
          top: 315px;
      }

      @media (min-width: 900px) {
          top: 400px;
      }

      @media (min-width: 1200px) {
          top: 420px;
      }
    }
  }
    
  /* carousel */

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
