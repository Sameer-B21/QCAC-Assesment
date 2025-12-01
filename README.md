# Harry Potter Book Series - Product Page

A magical, immersive React product page showcasing the Harry Potter Book Series, themed to match the official Wizarding World website aesthetic. This project demonstrates a complete product showcase with features, customer reviews, and an interactive review submission system using localStorage for data persistence.

## 🚀 Project Description

This is a single-page React application built for the QCAC Product Assessment. The page features a dark, magical design inspired by the Wizarding World website with:

- **Product Overview**: Hero banner with dark magical background, product image, and description
- **Features Section**: Spellbook-style cards highlighting key features of the book series
- **Customer Reviews**: Displays sample reviews from a JSON file and user-submitted reviews from localStorage
- **Add Review Form**: Hogwarts letter-style parchment form allowing users to submit reviews that are instantly added and persisted

## 📋 Technologies Used

- **React 18** - Modern React with functional components and hooks (useState, useEffect)
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom styling with magical theme, animations, and responsive design
- **localStorage API** - Client-side data persistence for user reviews
- **Local Fonts** - Georgia serif font (no external API calls)

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
│   │   ├── ProductOverview.jsx    # Hero banner with product name, image, and description
│   │   ├── Features.jsx           # Features section with spellbook-style cards
│   │   ├── ReviewList.jsx         # Container for all reviews
│   │   ├── ReviewItem.jsx         # Individual review display (parchment-style)
│   │   └── AddReviewForm.jsx      # Hogwarts letter-style form to submit new reviews
│   ├── data/
│   │   └── reviews.json           # Sample reviews (3 Harry Potter-themed reviews)
│   ├── utils/
│   │   └── localStorage.js        # Helper functions for localStorage (getReviews, saveReview)
│   ├── App.jsx                    # Main application component (merges sample + localStorage reviews)
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles with Wizarding World theme
├── index.html
├── package.json
├── vite.config.mjs
└── README.md
```

## ✨ Features

### 1. Product Overview
- Large hero banner with dark magical background (deep blues, blacks, dark maroons)
- Product title "Harry Potter Book Series" with gold accents and glowing effects
- Product image placeholder (local asset in /assets)
- Exact description: "A seven-book fantasy series following Harry Potter as he confronts magic, friendship, and destiny in the wizarding world."

### 2. Features Section
- 5 feature cards styled like magical spellbook panels:
  - Seven-book collection
  - Rich magical world-building
  - Award-winning fantasy series
  - Iconic characters (Harry, Hermione, Ron)
  - Suitable for readers 8+
- Responsive grid layout that adapts to screen size
- Magical hover effects with glow and shimmer

### 3. Customer Reviews
- Displays 3 pre-loaded sample reviews from `reviews.json` (Harry Potter-themed names)
- Shows all user-submitted reviews from localStorage
- Reviews appear in parchment-style cards with gold borders
- Each review displays:
  - Reviewer name
  - Star rating (1-5 stars with gold filled stars)
  - Review message
- Reviews are combined and displayed together (sample reviews first, then user reviews)

### 4. Add Review Form
- Styled like a Hogwarts letter parchment form
- Form fields:
  - Name (text input)
  - Rating (dropdown: 1-5 stars)
  - Message (textarea)
- On submission:
  - Validates all fields are filled
  - Saves review to localStorage
  - Instantly adds review to the UI (no page reload)
  - Resets form for next submission
  - Shows success animation

### 5. Data Handling
- Reads sample reviews from `reviews.json` on startup
- Reads localStorage reviews on startup
- Merges them into one list in state (sample reviews first)
- Renders combined reviews in ReviewList component
- New reviews are added to the beginning of the list

## 🎨 Design Theme

The UI is themed to match the **official Harry Potter website (Wizarding World)**:

- **Dark, Magical Theme**: Deep blues (#0b0a14, #1c1c2b), blacks, dark maroons (#6b1a1a, #4a0e0e)
- **Gold Accents**: #d4a642 for headings, borders, icons, and highlights
- **Elegant Serif Fonts**: Georgia (local font, no external API calls)
- **Magical Effects**: 
  - Soft glowing elements
  - Shimmer animations
  - Starry background
  - Hover effects with "magic" glow
- **Parchment Textures**: Subtle gradients and textures for review cards and forms
- **Premium Layout**: Cinematic, mystical feel with rounded edges and shadowed elements
- **Responsive Design**: Fully responsive layout that works on:
  - Desktop (1200px max-width)
  - Tablet (768px breakpoint)
  - Mobile (480px and 360px breakpoints)

## 🔧 Key Components

### ProductOverview.jsx
Displays the main product information with hero banner, image, and exact description.

### Features.jsx
Renders a grid of feature cards styled like spellbook panels with icons, titles, and descriptions.

### ReviewList.jsx
Container component that manages the display of all reviews. Handles empty state and renders ReviewItem components.

### ReviewItem.jsx
Individual review component that displays reviewer name, star rating, and message in a parchment-style card.

### AddReviewForm.jsx
Hogwarts letter-style form component with controlled inputs, validation, and submission handling.

### localStorage.js (utils)
Helper functions:
- `getReviews()` - Retrieves all reviews from localStorage
- `saveReview(review)` - Saves a new review to localStorage with id and timestamp
- `clearReviews()` - Utility to clear all reviews (for testing)

## 🎯 Challenges & Solutions

### Challenge 1: Combining Sample and Stored Reviews
**Solution**: Used `useEffect` to load both sample reviews from JSON and stored reviews from localStorage on component mount. Filtered out any duplicate sample reviews from localStorage to avoid showing them twice, then combined them into a single state array.

### Challenge 2: Instant UI Updates Without Page Reload
**Solution**: After saving to localStorage, immediately update the React state to add the new review to the UI, providing instant feedback. New reviews appear at the top of the list with a special animation.

### Challenge 3: Responsive Design
**Solution**: Used CSS Grid and Flexbox with comprehensive media queries to create a layout that adapts smoothly across all device sizes. Tested breakpoints at 1024px, 768px, 480px, and 360px.

### Challenge 4: Image Fallback
**Solution**: Implemented an `onError` handler on the image element to fallback to an inline SVG placeholder if the image file doesn't exist in the assets folder.

### Challenge 5: Form State Management
**Solution**: Used controlled components with React's `useState` hook to manage form data and reset the form after successful submission. Added validation to ensure all fields are filled.

### Challenge 6: Matching Wizarding World Theme
**Solution**: Created a comprehensive color palette matching the official website (dark blues, maroons, gold), used local Georgia font instead of external APIs, and implemented magical effects like glows, shimmers, and animations throughout.

## 🚦 How to Use

1. **View the Product**: Scroll through the hero banner, product overview, and features
2. **Read Reviews**: Browse existing customer reviews (3 sample reviews + any user-submitted reviews)
3. **Submit a Review**: 
   - Fill in your name
   - Select a rating (1-5 stars)
   - Write your review message
   - Click "✨ Cast Your Review ✨"
   - Your review will appear instantly at the top of the list and be saved for future visits

## 📝 Notes

- The product image should be placed in the `public/assets/` folder as `harry-potter-books.jpg`
- If the image is not found, an inline SVG placeholder will be displayed automatically
- All user-submitted reviews are stored in browser localStorage under the key `harry_potter_reviews`
- Reviews persist across browser sessions but are specific to each browser/device
- Sample reviews are loaded from `src/data/reviews.json` and have IDs 1, 2, and 3
- The app uses only local fonts (Georgia) - no external API calls for fonts or any other resources
- All styling matches the Wizarding World website aesthetic

## 📸 Screenshots

_(Screenshots can be added here to showcase the final product)_

## 🔮 Future Enhancements

Potential improvements that could be added:
- Edit/delete functionality for reviews
- Review sorting (by date, rating, etc.)
- Review pagination for large numbers of reviews
- User authentication for review management
- Backend API integration for cross-device review sync
- Image upload for product photos
- Product rating aggregation and display
- Dark/light theme toggle
- More magical animations and effects

## 📄 License

This project is created for QCAC Product Assessment purposes.

---

**Built with ✨ magic ✨ using React and Vite**
