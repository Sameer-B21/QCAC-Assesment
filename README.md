# Harry Potter Book Series - Product Page

A magical, immersive React product page showcasing the Harry Potter Book Series. Features a wizarding-world-inspired design, interactive carousel, and customer review system using localStorage.

## 🚀 Project Description
This is a single-page React application built for the QCAC Product Assessment. It demonstrates:

- **Product Overview**: Hero banner with product title, image carousel, and book-specific descriptions
- **Features Section**: Spellbook-style cards highlighting key features of the book series
- **Customer Reviews**: Pre-loaded sample reviews plus user-submitted reviews saved in localStorage
- **Add Review Form**: Hogwarts letter-style form with instant UI updates on submission

## 📋 Technologies Used
- React 18 (functional components, hooks)
- Vite (fast dev server)
- JavaScript (ES6+)
- CSS3 (custom styling, animations, responsive layout)
- localStorage (client-side data persistence)
- Custom Harry Potter-style font (local asset)

## 🛠️ Setup Instructions
```bash
# Clone project
cd QCAC-Assessment

# Install dependencies
npm install

# Run development server
npm run dev
```
Open your browser at `http://localhost:5173`.

## 📁 Project Structure
```
src/
├── components/        # ProductOverview, Features, ReviewList, ReviewItem, AddReviewForm
├── data/              # Sample reviews (reviews.json)
├── utils/             # localStorage helper functions
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
public/assets/         # Book images
```

## ✨ Key Features
- **Interactive Carousel**: Navigate through 7 books; title and description update with each image
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Customer Reviews**: Displays sample reviews and user-submitted reviews in parchment-style cards
- **Add Review Form**: Validates input, saves to localStorage, and updates UI instantly
- **Themed UI**: Dark magical theme with gold accents, glowing effects, and custom Harry Potter-style font

## 🔮 Future Enhancements
- Edit/delete reviews
- Sorting and pagination
- Cross-device review sync with backend
- Dark/light mode toggle
- Additional magical animations

---

**Built with ✨ magic ✨ using React and Vite**
