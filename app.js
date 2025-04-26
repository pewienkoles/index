import React, { useState } from 'react';
import Home from './pages/Home';
import Pope from './pages/Pope';
import CreamPuffs from './pages/CreamPuffs';
import Contact from './pages/Contact';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'pope':
        return <Pope />;
      case 'creampuffs':
        return <CreamPuffs />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    marginBottom: '20px'
  };

  const linkStyle = {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'blue',
    fontSize: '18px'
  };

  return (
    <div>
      <nav style={navStyle}>
        <span style={linkStyle} onClick={() => setPage('home')}>Home</span>
        <span style={linkStyle} onClick={() => setPage('pope')}>O Papieżu</span>
        <span style={linkStyle} onClick={() => setPage('creampuffs')}>O Kremówkach</span>
        <span style={linkStyle} onClick={() => setPage('contact')}>Kontakt</span>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
