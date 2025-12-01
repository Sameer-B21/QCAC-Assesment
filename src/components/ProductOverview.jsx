import React, { useState } from 'react';

export default function ProductOverview() {
  const images = [
    '/assets/hp1.jpg',
    '/assets/hp2.jpeg',
    '/assets/hp3.jpg',
    '/assets/hp4.jpg',
    '/assets/hp5.jpg',
    '/assets/hp6.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="product-overview">
      <div className="hero-banner">
        <div className="hero-content">
          <h1 className="product-title">Harry Potter Book Series</h1>
          <div className="product-image-wrapper">
            <button 
              className="carousel-arrow carousel-arrow-left"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="image-container">
              <img 
                src={images[currentImageIndex]} 
                alt={`Harry Potter Book Series - Image ${currentImageIndex + 1}`}
                className="product-image"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzBiMGExNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iR2VvcmdpYSIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2Q0YTY0MiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkhhcnJ5IFBvdHRlciBCb29rIFNlcmllczwvdGV4dD48L3N2Zz4=';
                }}
              />
            </div>
            <button 
              className="carousel-arrow carousel-arrow-right"
              onClick={goToNext}
              aria-label="Next image"
            >
              ›
            </button>
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <p className="product-description">
            A seven-book fantasy series following Harry Potter as he confronts magic, friendship, and destiny in the wizarding world.
          </p>
        </div>
      </div>
    </section>
  );
}

