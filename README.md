# Java Cup – Coffee Shop Website & Chatbot

Java Cup is an interactive coffee shop website featuring a warm and friendly **CoffeeBot** assistant.  
It helps customers explore the menu, find coffee prices, and learn fun coffee facts.  
Built with **React** for the front-end and **Flask** for the back-end.

---

## Features

- Modern and responsive coffee shop website UI.
- **CoffeeBot** – a chatbot assistant that:
  - Answers menu & pricing questions.
  - Shares coffee trivia.
  - Greets customers warmly.
- Fast & lightweight front-end in **React**.
- Back-end in **Flask** with REST API for chat.

---

## Tech Stack

**Frontend**
- React JS
- Cascading Style Sheets (CSS)

**Backend**
- Python 3
- Flask
- Flask-CORS
- The chatbot is rule-based, it was impossible to implement advanced AI features using large language models due to resource constraints.

---

## 📂 Project Structure
```

JavaCup/
│
├── website/ # React app
│ ├── public/
│ ├── src/
│ │ ├── components/ 
│ │ ├── styles/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
├── Bot.py / # Flask API
│
└── README.md
```
---

## Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ayaarbi/JavaCup.git
```

### 2️⃣ Backend Setup (Flask)
```bash
    pip install Flask Flask-CORS
```

Run the backend server:
```bash
cd JavaCup
python Bot.py
```
This starts Flask on http://localhost:5000

### 3️⃣ Frontend Setup (React)
You should have nodeJs installed on your PC.

```bash
cd JavaCup/website/src
npm start
```
This starts React on http://localhost:3000
