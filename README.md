# Harry Potter Book Series - Product Page

A modern, responsive React product page showcasing the Harry Potter Book Series. This project demonstrates a complete product showcase with features, customer reviews, and an interactive review submission system using localStorage for data persistence.

## 🚀 Project Description

This is a single-page React application built for the QCAC Product Assessment. The page features a clean, modern design that showcases the Harry Potter Book Series with:

- **Product Overview**: Displays the product name, image, and description
- **Features Section**: Highlights key features of the book series in an attractive card layout
- **Customer Reviews**: Shows sample reviews from a JSON file and user-submitted reviews from localStorage
- **Add Review Form**: Allows users to submit their own reviews, which are instantly added to the page and persisted in localStorage

## 📋 Technologies Used

- **React 18** - Modern React with functional components and hooks
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom styling with Flexbox and Grid for responsive design
- **localStorage API** - Client-side data persistence for user reviews

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd QCAC-Assesment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will be available at `http://localhost:5173` (or the port shown in your terminal)
   - The page will automatically reload when you make changes

### Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
QCAC-Assesment/
├── public/
│   └── assets/              # Product images (place harry-potter-books.jpg here)
├── src/
│   ├── components/
│   │   ├── ProductOverview.jsx    # Product name, image, and description
│   │   ├── Features.jsx           # Features section with cards
│   │   ├── ReviewList.jsx         # Container for all reviews
│   │   ├── ReviewItem.jsx         # Individual review display
│   │   └── AddReviewForm.jsx      # Form to submit new reviews
│   ├── data/
│   │   └── reviews.json           # Sample reviews (3 initial reviews)
│   ├── utils/
│   │   └── localStorage.js        # Helper functions for localStorage
│   ├── App.jsx                    # Main application component
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── index.html
├── package.json
├── vite.config.mjs
└── README.md
```

## ✨ Features

### 1. Product Overview
- Displays the product name "Harry Potter Book Series"
- Product image with fallback placeholder
- Descriptive text about the series

### 2. Features Section
- 5 feature cards showcasing:
  - Includes 7 books
  - Rich world-building
  - Award-winning fantasy storytelling
  - Suitable for ages 8+
  - Iconic characters (Harry, Hermione, Ron)
- Responsive grid layout that adapts to screen size

### 3. Customer Reviews
- Displays 3 pre-loaded sample reviews from `reviews.json`
- Shows all user-submitted reviews from localStorage
- Each review displays:
  - Reviewer name
  - Star rating (1-5 stars)
  - Review message
- Reviews are combined and displayed in chronological order

### 4. Add Review Form
- Form fields:
  - Name (text input)
  - Rating (dropdown: 1-5 stars)
  - Message (textarea)
- On submission:
  - Validates all fields are filled
  - Saves review to localStorage
  - Instantly adds review to the UI (no page reload)
  - Resets form for next submission

### 5. Data Persistence
- Uses localStorage to persist user-submitted reviews
- Reviews persist across browser sessions
- Automatically loads stored reviews on page load
- Combines sample reviews with stored reviews seamlessly

## 🎨 Design Features

- **Modern UI**: Clean, professional design with a green color scheme inspired by the Harry Potter theme
- **Responsive Design**: Fully responsive layout that works on:
  - Desktop (1200px max-width)
  - Tablet (768px breakpoint)
  - Mobile (480px breakpoint)
- **Interactive Elements**: 
  - Hover effects on feature cards
  - Smooth transitions and animations
  - Form validation and user feedback
- **Accessibility**: 
  - Semantic HTML structure
  - Proper form labels
  - Keyboard navigation support

## 🔧 Key Components

### ProductOverview.jsx
Displays the main product information with image and description.

### Features.jsx
Renders a grid of feature cards with icons, titles, and descriptions.

### ReviewList.jsx
Container component that manages the display of all reviews. Handles empty state.

### ReviewItem.jsx
Individual review component that displays reviewer name, star rating, and message.

### AddReviewForm.jsx
Form component with controlled inputs, validation, and submission handling.

### localStorage.js (utils)
Helper functions:
- `getReviews()` - Retrieves all reviews from localStorage
- `saveReview(review)` - Saves a new review to localStorage
- `clearReviews()` - Utility to clear all reviews (for testing)

## 🎯 Challenges & Solutions

### Challenge 1: Combining Sample and Stored Reviews
**Solution**: Used `useEffect` to load both sample reviews from JSON and stored reviews from localStorage, then combined them into a single state array.

### Challenge 2: Instant UI Updates Without Page Reload
**Solution**: After saving to localStorage, immediately update the React state to add the new review to the UI, providing instant feedback.

### Challenge 3: Responsive Design
**Solution**: Used CSS Grid and Flexbox with media queries to create a layout that adapts smoothly across all device sizes.

### Challenge 4: Image Fallback
**Solution**: Implemented an `onError` handler on the image element to fallback to a placeholder if the image file doesn't exist.

### Challenge 5: Form State Management
**Solution**: Used controlled components with React's `useState` hook to manage form data and reset the form after successful submission.

## 🚦 How to Use

1. **View the Product**: Scroll through the product overview and features
2. **Read Reviews**: Browse existing customer reviews
3. **Submit a Review**: 
   - Fill in your name
   - Select a rating (1-5 stars)
   - Write your review message
   - Click "Submit Review"
   - Your review will appear instantly and be saved for future visits

## 📝 Notes

- The product image should be placed in the `public/` folder as `harry-potter-books.jpg`
- If the image is not found, a placeholder will be displayed automatically
- All user-submitted reviews are stored in browser localStorage
- Reviews persist across browser sessions but are specific to each browser/device
- Sample reviews are loaded from `src/data/reviews.json`

## 🔮 Future Enhancements

Potential improvements that could be added:
- Edit/delete functionality for reviews
- Review sorting (by date, rating, etc.)
- Review pagination for large numbers of reviews
- User authentication for review management
- Backend API integration for cross-device review sync
- Image upload for product photos
- Product rating aggregation and display

## 📄 License

This project is created for QCAC Product Assessment purposes.

---

**Built with ❤️ using React and Vite**
