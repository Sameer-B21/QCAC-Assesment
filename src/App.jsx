import React, { useState, useEffect } from 'react';
import ProductOverview from './components/ProductOverview.jsx';
import Features from './components/Features.jsx';
import ReviewList from './components/ReviewList.jsx';
import AddReviewForm from './components/AddReviewForm.jsx';
import { getReviews, saveReview } from './utils/localStorage.js';
import sampleReviews from './data/reviews.json';

export default function App() {
  const [reviews, setReviews] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load reviews on component mount
  useEffect(() => {
    const storedReviews = getReviews();
    // Get sample review IDs to avoid duplicates
    const sampleReviewIds = new Set(sampleReviews.map(r => r.id));
    // Filter out sample reviews from stored reviews to avoid duplicates
    const uniqueStoredReviews = storedReviews.filter(r => !sampleReviewIds.has(r.id));
    // Combine sample reviews with unique stored reviews
    const allReviews = [...sampleReviews, ...uniqueStoredReviews];
    setReviews(allReviews);
    setIsInitialized(true);
  }, []);

  // Handle adding a new review
  const handleAddReview = (reviewData) => {
    // Create new review with unique ID and timestamp
    const newReview = {
      ...reviewData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };
    
    // Save to localStorage - pass the complete review object
    const savedReview = saveReview(newReview);
    
    // Verify the review was saved successfully
    if (!savedReview) {
      console.error('Failed to save review to localStorage');
      alert('There was an error saving your review. Please try again.');
      return;
    }
    
    // Add to state immediately (no page reload) - add at the beginning
    setReviews(prev => {
      // Check if review already exists (shouldn't, but just in case)
      const exists = prev.some(r => r.id === savedReview.id);
      if (exists) {
        return prev;
      }
      return [savedReview, ...prev];
    });
  };

  return (
    <div className="app">
      <ProductOverview />
      <Features />
      <ReviewList reviews={reviews} />
      <AddReviewForm onAddReview={handleAddReview} />
    </div>
  );
}
