import React, { useState } from 'react';

export default function AddReviewForm({ onAddReview }) {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Add success animation to button
    const button = e.target.querySelector('.submit-button');
    if (button) {
      button.classList.add('success');
      setTimeout(() => button.classList.remove('success'), 2000);
    }

    onAddReview(formData);
    
    // Reset form with animation
    setFormData({
      name: '',
      rating: 5,
      message: ''
    });
  };

  return (
    <section className="add-review-section">
      <h2 className="section-title">Add Your Review</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Fair</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Review</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your thoughts about the Harry Potter Book Series..."
            rows="5"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          <span>✨ Cast Your Review ✨</span>
        </button>
      </form>
    </section>
  );
}

