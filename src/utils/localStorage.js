/**
 * localStorage helper functions for managing reviews
 */

const STORAGE_KEY = 'harry_potter_reviews';

/**
 * Get all reviews from localStorage
 * @returns {Array} Array of review objects
 */
export function getReviews() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
}

/**
 * Save a new review to localStorage
 * @param {Object} review - Review object with name, rating, message, and optionally id and timestamp
 * @returns {Object} The saved review with id and timestamp
 */
export function saveReview(review) {
  try {
    const existingReviews = getReviews();
    // If review already has id and timestamp (from App.jsx), use them; otherwise generate new ones
    const newReview = {
      ...review,
      id: review.id || Date.now(),
      timestamp: review.timestamp || new Date().toISOString()
    };
    
    // Check if review with this ID already exists to avoid duplicates
    const existingIndex = existingReviews.findIndex(r => r.id === newReview.id);
    if (existingIndex === -1) {
      // Review doesn't exist, add it
      existingReviews.push(newReview);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existingReviews));
    } else {
      // Review exists, update it
      existingReviews[existingIndex] = newReview;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existingReviews));
    }
    
    return newReview;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return null;
  }
}

/**
 * Clear all reviews from localStorage (utility function)
 * @returns {void}
 */
export function clearReviews() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
}

