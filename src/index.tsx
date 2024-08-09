/*import React from 'react';
import ReactDOM from 'react-dom';
import FrontGender from './genderpage/FrontGender';

ReactDOM.render(
    <React.StrictMode>
      <FrontGender />
    </React.StrictMode>,
    document.getElementById('root')
);*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/mainpage/App';

console.log('Index file loaded');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);