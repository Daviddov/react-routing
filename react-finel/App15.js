import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Info from './components/pages/Info';
import Error from './components/pages/Error';
import Login from './components/pages/Login';
import Todos from './components/pages/Todos';
import Posts from './components/pages/Posts';
import Albums from './components/pages/Albums';

function App15() {
    const [user, setUser] = useState()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='Login' element={<Login setUser={setUser} />} />
                <Route path='/' element={<Home user={user} setUser={setUser} />} >

                    <Route path='Info' element={<Info />} />
                    <Route path='Todos' element={<Todos />} />
                    <Route path='Posts' element={<Posts />} />
                    <Route path='Albums' element={<Albums />} />
                    <Route path='*' element={<Error />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App15;