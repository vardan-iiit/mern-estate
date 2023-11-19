import React, { useState } from 'react';
import './payment.css'; // Import the CSS file

export default function Payment() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission logic here
    console.log('Form submitted:', { name, cardNumber, expiryDate, cvc });
    alert('Form submitted!'); // Simulate a successful form submission
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <form onSubmit={handleSubmit} className="payment-form">
        <label className="form-label">
          Name on Card:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <div className="form-row">
          <label className="form-label">
            Expiry Date:
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
              className="form-input form-input-small"
            />
          </label>
          <label className="form-label">
            CVC:
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              required
              className="form-input form-input-small"
            />
          </label>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
