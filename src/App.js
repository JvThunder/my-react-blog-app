import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import BlogPost from './BlogPost';
import HomePage from './HomePage';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/post/:slug" element={
            <>
              <Header />
              <BlogPost />
            </>
          } />
          <Route path="/" element={
            <>
              <Header />
              <HomePage />
            </>
          } />
          <Route path="/post" element={
            <>
              <Header />
              <HomePage />
            </>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
