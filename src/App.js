import React from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './components/Footer.jsx';
import TopMenu from './components/TopMenu.jsx';
import MainContent from './components/MainContent.jsx';

import Header from './components/Header';



function App() {
  return (
    <div className="App"> 
      <TopMenu />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;