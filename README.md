# Quiz App

## Overview
This is a React-based Quiz App that presents multiple-choice questions to the user, tracks their answers, and displays a final score and detailed results summary. The app is responsive and styled with simple CSS for a clean and user-friendly experience.

## Features
- Loads 5 questions from a local JSON-like array.
- Displays one question at a time with four options.
- Tracks correct and incorrect answers.
- Shows progress and score clearly.
- Results page with summary of answers and option to restart the quiz.
- Responsive design for desktop and mobile.
- React Router for navigation between Home, Quiz, and Results pages.

## Technologies Used
- React (functional components with hooks)
- React Router DOM
- CSS for styling
- Vite for development server and build

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository
2. Run `npm install` to install dependencies

### Running the App
Run the development server with:
```
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### Building for Production
Run:
```
npm run build
```

## Project Structure
- `src/` - Source code
  - `components/` - React components (Home, Quiz, Question, Results)
  - `App.jsx` - Main app with routing and state management
  - `main.jsx` - Entry point
  - `index.css` - Styles
- `index.html` - HTML template

## Notes
- Questions are currently loaded from a local array to avoid API rate limits.
- The app automatically advances to the next question after an answer is selected.
- The UI is styled with simple CSS for clarity and responsiveness.

## Future Improvements
- Add timer per question.
- Add difficulty levels.
- Persist high scores in localStorage.
- Add animations and accessibility improvements.

## Contact
For any questions, please contact hiring@todaypay.me.
