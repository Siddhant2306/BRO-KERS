import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";
import ModeChanger from './ModeChanger'
import '../css/navbar.css'
import "../assets/logo.png"

export default function NavBar() {
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      <Link to="/" className="brand">BRO-KERS</Link>

      <nav className="navlinks">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/properties">Properties</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="nav-actions">
        <ModeChanger />

        {user ? (
          <>
            <span className="welcome">Hi, {user.username}</span>
            <button onClick={logout} className="btn secondary">Logout</button>
          </>
        ) : (
          <>
            <Link to="/signin" className="btn secondary">Sign In</Link>
            <Link to="/signup" className="btn primary">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
}

