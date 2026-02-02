import imageLogo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={imageLogo} alt="image_Logo" />
      <h1>QuizApp</h1>
    </header>
  );
}
