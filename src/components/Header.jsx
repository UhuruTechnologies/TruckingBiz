import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <h1 className="logo">12NationWide</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/drivers">Drivers</a></li>
            <li><a href="/booking">Book Now</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
