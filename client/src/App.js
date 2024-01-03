import React from 'react'
import "flowbite"
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
