import React from 'react';

export default function ProductOverview() {
  return (
    <section className="product-overview">
      <div className="product-container">
        <div className="product-image-wrapper">
          <img 
            src="/assets/harry-potter-books.jpg" 
            alt="Harry Potter Book Series"
            className="product-image"
            onError={(e) => {
              // Fallback to a placeholder if image doesn't exist
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = 'https://via.placeholder.com/400x600/1a472a/ffffff?text=Harry+Potter+Book+Series';
            }}
          />
        </div>
        <div className="product-info">
          <h1 className="product-title">Harry Potter Book Series</h1>
          <p className="product-description">
            A seven-book fantasy series written by J.K. Rowling, following the journey of Harry Potter as he faces magic, friendship, and dark forces. Enter a world where magic is real, friendships are forged in fire, and the battle between good and evil unfolds across seven extraordinary volumes.
          </p>
        </div>
      </div>
    </section>
  );
}

