import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import AboutPage from './pages/About';

export const routes = [
  { name: 'Home', path: '/home', component: HomePage },
  { name: 'Login', path: '/login', component: LoginPage },
  { name: 'About', path: '/about', component: AboutPage },
  { to: '/home', redirect: true, path: '/', component: HomePage }
];
