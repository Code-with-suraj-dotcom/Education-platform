# Scaler School of Technology - Educational Web Platform

A multi-page educational web application designed to provide structured learning and guided practice in core computer science subjects. Built with vanilla HTML, CSS, and JavaScript.

## 📋 Project Overview

This is a front-end educational platform that offers interactive learning paths with quizzes and progress tracking across three main subjects:
- **Data Structures & Algorithms (DSA)**
- **Web Development**
- **Mathematics for Computer Science**

## ✨ Features

### 🔐 User Authentication
- Simple login system with user details storage
- User information persists across pages
- Fresh progress session on each login

### 📚 Learning Paths
- **DSA Topics**: Arrays, Strings, Recursion, Searching & Sorting
- **Web Development Topics**: HTML, CSS (with placeholders for JavaScript and DOM)
- **Mathematics Topics**: Probability, Statistics (with placeholders for Algebra and Discrete Math)

### 📖 Educational Content
- Detailed topic pages with learning content
- Code examples and explanations
- Difficulty levels for each topic

### 🎯 Interactive Quizzes
- Multiple-choice quizzes for each topic
- Instant scoring and feedback
- Teacher-style performance feedback (Perfect/Good/Needs Improvement)
- Subject-specific quiz result tracking

### 📊 Progress Tracking
- Subject-wise progress bars on main dashboard
- Detailed statistics on subject pages:
  - Completion percentage
  - Average score
  - Highest score
- Cross-subject isolation (DSA progress doesn't affect Web Dev progress)

### 🎨 Modern UI/UX
- Clean and responsive design
- Consistent branding across all pages
- Professional color scheme
- Mobile-friendly layout

## 🗂️ Project Structure

```
Scaler School of Technology/
│
├── index.html              # Welcome/landing page (entry point)
├── login.html              # User login page
├── dashboard.html          # Main dashboard
│
├── dsa.html                # DSA subject page
├── webdev.html             # Web Development subject page
├── maths.html              # Mathematics subject page
│
├── topics.html             # Dynamic topic content page
├── quiz.html               # Dynamic quiz page
│
├── style.css               # Global stylesheet
│
├── dashboard.js            # Dashboard progress logic
├── dsa.js                  # DSA progress calculations
├── webdev.js               # Web Dev progress calculations
├── maths.js                # Mathematics progress calculations
├── topic.js                # Topic content loader
├── quiz.js                 # Quiz functionality
├── user.js                 # User data management
│
└── assets/                 # Images and media files
    └── scaler_logo.jfif
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required

### Installation & Running

1. **Clone or Download** the project folder

2. **Open the landing page**:
   - Double-click `index.html` OR
   - Open `index.html` in your web browser

3. **Start Using**:
   - Click "Login" on the landing page
   - Enter your details (name, email, date of birth)
   - Explore subjects and take quizzes!

### Alternative: Using Live Server (Optional)
If you prefer using a local server:

1. Install VS Code and the "Live Server" extension
2. Right-click `index.html` and select "Open with Live Server"
3. The application will open in your default browser

## 📖 How to Use

1. **Login**
   - Start at `index.html`
   - Click "Login" and enter your details
   - Your name will appear across all pages

2. **Explore Subjects**
   - From the dashboard, click on any subject card
   - View subject statistics and available topics

3. **Learn Topics**
   - Click "View Topic" on any topic card
   - Read through the learning content
   - Click "Start Quiz" when ready

4. **Take Quizzes**
   - Answer all questions
   - Click "Submit Quiz"
   - View your score and feedback
   - Return to the subject page

5. **Track Progress**
   - Main dashboard shows overall progress by subject
   - Subject pages show detailed statistics
   - Complete more quizzes to improve your scores

## 💾 Data Storage

The application uses **browser localStorage** for data persistence:

- **User Data**: Stored under key `"user"`
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "dob": "2000-01-01"
  }
  ```

- **Quiz Results**: Stored under key `"quizResults"` with nested structure
  ```json
  {
    "dsa": {
      "arrays": 80,
      "strings": 90
    },
    "webdev": {
      "html": 95,
      "css": 85
    },
    "maths": {
      "probability": 75
    }
  }
  ```

### Data Persistence
- Data persists across browser sessions
- Closing the browser doesn't clear progress
- Logging in clears previous user's progress

### Clearing Data
To reset all data:
- Clear browser localStorage OR
- Open Developer Tools → Application → Local Storage → Clear All OR
- Log in as a new user (automatically clears previous progress)

## 🎯 Key Features Explained

### Cross-Subject Progress Isolation
Each subject's quiz results are stored separately, ensuring:
- DSA quizzes only update DSA progress
- Web Dev quizzes only update Web Dev progress
- Maths quizzes only update Maths progress

### Dynamic URL Parameters
The application uses URL query parameters for navigation:
- `topics.html?subject=dsa&topic=arrays`
- `quiz.html?subject=webdev&topic=html`

### Subject-Specific Back Navigation
After completing a quiz, users are redirected to their respective subject page:
- HTML quiz → Back to Web Development
- Arrays quiz → Back to DSA
- Probability quiz → Back to Mathematics

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, flexbox, responsive design
- **Vanilla JavaScript**: All functionality (no frameworks)
- **LocalStorage API**: Client-side data persistence

## 📱 Browser Compatibility

Tested and working on:
- ✅ Google Chrome (latest)
- ✅ Mozilla Firefox (latest)
- ✅ Microsoft Edge (latest)
- ✅ Safari (latest)

## 🔒 Privacy & Security

- All data is stored locally in the browser
- No data is sent to any server
- No external API calls
- No cookies used
- User data never leaves the device

## 🎓 Educational Use

This project is designed for:
- Computer Science students learning web development
- Educational institutions teaching HTML/CSS/JavaScript
- Self-learners practicing front-end development
- Portfolio projects demonstrating vanilla JavaScript skills

## 🚧 Future Enhancements (Potential)

- [ ] Add more topics (JavaScript, DOM Manipulation, Algebra, etc.)
- [ ] Implement timed quizzes
- [ ] Add more questions per quiz
- [ ] Include code-based questions
- [ ] Export progress as PDF report
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Leaderboard feature

## 📝 Project Guidelines Compliance

### ✅ Core Requirements Met
- ✅ Multi-page structure with proper navigation
- ✅ User login with localStorage
- ✅ Subject categorization (DSA, Web Dev, Maths)
- ✅ Topic-based learning structure
- ✅ Interactive quizzes with scoring
- ✅ Progress tracking and statistics
- ✅ Responsive design
- ✅ Vanilla JavaScript (no frameworks)
- ✅ Clean, maintainable code
- ✅ Consistent UI/UX

### ✅ Technical Implementation
- ✅ localStorage for data persistence
- ✅ Cross-subject progress isolation
- ✅ Dynamic content loading
- ✅ URL parameter routing
- ✅ Error handling and graceful fallbacks
- ✅ DOMContentLoaded event handling
- ✅ JSON data structure

## 👥 Credits

Built as an **End Term Project** for Scaler School of Technology.

## 📄 License

This is an educational project. Feel free to use and modify for learning purposes.

---

**Built with ❤️ By Suraj Lakhyani**

*No frameworks. No dependencies. Just pure web technologies.*
