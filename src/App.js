import { useState } from "react";
import "./style.css";

const messages = [
  "Learn react 🎓",
  "Apply for jobs 🎒",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previousClickHandler() {
    if (step > 1) setStep((s) => s - 1);
  }

  function nextClickHandler() {
    if (step < messages.length) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="btn-close" onClick={() => setIsOpen((isO) => !isO)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers ">
            <div className={`number ${step === 1 ? "active" : ""}`}>1</div>
            <div className={`number ${step === 2 ? "active" : ""}`}>2</div>
            <div className={`number ${step === 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="btn">
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={previousClickHandler}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={nextClickHandler}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
