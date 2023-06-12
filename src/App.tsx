import React from 'react';

import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarPage} from "./pages";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'cars'}/>}/>
            <Route path={'cars'} element={<CarPage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
