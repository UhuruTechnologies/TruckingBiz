import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>24/7 Dispatch: 1-800-555-HAUL</p>
          <p>Email: support@12nationwide.com</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/drivers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  )
}
