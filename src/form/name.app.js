import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Name from './root.component.js';

function domElementGetter() {
  return document.getElementById("name")
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Name,
  domElementGetter,
})

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];