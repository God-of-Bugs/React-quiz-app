# Task-4 Modern React Quiz Application (CS & Web Fundamentals)

A fast, responsive, and aesthetically polished interactive quiz application built with **React 19**, **Vite**, and **Modern CSS**. Test and reinforce your engineering knowledge across JavaScript internals, React architecture, and Core Computer Science fundamentals.

---

## 🚀 Live Demo & Repository
- **Live Demo (GitHub Pages):** [https://god-of-bugs.github.io/task-4-react-quiz-app/](https://god-of-bugs.github.io/task-4-react-quiz-app/)
- **GitHub Repository:** [https://github.com/God-of-Bugs/task-4-react-quiz-app](https://github.com/God-of-Bugs/task-4-react-quiz-app)

---

## 🌟 Key Features

- **Curated Question Bank**: High-impact questions spanning JavaScript (event loop, closures), React (reconciliation, keys, useEffect cleanup, state immutability), and Core CS (hash table complexity, deadlock conditions, TCP handshake).
- **Interactive Option States**: Clear visual feedback with distinct color coding:
  - Default glassmorphic cards
  - Selected state highlight
  - Emerald Green (`#10b981`) for correct answers
  - Rose Red (`#f43f5e`) for incorrect choices
- **Instant Conceptual Explanations**: Immediately unlocks detailed engineering insights upon selecting an answer, locking remaining options to ensure assessment integrity.
- **Dynamic Progress Tracking**: Animated progress bar displaying current step, total questions, and percentage completion.
- **Keyboard Shortcuts**:
  - `[1]`, `[2]`, `[3]`, `[4]` to pick corresponding options A–D
  - `[Enter]` to proceed to the next question or view results
  - `[Enter]` on the score screen to restart the assessment
- **Score & Performance Analysis**:
  - Final score calculation (`X / Y` correct) with percentage badge.
  - Performance tier classification: **Master Engineer**, **Proficient Developer**, or **Needs Review**.
  - Celebratory multi-directional confetti blast using `canvas-confetti` when scoring ≥ 70%.
- **Interactive Review Mode**: Expandable accordion detailing each question, the user's selected response, the correct choice, and deep-dive technical explanations.
- **Glassmorphism & Responsive UI**: Centered dark-mode aesthetics with subtle neon glow effects, mobile-responsive layout, and clean typography.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Modern Glassmorphic CSS (Backdrop Blur, Linear Gradients, Custom Variables)
- **Icons:** Lucide React (`lucide-react`)
- **Effects:** Canvas Confetti (`canvas-confetti`)
- **Deployment:** `gh-pages` + GitHub Pages

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/God-of-Bugs/task-4-react-quiz-app.git
   cd task-4-react-quiz-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local dev server:**
   ```bash
   npm run dev
   ```

4. **Lint and build for production:**
   ```bash
   npm run lint
   npm run build
   ```

5. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

---

## 📜 License
MIT License. Created as part of the Web & Software Engineering Internship program.
