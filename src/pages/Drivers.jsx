import React from 'react'

export default function Drivers() {
  return (
    <div className="drivers-portal">
      <h2>Driver Portal</h2>
      <div className="driver-auth">
        <form className="login-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  )
}
