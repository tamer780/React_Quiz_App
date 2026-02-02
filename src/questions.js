export default [
  {
    id: "q1",
    text: "Which of the following definitions best describes React.js?",
    answers: [
      "A library to build user interfaces with help of declarative code.",
      "A library for managing state in web applications.",
      "A framework to build user interfaces with help of imperative code.",
      "A library used for building mobile applications only.",
    ],
  },
  {
    id: "q2",
    text: "What purpose do React hooks serve?",
    answers: [
      "Enabling the use of state and other React features in functional components.",
      "Creating responsive layouts in React applications.",
      "Handling errors within the application.",
      "Part of the Redux library for managing global state.",
    ],
  },
  {
    id: "q3",
    text: "Can you identify what JSX is?",
    answers: [
      "A JavaScript extension that adds HTML-like syntax to JavaScript.",
      "A JavaScript library for building dynamic user interfaces.",
      "A specific HTML version that was explicitly created for React.",
      "A tool for making HTTP requests in a React application.",
    ],
  },
  {
    id: "q4",
    text: "What is the most common way to create a component in React?",
    answers: [
      "By defining a JavaScript function that returns a renderable value.",
      "By defining a custom HTML tag in JavaScript.",
      "By creating a file with a .jsx extension.",
      'By using the "new" keyword followed by the component name.',
    ],
  },
  {
    id: "q5",
    text: 'What does the term "React state" imply?',
    answers: [
      "An object in a component that holds values and may cause the component to render on change.",
      "The lifecycle phase a React component is in.",
      "The overall status of a React application, including all props and components.",
      "A library for managing global state in React applications.",
    ],
  },
  {
    id: "q6",
    text: "How do you typically render list content in React apps?",
    answers: [
      "By using the map() method to iterate over an array of data and returning JSX.",
      "By using the for() loop to iterate over an array of data and returning JSX.",
      "By using the forEach() method to iterate over an array of data and returning JSX.",
      "By using the loop() method to iterate over an array of data and returning JSX.",
    ],
  },
  {
    id: "q7",
    text: "Which approach can NOT be used to render content conditionally?",
    answers: [
      "Using a the #if template syntax.",
      "Using a ternary operator.",
      "Using the && operator.",
      "Using an if-else statement.",
    ],
  },
  {
    id: "q8",
    text: "What is the purpose of the key prop when rendering lists?",
    answers: [
      "To help React identify which items have changed, added, or removed.",
      "To style list elements uniquely.",
      "To pass data between components.",
      "To prevent re-rendering completely.",
    ],
  },
  {
    id: "q9",
    text: "What happens when React state changes?",
    answers: [
      "The component re-renders.",
      "The entire page reloads.",
      "Only the DOM updates manually.",
      "Nothing happens unless useEffect is used.",
    ],
  },
  {
    id: "q10",
    text: "Which hook is used to manage state in a functional component?",
    answers: ["useState", "useEffect", "useRef", "useContext"],
  },
  {
    id: "q11",
    text: "What is the main purpose of useEffect?",
    answers: [
      "To handle side effects in a component.",
      "To create global state.",
      "To replace useState.",
      "To improve CSS performance.",
    ],
  },
  {
    id: "q12",
    text: "When does useEffect run by default?",
    answers: [
      "After every render.",
      "Only once when the app loads.",
      "Before the component renders.",
      "Only when state changes manually.",
    ],
  },
  {
    id: "q13",
    text: "What is a controlled component?",
    answers: [
      "A component where form data is handled by React state.",
      "A component that controls other components.",
      "A component without props.",
      "A component that uses Redux.",
    ],
  },
  {
    id: "q14",
    text: "What is prop drilling?",
    answers: [
      "Passing data through multiple components unnecessarily.",
      "Optimizing props for performance.",
      "Removing unused props.",
      "A React debugging technique.",
    ],
  },
  {
    id: "q15",
    text: "Which hook helps avoid unnecessary re-renders of functions?",
    answers: ["useCallback", "useEffect", "useState", "useRef"],
  },
  {
    id: "q16",
    text: "What is the role of React Context?",
    answers: [
      "Sharing data across components without passing props manually.",
      "Managing local component state.",
      "Handling HTTP requests.",
      "Improving CSS styling.",
    ],
  },
  {
    id: "q17",
    text: "Which hook is commonly used to store mutable values without causing re-renders?",
    answers: ["useRef", "useState", "useEffect", "useMemo"],
  },
  {
    id: "q18",
    text: "What does lifting state up mean?",
    answers: [
      "Moving state to a common parent component.",
      "Duplicating state across components.",
      "Removing state completely.",
      "Using global state only.",
    ],
  },
  {
    id: "q19",
    text: "Which statement about props is correct?",
    answers: [
      "Props are read-only.",
      "Props can be modified directly.",
      "Props are the same as state.",
      "Props are used only in class components.",
    ],
  },
  {
    id: "q20",
    text: "Why is React considered declarative?",
    answers: [
      "You describe what the UI should look like, not how to update it step by step.",
      "You manually update the DOM.",
      "You must write imperative loops.",
      "It relies heavily on class-based syntax.",
    ],
  },
];
