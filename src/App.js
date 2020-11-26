import React from 'react';
import './App.css';
import Header from './components/Header';
import Aside from './components/aside';
import Main from './components/main';
import Footer from './components/footer';
const App = () => {
  return (
    <div className="App">    
      <Header />
      <Aside />
     <Main />
     <Footer />
    </div>
  );
}


export default App;
