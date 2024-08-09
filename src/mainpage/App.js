import React from 'react';
import './front_main.css';
import Header from './components/Header';
import Main from './components/Main';

console.log('App component loaded');
const App = () => {
    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    );
};

export default App;
