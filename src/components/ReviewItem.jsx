import React, { useEffect, useRef } from 'react';

export default function ReviewItem({ review, isNew }) {
  const reviewRef = useRef(null);

  useEffect(() => {
    if (isNew && reviewRef.current) {
      // Add new-review class for special animation
      reviewRef.current.classList.add('new-review');
      // Scroll into view smoothly
      setTimeout(() => {
        reviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
      
      // Remove the special styling after animation completes (but keep the review visible)
      const animationTimeout = setTimeout(() => {
        if (reviewRef.current) {
          reviewRef.current.classList.add('animation-complete');
          // Optionally remove new-review class after a longer delay to keep it visible
          setTimeout(() => {
            if (reviewRef.current) {
              reviewRef.current.classList.remove('new-review');
            }
          }, 2000);
        }
      }, 1000);
      
      return () => clearTimeout(animationTimeout);
    }
  }, [isNew]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div ref={reviewRef} className="review-item">
      <div className="review-header">
        <h3 className="reviewer-name">{review.name}</h3>
        <div className="review-rating">
          {renderStars(review.rating)}
          <span className="rating-number">({review.rating}/5)</span>
        </div>
      </div>
      <p className="review-message">{review.message}</p>
    </div>
  );
}

