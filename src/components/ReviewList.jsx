import React from 'react';
import ReviewItem from './ReviewItem.jsx';

export default function ReviewList({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="reviews-section">
        <h2 className="section-title">Customer Reviews</h2>
        <p className="no-reviews">No reviews yet. Be the first to review!</p>
      </div>
    );
  }

  return (
    <section className="reviews-section">
      <h2 className="section-title">Customer Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => {
          // Mark the first review as potentially new (user-submitted reviews come first)
          const isNew = index === 0 && review.timestamp && 
            new Date(review.timestamp).getTime() > Date.now() - 5000;
          return (
            <ReviewItem key={review.id} review={review} isNew={isNew} />
          );
        })}
      </div>
    </section>
  );
}

