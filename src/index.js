import React from 'react';
import ReactDOM from 'react-dom'; //react is a view library, the litlle react bot that does 
//the DOM Manipulation. React DOM is used for the DOM. It could be react native for mobile...
import './index.css'; //this is a new syntax: add css for each different component. 
//it will apply to each will render it. 
//import Card from './Card'; //if there is no .js or something, it assumes it is JavaScript.
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker'; //allows to work feaster and offline
import 'tachyons';
//like { robot }. In other words, it has multiple exports.

ReactDOM.render(
  <App  />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
