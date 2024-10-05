import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const questions = [
    {
      question: "What color is the exoplanet HD 189733b?",
      options: ["Red", "Yellow", "Green", "Blue"],
      answer: "Blue",
    },
    {
      question: "How fast can the winds on HD 189733b blow?",
      options: ["100 km/h", "500 km/h", "8,700 km/h", "20,000 km/h"],
      answer: "8,700 km/h",
    },
    {
      question: "How far is HD 189733b from Earth?",
      options: ["10 light-years", "64 light-years", "100 light-years", "1,000 light-years"],
      answer: "64 light-years",
    },
    {
      question: "What is the surface temperature of HD 189733b?",
      options: ["500°C", "1,000°C", "5°C", "20°C"],
      answer: "1,000°C",
    },
    {
      question: "What is one reason HD 189733b is unlikely to have life?",
      options: ["It has too much water", "The temperature is too cold", "The temperature is too hot", "There's no air"],
      answer: "The temperature is too hot",
    },
    {
      question: "How far is WASP-12b from Earth?",
      options: ["100 light-years", "500 light-years", "870 light-years", "1,000 light-years"],
      answer: "870 light-years",
    },
    {
      question: "What is the surface temperature of WASP-12b?",
      options: ["500°C", "2,200°C", "1,000°C", "5°C"],
      answer: "2,200°C",
    },
    {
      question: "What is the mass of WASP-12b compared to Jupiter?",
      options: ["1.83 times", "0.5 times", "2 times", "3 times"],
      answer: "1.83 times",
    },
    {
      question: "What is notable about the shape of WASP-12b?",
      options: ["It is a perfect sphere", "It is bloated due to tidal forces", "It is shaped like a triangle", "It has rings"],
      answer: "It is bloated due to tidal forces",
    },
    {
      question: "What method was used to discover WASP-12b?",
      options: ["Radial velocity", "Direct imaging", "Transit method", "Gravitational lensing"],
      answer: "Transit method",
    },
    {
      question: "How far is 55 Cancri e from Earth?",
      options: ["10 light-years", "40 light-years", "100 light-years", "500 light-years"],
      answer: "40 light-years",
    },
    {
      question: "What is the surface temperature of 55 Cancri e?",
      options: ["500°C", "1,400°C", "5°C", "10,000°C"],
      answer: "1,400°C",
    },
    {
      question: "What is the mass of 55 Cancri e compared to Earth?",
      options: ["8 times", "10 times", "1.5 times", "100 times"],
      answer: "8 times",
    },
    {
      question: "What material might 55 Cancri e be rich in?",
      options: ["Gold", "Iron", "Carbon", "Helium"],
      answer: "Carbon",
    },
    {
      question: "What method was used to discover 55 Cancri e?",
      options: ["Transit method", "Radial velocity", "Gravitational lensing", "Direct imaging"],
      answer: "Radial velocity",
    },
    {
      question: "How far is K2-18b from Earth?",
      options: ["40 light-years", "100 light-years", "124 light-years", "500 light-years"],
      answer: "124 light-years",
    },
    {
      question: "What is the surface temperature of K2-18b?",
      options: ["0°C", "12°C", "50°C", "100°C"],
      answer: "12°C",
    },
    {
      question: "What notable feature makes K2-18b potentially habitable?",
      options: ["Its color", "Its location in the habitable zone", "Its rings", "Its storms"],
      answer: "Its location in the habitable zone",
    },
    {
      question: "What method was used to discover K2-18b?",
      options: ["Radial velocity", "Direct imaging", "Transit method", "Gravitational lensing"],
      answer: "Transit method",
    },
    {
      question: "What is the estimated mass of K2-18b compared to Earth?",
      options: ["2 times", "5 times", "8.6 times", "12 times"],
      answer: "8.6 times",
    },
    {
      question: "How far is TRAPPIST-1e from Earth?",
      options: ["10 light-years", "40 light-years", "100 light-years", "500 light-years"],
      answer: "40 light-years",
    },
    {
      question: "What is the surface temperature of TRAPPIST-1e?",
      options: ["0°C", "20°C", "100°C", "50°C"],
      answer: "0°C",
    },
    {
      question: "What is the mass of TRAPPIST-1e compared to Earth?",
      options: ["0.5 times", "1.5 times", "0.92 times", "10 times"],
      answer: "0.92 times",
    },
    {
      question: "What method was used to discover TRAPPIST-1e?",
      options: ["Transit method", "Direct imaging", "Radial velocity", "Gravitational lensing"],
      answer: "Transit method",
    },
    {
      question: "Why is TRAPPIST-1e considered interesting in the search for life?",
      options: ["It has many moons", "It is located in the habitable zone", "It has rings", "It is the largest planet"],
      answer: "It is located in the habitable zone",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionClick = (option) => {
    if (!isAnswerSubmitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption) {
      if (selectedOption === questions[currentQuestionIndex].answer) {
        setCorrectAnswerCount(correctAnswerCount + 1);
      }
      setIsAnswerSubmitted(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setCorrectAnswerCount(0);
    setQuizCompleted(false);
  };

  const getFinalMessage = () => {
    const score = correctAnswerCount;
    if (score >= 15) {
      return "Congratulations! You did great!";
    } else {
      return "You might want to review your studies. Keep learning!";
    }
  };

  const isCorrect = selectedOption === questions[currentQuestionIndex].answer;

  if (quizCompleted) {
    return (
      <div className="quiz-container">
        <h2>Quiz Completed!</h2>
        <h3>Your Score: {correctAnswerCount} out of {questions.length}</h3>
        <p>{getFinalMessage()}</p>

        {/* Button container for better alignment */}
        <div className="button-container">
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
          {correctAnswerCount < 15 && (
            <button onClick={() => window.location.href = 'https://www.google.com/'}>Review Studies</button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>{questions[currentQuestionIndex].question}</h2>
      <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
      <ul>
        {questions[currentQuestionIndex].options.map((option) => (
          <li
            key={option}
            className={`option ${
              isAnswerSubmitted
                ? isCorrect && option === selectedOption
                  ? "correct"
                  : !isCorrect && option === selectedOption
                  ? "incorrect"
                  : option === questions[currentQuestionIndex].answer
                  ? "correct"
                  : ""
                : selectedOption === option
                ? "selected"
                : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {isAnswerSubmitted ? (
        <button onClick={handleNextQuestion}>Next Question</button>
      ) : (
        <button onClick={handleSubmit}>Submit Answer</button>
      )}
    </div>
  );
};

export default Quiz;
