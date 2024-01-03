import React from 'react'
import "flowbite"
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Singlepost from './Pages/Singlepost';
import Addpost from './Pages/Addpost';
import AuthProvider from './Context/AuthContext';
import PostProvider from './Context/PostContext'


function App() {
  return (
    <div>
      <BrowserRouter>
      <AuthProvider>
      <PostProvider>        
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
          <Route path='Login' element={<Login />}/>
          <Route path='Profile' element={<Profile />} />
          <Route path='Register' element={<Register />} />
          <Route path='post/:id' element={<Singlepost />} />
          <Route path='Addpost' element={<Addpost />} />
        </Route>
      </Routes>
      </PostProvider>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
