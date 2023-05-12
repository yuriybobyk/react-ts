import React from 'react';

import './App.css';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import TodoPage from "./pages/TodoPage/TodoPage";
import AlbumPage from "./pages/AlbumPage/AlbumPage";
import CommentPage from "./pages/CommentPage/CommentPage";
import Post from "./components/Post/Post";


function App() {
  return (
    <div className="App">
          <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'todos'} element={<TodoPage/>}/>
                <Route path={'albums'} element={<AlbumPage/>}/>
                <Route path={'comments'} element={<CommentPage/>}>
                    <Route path={':postId'} element={<Post/>}/>
                </Route>
            </Route>
          </Routes>
    </div>
  );
}

export default App;
