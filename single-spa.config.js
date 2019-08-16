import { registerApplication, start } from 'single-spa'

registerApplication(
  // Name of our single-spa application
  'home',
  // loadingFunction
  () => import('./src/home/home.app.js'),
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/home')
);

registerApplication(
  // Name of our single-spa application
  'form',
  // loadingFunction
  () => import('./src/form/name.app.js'),
  // activityFunction
  () => true
);

registerApplication(
  // Name of our single-spa application
  'navbar',
  // loadingFunction
  () => import('./src/about/about.app.js').then(module => module.navBar),
  // activityFunction
  () => true,
);

registerApplication(
  'angular', 
  () => import ('./src/angularJS/angularJS.app.js'), 
  (location) => location.pathname === "/angular" || 
    location.pathname === "/angular" || 
    location.pathname.startsWith('/angular')
);

start();