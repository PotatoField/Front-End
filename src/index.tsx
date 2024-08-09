/*import React from 'react';
import ReactDOM from 'react-dom';
import Create from './createpage/Create';

ReactDOM.render(
    <React.StrictMode>
        <Create />
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