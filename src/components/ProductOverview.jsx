import React, { useState } from 'react';

export default function ProductOverview() {
  const books = [
    {
      image: '/assets/hp1.jpg',
      title: "Harry Potter and the Philosopher's Stone",
      description: "Harry discovers he is a wizard and enters Hogwarts, uncovering the mystery of the Philosopher’s Stone."
    },
    {
      image: '/assets/hp2.jpg',
      title: "Harry Potter and the Chamber of Secrets",
      description: "Harry returns to Hogwarts and confronts the dark secrets hidden within the Chamber of Secrets."
    },
    {
      image: '/assets/hp3.jpg',
      title: "Harry Potter and the Prisoner of Azkaban",
      description: "A dangerous fugitive is on the loose and Harry learns more about his parents' past."
    },
    {
      image: '/assets/hp4.jpg',
      title: "Harry Potter and the Goblet of Fire",
      description: "Harry is mysteriously entered into the Triwizard Tournament and faces deadly magical challenges."
    },
    {
      image: '/assets/hp5.jpg',
      title: "Harry Potter and the Order of the Phoenix",
      description: "Harry battles against the Ministry’s denial of Voldemort’s return and forms Dumbledore’s Army."
    },
    {
      image: '/assets/hp6.jpg',
      title: "Harry Potter and the Half-Blood Prince",
      description: "Harry uncovers Voldemort’s dark past and the truth behind Horcruxes."
    }, 
    {
      image: '/assets/hp7.jpg',
      title: "Harry Potter and the Deathly Hallows",
      description: "Harry, Hermione, and Ron embark on a dangerous mission to destroy Voldemort’s Horcruxes, leading to the epic battle at Hogwarts and the ultimate showdown with the Dark Lord."
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === books.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const currentBook = books[currentImageIndex];

  return (
    <section className="product-overview">
      <div className="hero-banner">
        <div className="hero-content">
        {/* <img 
  src="/assets/hp-logo.png" 
  alt="Harry Potter Logo" 
  className="hp-logo"
  /> */}
  <h1 className="product-title">Harry Potter Book Series</h1>


          <div className="overview-layout">
            {/* ==== LEFT: CAROUSEL ==== */}
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
                  src={currentBook.image}
                  alt={currentBook.title}
                  className="product-image"
                />
              </div>

              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={goToNext}
                aria-label="Next image"
              >
                ›
              </button>

              {/* Indicators */}
              <div className="carousel-indicators">
                {books.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                  />
                ))}
              </div>
            </div>

            

            {/* ==== RIGHT: BOOK INFO ==== */}
            <div className="book-info">
              <h2 className="book-title">{currentBook.title}</h2>
              <p className="book-description">{currentBook.description}</p>
            </div>
          </div>

          <p className="product-description">
            A seven-book fantasy series following Harry Potter as he confronts magic,
            friendship, and destiny in the wizarding world.
          </p>
        </div>
      </div>
    </section>
  );
}
