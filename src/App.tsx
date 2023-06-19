import React from 'react';

import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarPage, LoginPage, RegisterPage} from "./pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'login'}/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>
                    <Route path={'cars'} element={<CarPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
