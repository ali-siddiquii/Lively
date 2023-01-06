import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/hero';
import Login from './components/login';
import About from './components/about';
import ErrorPage from './components/error';
import Application from './components/homePage';
import ErrorPage2 from './components/errorV2';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home.js" element={<Login />} />
          <Route path="/404.js" element={<ErrorPage />} />
          <Route path="/aboutUS.js" element={<About />} />
          <Route path="/main.js" element={<Application />} />
          <Route path="/404v2.js" element={<ErrorPage2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
