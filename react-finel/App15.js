import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Info from './components/pages/Info';
import Error from './components/pages/Error';
import Login from './components/pages/Login';

function App15() {
    const [user, setUser] = useState()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='Login' element={<Login setUser={setUser}/>}/>
                    <Route path='home' element={<Home user={user} />} />
                    <Route path='Info' element={<Info />} />
                    <Route path='*' element={<Error />} />
               
            </Routes>
        </BrowserRouter>
    );
}

export default App15;