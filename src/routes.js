// Pages
import MainPage from './pages/Main';
import BarPage from './pages/Bar';
import NotFoundPage from './pages/NotFound';

const routes = [
  {
    path: '/',
    component: MainPage,
    exact: true,
  },
  {
    path: '/bar',
    component: BarPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];

export default routes;
