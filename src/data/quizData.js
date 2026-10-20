export const quizQuestions = [
  // ==========================================
  // EASY TIER (8 Questions)
  // ==========================================
  {
    id: 'easy-1',
    category: 'JavaScript',
    difficulty: 'easy',
    question: 'What is the output of the typeof operator when evaluated on null in JavaScript?',
    codeSnippet: 'console.log(typeof null);',
    options: [
      '"object"',
      '"null"',
      '"undefined"',
      '"boolean"'
    ],
    correctAnswer: 0,
    explanation: 'Due to a legacy bug in the original 1995 JavaScript implementation where object type tags were 0, typeof null returns "object", preserved for backward compatibility.'
  },
  {
    id: 'easy-2',
    category: 'JavaScript',
    difficulty: 'easy',
    question: 'Which array method transforms every element in an array and returns a brand-new array of identical length?',
    options: [
      'Array.prototype.map()',
      'Array.prototype.forEach()',
      'Array.prototype.filter()',
      'Array.prototype.push()'
    ],
    correctAnswer: 0,
    explanation: 'map() creates a new array populated with the results of calling a provided callback function on every element in the calling array, without mutating the original.'
  },
  {
    id: 'easy-3',
    category: 'React',
    difficulty: 'easy',
    question: 'What does the React useState hook return when called inside a functional component?',
    options: [
      'An array containing the current state value and an updater function',
      'A plain JavaScript object with get and set accessor properties',
      'A reactive Proxy wrapping the component DOM element',
      'A Promise that resolves when state updates have committed'
    ],
    correctAnswer: 0,
    explanation: 'useState returns a 2-element tuple: [currentState, setStateFunction], commonly extracted using ES6 array destructuring.'
  },
  {
    id: 'easy-4',
    category: 'React',
    difficulty: 'easy',
    question: 'In standard React architecture, how is data conventionally passed between components?',
    options: [
      'Downwards from parent to child via read-only props',
      'Upwards from children to parents using DOM events',
      'Directly between siblings through browser localStorage',
      'Via global window variables shared across trees'
    ],
    correctAnswer: 0,
    explanation: 'React enforces a unidirectional (top-down) data flow where parent components pass data downwards to child components via immutable props.'
  },
  {
    id: 'easy-5',
    category: 'React',
    difficulty: 'easy',
    question: 'Why do we write className instead of class when assigning CSS classes in JSX?',
    options: [
      'class is a reserved keyword in JavaScript for defining classes',
      'JSX requires all HTML attribute names to be in kebab-case',
      'className is compiled into inline CSS style declarations',
      'class only works with XML stylesheets and SVG documents'
    ],
    correctAnswer: 0,
    explanation: 'Because JSX is syntactic sugar that compiles to standard JavaScript, class is a reserved language keyword; thus, JSX uses className to mirror the DOM property.'
  },
  {
    id: 'easy-6',
    category: 'Core CS',
    difficulty: 'easy',
    question: 'Which fundamental principle defines the element ordering behavior of a standard Queue data structure?',
    options: [
      'FIFO (First-In, First-Out)',
      'LIFO (Last-In, First-Out)',
      'LRU (Least Recently Used)',
      'Priority Random Access'
    ],
    correctAnswer: 0,
    explanation: 'A Queue operates under the First-In, First-Out (FIFO) principle, where the first element enqueued at the tail is the first element dequeued from the head.'
  },
  {
    id: 'easy-7',
    category: 'Core CS',
    difficulty: 'easy',
    question: 'What is the base-10 (decimal) value of the 8-bit binary representation 00001010?',
    codeSnippet: 'Binary: 0 0 0 0 1 0 1 0',
    options: [
      '10',
      '12',
      '8',
      '16'
    ],
    correctAnswer: 0,
    explanation: 'In binary, 00001010 corresponds to (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (0 * 2^0) = 8 + 0 + 2 + 0 = 10.'
  },
  {
    id: 'easy-8',
    category: 'JavaScript',
    difficulty: 'easy',
    question: 'What occurs when you attempt to reassign a variable originally declared with the const keyword?',
    codeSnippet: `const version = 1;
version = 2;`,
    options: [
      'A TypeError is thrown indicating assignment to a constant variable',
      'The variable silently creates a new property on the global window object',
      'The code compiles but converts the variable into undefined',
      'A SyntaxError is raised only if running in strict mode'
    ],
    correctAnswer: 0,
    explanation: 'const declarations create a block-scoped read-only reference. Any attempt to reassign the identifier throws an immediate runtime TypeError: Assignment to constant variable.'
  },

  // ==========================================
  // MEDIUM TIER (8 Questions)
  // ==========================================
  {
    id: 'med-1',
    category: 'React',
    difficulty: 'medium',
    question: 'How does providing an empty dependency array [] to useEffect alter its execution lifecycle?',
    options: [
      'The effect runs exactly once after the initial component mount',
      'The effect runs synchronously before the DOM paints on every update',
      'The effect never executes unless triggered manually by an event handler',
      'The effect runs continuously on every state and prop mutation'
    ],
    correctAnswer: 0,
    explanation: 'An empty dependency array [] instructs React that the effect dependencies never change, ensuring it executes only once after the component initially mounts.'
  },
  {
    id: 'med-2',
    category: 'React',
    difficulty: 'medium',
    question: 'Why is using array indices as the key prop discouraged when rendering dynamic lists in React?',
    options: [
      'It degrades reordering/deletion performance and can bind state to incorrect components',
      'React throws a compile-time JSX syntax error if an index is used',
      'Keys must always be cryptographically secure UUID strings generated on the server',
      'Array indices prevent CSS styles and transitions from applying'
    ],
    correctAnswer: 0,
    explanation: 'When list items change position, are inserted, or deleted, index-based keys fail to maintain identity across renders, causing subtle state mismatch bugs and unnecessary DOM thrashing.'
  },
  {
    id: 'med-3',
    category: 'JavaScript',
    difficulty: 'medium',
    question: 'What core JavaScript mechanism allows an inner function to retain access to variables in its outer scope even after the outer function has finished executing?',
    options: [
      'Closure',
      'Prototypal Inheritance',
      'Tail Call Optimization',
      'Event Delegation'
    ],
    correctAnswer: 0,
    explanation: 'A closure is the combination of a function bundled together with references to its surrounding lexical environment, allowing it to remember variables from outer scopes.'
  },
  {
    id: 'med-4',
    category: 'JavaScript',
    difficulty: 'medium',
    question: 'How should you cleanly handle an unhandled rejection error when using async/await syntax?',
    codeSnippet: `async function fetchMetrics() {
  const res = await fetch('/api/data');
  return res.json();
}`,
    options: [
      'Wrap the await calls in a try...catch block',
      'Attach a .catch() callback directly inside the setTimeout scheduler',
      'Set window.onerror = null to suppress asynchronous promise failures',
      'Assign an abort controller directly to the Promise.prototype'
    ],
    correctAnswer: 0,
    explanation: 'In async functions, rejected promises throw exceptions that can be cleanly intercepted and handled using standard JavaScript try...catch blocks.'
  },
  {
    id: 'med-5',
    category: 'Core CS',
    difficulty: 'medium',
    question: 'What is the average and worst-case time complexity for searching an item in a Hash Table?',
    options: [
      'Average: O(1), Worst: O(n)',
      'Average: O(log n), Worst: O(n)',
      'Average: O(1), Worst: O(log n)',
      'Average: O(n), Worst: O(n²)'
    ],
    correctAnswer: 0,
    explanation: 'Hash table lookups take O(1) on average with a uniform hash distribution. In the worst case (all keys collide into the same bucket chain), it degrades to linear time O(n).'
  },
  {
    id: 'med-6',
    category: 'Core CS',
    difficulty: 'medium',
    question: 'In the JavaScript runtime environment, how do the Call Stack and Task Queue cooperate?',
    options: [
      'The Event Loop only pulls tasks from the Queue when the Call Stack is empty',
      'The Task Queue preempts running synchronous stack frames immediately',
      'Call Stack frames are processed FIFO while Task Queue tasks are processed LIFO',
      'Microtasks run on background worker threads isolated from the main call stack'
    ],
    correctAnswer: 0,
    explanation: 'JavaScript is single-threaded. The Event Loop monitors the call stack; only when the stack is completely clear will it dequeue callback tasks to push onto the stack.'
  },
  {
    id: 'med-7',
    category: 'React',
    difficulty: 'medium',
    question: 'Why is direct state mutation (e.g. state.items.push(item)) prohibited in React?',
    options: [
      'React relies on shallow reference equality (Object.is); mutating in place skips re-renders',
      'JavaScript arrays are frozen by default in modern ECMAScript',
      'Direct mutations immediately crash the V8 JavaScript engine in strict mode',
      'React state only supports primitives like strings and numbers'
    ],
    correctAnswer: 0,
    explanation: 'React compares previous and next states by reference. If you mutate an object or array in place, the memory pointer is unchanged, causing React to assume no change occurred and skip rendering.'
  },
  {
    id: 'med-8',
    category: 'Core CS',
    difficulty: 'medium',
    question: 'What prerequisite must be satisfied before Binary Search can achieve O(log n) search time complexity on a collection?',
    options: [
      'The collection must be pre-sorted and provide contiguous random-access indexing',
      'The collection must be stored inside a doubly-linked list with tail pointers',
      'The number of elements must be an exact power of 2',
      'All stored elements must be 32-bit unsigned integers'
    ],
    correctAnswer: 0,
    explanation: 'Binary Search requires a sorted collection with random access (like an array) so it can inspect the midpoint and discard half the remaining candidate elements in O(1) time each step.'
  },

  // ==========================================
  // HARD TIER (8 Questions)
  // ==========================================
  {
    id: 'hard-1',
    category: 'JavaScript',
    difficulty: 'hard',
    question: 'What is the console output order of the following asynchronous code snippet?',
    codeSnippet: `console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);`,
    options: [
      '1, 4, 3, 2',
      '1, 2, 3, 4',
      '1, 4, 2, 3',
      '3, 1, 4, 2'
    ],
    correctAnswer: 0,
    explanation: 'Synchronous code runs first (1, 4). Microtasks (Promise.then) have higher priority than macrotasks (setTimeout) and are drained first, producing 1, 4, 3, 2.'
  },
  {
    id: 'hard-2',
    category: 'JavaScript',
    difficulty: 'hard',
    question: 'What does the following snippet log when executed?',
    codeSnippet: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 50);
}`,
    options: [
      '3, 3, 3',
      '0, 1, 2',
      'undefined, undefined, undefined',
      '1, 2, 3'
    ],
    correctAnswer: 0,
    explanation: 'Because var is function-scoped rather than block-scoped, all three scheduled timer callbacks share the identical reference to i, which is 3 by the time the loop finishes.'
  },
  {
    id: 'hard-3',
    category: 'React',
    difficulty: 'hard',
    question: 'What primary architectural capability did React Fiber introduce compared to the legacy stack reconciler?',
    options: [
      'Incremental rendering with interruptible work units and priority-based scheduling',
      'Direct compiled WebAssembly bindings replacing the virtual DOM completely',
      'Multi-threaded DOM reconciliation across Web Workers',
      'Automatic compile-time elimination of all React Hooks'
    ],
    correctAnswer: 0,
    explanation: 'React Fiber reimplemented the reconciliation engine as a virtual stack frame linked list, allowing rendering work to be paused, prioritized, aborted, or resumed across frames without blocking user inputs.'
  },
  {
    id: 'hard-4',
    category: 'Core CS',
    difficulty: 'hard',
    question: "Which of the following is NOT one of Coffman's four necessary conditions for Deadlock?",
    options: [
      'Preemption allowed by the scheduler',
      'Mutual Exclusion',
      'Hold and Wait',
      'Circular Wait'
    ],
    correctAnswer: 0,
    explanation: "Coffman's conditions require 'No Preemption' (resources cannot be forcefully taken away from a holding process). If preemption is allowed, deadlock is prevented or resolved."
  },
  {
    id: 'hard-5',
    category: 'Core CS',
    difficulty: 'hard',
    question: 'What is the standard sequence of packet flags exchanged during a TCP Three-Way Handshake?',
    options: [
      'SYN ➔ SYN-ACK ➔ ACK',
      'ACK ➔ SYN ➔ ACK-SYN',
      'FIN ➔ ACK ➔ FIN-ACK',
      'CONNECT ➔ ACCEPT ➔ ACK'
    ],
    correctAnswer: 0,
    explanation: 'The client sends a SYN packet, the server responds with SYN-ACK, and the client acknowledges with ACK, successfully establishing a full-duplex reliable connection.'
  },
  {
    id: 'hard-6',
    category: 'JavaScript',
    difficulty: 'hard',
    question: 'Which pattern commonly introduces severe memory leaks in single-page JavaScript applications?',
    options: [
      'Failing to clearInterval / removeEventListener when components unmount',
      'Using JSON.stringify on large nested objects',
      'Calling console.log inside asynchronous promise handlers',
      'Using ES6 Map and Set data structures instead of plain objects'
    ],
    correctAnswer: 0,
    explanation: 'Uncleared intervals and lingering event listeners keep references to component closures and associated DOM nodes in memory, preventing the Garbage Collector from freeing them.'
  },
  {
    id: 'hard-7',
    category: 'React',
    difficulty: 'hard',
    question: 'What is the key functional distinction between useCallback and useMemo in React?',
    options: [
      'useCallback memoizes a function definition; useMemo memoizes the computed result value',
      'useCallback executes on every render; useMemo executes only before initial mount',
      'useCallback works only with async functions; useMemo works only with sync functions',
      'useCallback stores state in localStorage; useMemo stores state in memory'
    ],
    correctAnswer: 0,
    explanation: 'useCallback(fn, deps) returns a memoized version of the callback function reference itself, whereas useMemo(() => fn(), deps) returns the memoized result of invoking that function.'
  },
  {
    id: 'hard-8',
    category: 'Core CS',
    difficulty: 'hard',
    question: 'How do Processes and Threads differ in terms of operating system memory architecture?',
    options: [
      'Threads within the same process share heap memory; processes have isolated address spaces',
      'Processes share heap memory; threads have completely isolated address spaces',
      'Threads cannot be scheduled independently by the operating system kernel',
      'Context switching between processes is faster than switching between threads'
    ],
    correctAnswer: 0,
    explanation: 'A process possesses its own independent virtual address space and resources. Threads belonging to the same process share that memory space (heap, code, global data), having only private stacks and registers.'
  }
];
