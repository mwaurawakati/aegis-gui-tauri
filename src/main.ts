// import "./index.css";
// import App from "./App.svelte";

// const targetElement = document.getElementById("app");

// if (!targetElement) {
//   throw new Error("Could not find the element with ID 'app'.");
// }

// const app = new App({
//   target: targetElement,
// });

// export default app;

import { mount } from 'svelte'
import './index.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
