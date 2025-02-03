import React, { useState } from 'react'

const steps = [
  'Service Selection',
  'Pickup & Delivery',
  'Cargo Details',
  'Contact Info',
  'Payment & Confirm'
]

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Booking Form Data:', formData)
    // In a real app, you would send this data to a server
    alert('Booking submitted! (Check console for data)')
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3>Step 1: Service Selection</h3>
            <div className="service-options">
              <label>
                <input
                  type="radio"
                  name="serviceType"
                  value="cargo"
                  onChange={handleInputChange}
                />
                Cargo Transport
              </label>
              <label>
                <input
                  type="radio"
                  name="serviceType"
                  value="moving"
                  onChange={handleInputChange}
                />
                Moving Assistance
              </label>
            </div>
          </div>
        )
      case 2:
        return (
          <div>
            <h3>Step 2: Pickup &amp; Delivery Details</h3>
            <input
              type="text"
              name="pickupLocation"
              placeholder="Pickup Location"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="deliveryLocation"
              placeholder="Delivery Location"
              onChange={handleInputChange}
            />
          </div>
        )
      case 3:
        return (
          <div>
            <h3>Step 3: Cargo Details</h3>
            <input
              type="text"
              name="cargoType"
              placeholder="Cargo Type"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              onChange={handleInputChange}
            />
          </div>
        )
      case 4:
        return (
          <div>
            <h3>Step 4: Contact Information</h3>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleInputChange}
            />
          </div>
        )
      case 5:
        return (
          <div>
            <h3>Step 5: Payment &amp; Confirmation</h3>
            <p>Review your booking details and confirm.</p>
            <button onClick={() => alert('Payment simulation')}>Pay Now (Simulated)</button>
            <button onClick={() => alert('Quote requested!')}>Get a Quote</button>
          </div>
        )
      default:
        return <div>Unknown step</div>
    }
  }

  return (
    <div className="booking-page">
      <h2>Book Your Service</h2>
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className={`progress-step ${index + 1 === currentStep ? 'active' : ''}`}>
            {step}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="booking-form">
        {renderStepContent()}
        <div className="form-actions">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep}>
              Back
            </button>
          )}
          {currentStep < steps.length ? (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button type="submit">
              Confirm Booking
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
