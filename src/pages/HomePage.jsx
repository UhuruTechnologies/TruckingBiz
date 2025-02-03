import React from 'react'
import { useSpring, animated } from '@react-spring/web'

export default function HomePage() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  })

  return (
    <animated.div style={fadeIn}>
      <section className="hero">
        <div className="hero-content">
          <h2>Nationwide Cargo Transport &amp; Moving Solutions</h2>
          <button className="cta-button">Get a Quote</button>
        </div>
      </section>

      <section className="contact-bar">
        <div className="contact-item">📞 1-800-555-HAUL</div>
        <div className="contact-item">✉️ dispatch@12nationwide.com</div>
        <div className="contact-item">💬 Live Chat</div>
      </section>
    </animated.div>
  )
}
