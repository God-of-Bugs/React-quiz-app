# DevSprint | Web & Systems Quiz

A fast, responsive, and aesthetically polished interactive quiz application built with **React 19**, **Vite**, and **Modern CSS**. Test and benchmark your engineering knowledge across JavaScript internals, React architecture, and Core Computer Science fundamentals.

---

## 🚀 Live Demo & Repository
- **Live Demo (GitHub Pages):** [https://god-of-bugs.github.io/React-quiz-app/](https://god-of-bugs.github.io/React-quiz-app/)
- **GitHub Repository:** [https://github.com/God-of-Bugs/React-quiz-app](https://github.com/God-of-Bugs/React-quiz-app)

---

## 🌟 Key Features

- **Categorized Difficulty Tiers (24 Questions):**
  - **Easy (8 Questions):** Core JS primitives, array methods, foundational React (`useState`, props, JSX conventions), FIFO queues, and binary representation.
  - **Medium (8 Questions):** React lifecycle (`useEffect`, key props, dependency arrays), JS closures, Promises & error handling, Hash Table complexity, and Call Stack vs Task Queue.
  - **Hard (8 Questions):** Event Loop microtasks vs macrotasks, React Fiber architecture & reconciliation, Coffman deadlock conditions, TCP 3-way handshake, memory leak patterns, and `useCallback` vs `useMemo`.
- **Dynamic Shuffling & Replayability:** Fisher-Yates algorithmic shuffling permutes question order and option choices while keeping answer keys strictly synchronized.
- **Interactive Option States:** Distinct visual feedback with glassmorphic cards, emerald green (`#10b981`) for correct answers, and rose red (`#f43f5e`) for incorrect answers.
- **Immediate Concept Insights:** Unlocks technical explanations upon answering and locks other options to prevent multiple submissions.
- **Keyboard Shortcuts:**
  - `[1]`, `[2]`, `[3]`, `[4]` to pick options A–D
  - `[Enter]` to proceed to the next question or view results
  - `[Enter]` on the score screen to restart the quiz
- **Performance Evaluation:**
  - Final score calculation (`X / Y` correct) and accuracy percentage.
  - Tier classification: **Master Engineer**, **Proficient Developer**, or **Needs Review**.
  - Multi-stream celebratory confetti burst (`canvas-confetti`) when scoring ≥ 70%.
  - Comprehensive question review with category and difficulty tags.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Modern Glassmorphic CSS (Backdrop Blur, Linear Gradients, Custom Variables)
- **Icons:** Lucide React (`lucide-react`)
- **Effects:** Canvas Confetti (`canvas-confetti`)
- **Deployment:** `gh-pages` + GitHub Pages

---

## 💻 Local Development

```bash
git clone https://github.com/God-of-Bugs/React-quiz-app.git
cd task-4-quiz-app
npm install
npm run dev
```

Build and test:
```bash
npm run lint
npm run build
```

Deploy:
```bash
npm run deploy
```

---

## 📜 License
MIT License.
