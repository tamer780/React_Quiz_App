#  React Quiz App

An interactive and dynamic Quiz Application built with **React.js**, focusing on advanced state management, component lifecycle, and efficient UI updates.

##  Features

- **Dynamic Question Timer:** Each question has a dedicated timer that automatically skips to the next question upon expiration.
- **Smart Answer Logic:** Features shuffled answers to ensure a unique experience every time.
- **Real-time Feedback:** Visual highlights for correct, incorrect, and skipped answers.
- **Detailed Summary:** Comprehensive end-of-quiz statistics including percentages of correct, wrong, and skipped questions.
- **Optimized Performance:** Leverages React's `useRef`, `useEffect`, and `key` props to manage component remounting and prevent unnecessary re-renders.

##  Tech Stack

- **Frontend:** React.js (Hooks, Functional Components)
- **Styling:** CSS3 (Animations & Transitions)
- **Build Tool:** Vite

##  Key Technical Concepts Applied

- **Lifting State Up:** Managed user answers and quiz progress at the parent level.
- **Component Identity (The `key` Prop):** Used keys strategically to reset component state and restart timers on question changes.
- **Cleanup Functions:** Implemented `clearTimeout` and `clearInterval` within `useEffect` to prevent memory leaks.
- **Persistence with `useRef`:** Used `useRef` to store shuffled answers without triggering re-renders, maintaining UI stability.



1. Clone the repository:
   ```bash
   git clone [YOUR_REPO_LINK]
