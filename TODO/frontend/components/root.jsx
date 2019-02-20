
import React from 'react';
import { Provider } from 'react-redux';
import App from './app';




//functional component 

// +
// very lightweight 
// looks like a js func, react create Element
const Root = (props) => (
    <Provider store={props.store}>
      <App />
    </Provider>
);

// define component.

export default Root;

