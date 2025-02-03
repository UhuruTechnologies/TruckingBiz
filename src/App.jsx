import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Services from './pages/Services'
import Drivers from './pages/Drivers'
import BookingPage from './pages/BookingPage'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
