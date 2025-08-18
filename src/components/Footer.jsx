import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="grid">
        <div>
          <h4>BRO-KERS</h4>
          <p>Breaking Barriers to Real Estate.</p>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/properties">Properties</Link></li>
          </ul>
        </div>
        <div>
          <h5>Support</h5>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/legal">Legal</Link></li>
          </ul>
        </div>
        <div>
          <h5>Get the latest</h5>
          <form onSubmit={(e)=>e.preventDefault()} className="newsletter">
            <input placeholder="Your email" type="email" required />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="fineprint">© {new Date().getFullYear()} BRO-KERS. All rights reserved.</div>
    </footer>
  )
}
