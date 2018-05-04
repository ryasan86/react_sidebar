import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import AboutPage from './pages/About/About';

export const routes = [
  { name: 'Home', path: '/home', component: HomePage },
  { name: 'Login', path: '/login', component: LoginPage },
  { name: 'About', path: '/about', component: AboutPage },
  { to: '/home', redirect: true, path: '/', component: HomePage }
];
