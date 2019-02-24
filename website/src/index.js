import React from 'react';
import ReactDOM  from 'react-dom';
import App from './components/App.jsx';

const title = 'Animalia';
const api = 'http://localhost:8080/api/animals/';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);