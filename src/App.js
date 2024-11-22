import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import About from './components/About';
import Contact from './components/Contact';
import Modify from './components/Modify';
import Help from './components/Help';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './components/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="logo">boOkBuS</div>
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/help">HELP</Link></li>
            <li><Link to="/modify">MODIFY</Link></li>
          </ul>
          {isLoggedIn ? (
            <LogoutButton setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Link to="/signin">
              <button className="sign-in">Sign In / Sign Up</button>
            </Link>
          )}
        </nav>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/modify" element={<Modify />} />
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

function LogoutButton({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <button className="sign-in" onClick={handleLogout}>Logout</button>
  );
}

export default App;
