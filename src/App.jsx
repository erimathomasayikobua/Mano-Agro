import { useState } from 'react';
import Applogo from 'C:/Users/user/GrainPulse/public/logo.jpg'; 
import './App.css';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`app-header ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="logo-container">
          <img src={Applogo} alt="Logo" className="logo" />
          <div>
            <h1>Mano Agro Technologies</h1>
            <nav className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="menu-icon" onClick={handleMenuClick}>
          {/* SVG for the menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      </header>

      <h2>~bringing agro technologies~</h2>
      <div className="card">
        <p>
          vision: "A bountiful harvest from your Farm"
        </p>
      </div>
      <p className="read-the-docs">
        i-tech programmers
      </p>
    </>
  );
}

export default App;
