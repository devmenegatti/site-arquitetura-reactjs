import React from 'react';
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  document.addEventListener('contextmenu', event => event.preventDefault());
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
