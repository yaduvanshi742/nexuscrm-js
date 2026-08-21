import { App } from './app/App.js';
import { registerServiceWorker } from './utils/pwa.js';

const root = document.querySelector('#app');
const app = new App(root);
app.start();
registerServiceWorker();
