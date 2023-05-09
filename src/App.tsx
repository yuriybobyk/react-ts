import React from 'react';

import './App.css';
import Users from "./components/Users/Users";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div className="App">
            <div className={'container'}>
            <Users/>
            <hr/>
            <Comments/>
            </div>
        </div>
    );
}

export default App;
