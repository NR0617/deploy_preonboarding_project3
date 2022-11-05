import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/404" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
