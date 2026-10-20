export const quizQuestions = [
  {
    id: 1,
    category: "JavaScript",
    question: "What is the console output order of the following asynchronous code snippet?",
    codeSnippet: `console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);`,
    options: [
      "1, 4, 3, 2",
      "1, 2, 3, 4",
      "1, 4, 2, 3",
      "3, 1, 4, 2"
    ],
    correctAnswer: 0,
    explanation: "Synchronous code runs first (1, 4). Microtasks (Promise.then) have higher priority than macrotasks (setTimeout) and are drained first, producing 1, 4, 3, 2."
  },
  {
    id: 2,
    category: "React",
    question: "Why is using array indices as the `key` prop discouraged when rendering dynamic lists in React?",
    options: [
      "React throws a compile-time JSX syntax error if an index is used",
      "It degrades reordering/deletion performance and can bind state to incorrect components",
      "Keys must always be cryptographically secure UUID strings generated on the server",
      "Array indices prevent CSS styles and transitions from applying"
    ],
    correctAnswer: 1,
    explanation: "When list items change position, are inserted, or deleted, index-based keys fail to maintain identity across renders, causing subtle state mismatch bugs and unnecessary DOM thrashing."
  },
  {
    id: 3,
    category: "Core CS",
    question: "What is the average and worst-case time complexity for searching an item in a Hash Table?",
    options: [
      "Average: O(1), Worst: O(n)",
      "Average: O(log n), Worst: O(n)",
      "Average: O(1), Worst: O(log n)",
      "Average: O(n), Worst: O(n²)"
    ],
    correctAnswer: 0,
    explanation: "Hash table lookups take O(1) on average with a good hash function. In the worst case (all keys collide into the same bucket chain), it degrades to linear time O(n)."
  },
  {
    id: 4,
    category: "JavaScript",
    question: "What does the following snippet log when executed?",
    codeSnippet: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 50);
}`,
    options: [
      "3, 3, 3",
      "0, 1, 2",
      "undefined, undefined, undefined",
      "1, 2, 3"
    ],
    correctAnswer: 0,
    explanation: "Because `var` is function-scoped rather than block-scoped, all three scheduled timer callbacks share the identical reference to `i`, which is 3 by the time the loop finishes."
  },
  {
    id: 5,
    category: "React",
    question: "When does the cleanup function returned from a React `useEffect` hook execute?",
    options: [
      "Only when the browser tab or window is closed",
      "Before the component unmounts and before re-running the effect on dependency changes",
      "Simultaneously on every parent re-render regardless of dependencies",
      "Exclusively when an unhandled runtime error is caught by an Error Boundary"
    ],
    correctAnswer: 1,
    explanation: "The cleanup function runs right before the component unmounts, as well as before every subsequent execution of the effect whenever its dependencies change, preventing leaks."
  },
  {
    id: 6,
    category: "Core CS",
    question: "Which of the following is NOT one of Coffman's four necessary conditions for Deadlock?",
    options: [
      "Preemption allowed by the scheduler",
      "Mutual Exclusion",
      "Hold and Wait",
      "Circular Wait"
    ],
    correctAnswer: 0,
    explanation: "Coffman's conditions require 'No Preemption' (resources cannot be forcefully taken away from a holding process). If preemption is allowed, deadlock is prevented or resolved."
  },
  {
    id: 7,
    category: "React",
    question: "Why is direct state mutation (e.g. state.items.push(item)) prohibited in React?",
    options: [
      "JavaScript arrays are frozen by default in modern ECMAScript",
      "React relies on shallow reference equality (`Object.is`); mutating in place skips re-renders",
      "Direct mutations immediately crash the V8 JavaScript engine in strict mode",
      "React state only supports primitives like strings and numbers"
    ],
    correctAnswer: 1,
    explanation: "React relies on reference equality comparison to detect state changes. If you mutate existing objects in place, the reference address remains identical, causing React to skip UI updates."
  },
  {
    id: 8,
    category: "Core CS",
    question: "What is the standard sequence of packet flags exchanged during a TCP Three-Way Handshake?",
    options: [
      "SYN ➔ SYN-ACK ➔ ACK",
      "ACK ➔ SYN ➔ ACK-SYN",
      "FIN ➔ ACK ➔ FIN-ACK",
      "CONNECT ➔ ACCEPT ➔ ACK"
    ],
    correctAnswer: 0,
    explanation: "The client sends a SYN packet, the server responds with SYN-ACK, and the client acknowledges with ACK, successfully establishing a full-duplex reliable connection."
  }
];
