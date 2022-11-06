import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Prodaucts from './components/pages/Prodaucts';
import Error from './components/pages/Error';
import Login from './components/pages/Login';

function App() {
  const [user, setUser] = useState({})
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home user={user}/>}>
          <Route path='About' element={<About />} />
          <Route path='Prodaucts' element={<Prodaucts />} />
          <Route path='Login' element={<Login setUser={setUser}/>}/>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;