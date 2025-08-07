import React, { useState } from "react";
import './TechStackGame.css';

const questions = [
    {
        question: "What is the primary language used for web development?",
        options: ["Python", "JavaScript", "C++", "Ruby"],
        answer: "JavaScript"
    },
    {
        question: "Which framework is known for its component-based architecture?",
        options: ["Django", "React", "Flask", "Spring"],
        answer: "React"
    },
    {
        question: "What is the purpose of CSS in web development?",
        options: ["Data storage", "Styling web pages", "Server-side logic", "Database management"],
        answer: "Styling web pages"
    }
];

export default function TechStackGame() {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (option) => {
        if (option === questions[current].answer) {
            setScore(score + 1);
        }

        const next = current + 1;
        if (next < questions.length) {
            setCurrent(next);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className="game-container">
            {!showResult ? (
                <>
                    <h3>{questions[current].question}</h3>
                    <div className="options">
                        {questions[current].options.map((opt, idx) => (
                            <button key={idx} onClick={() => handleAnswer(opt)}>
                                {opt}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <div className="result">
                    <h3>Game Over!</h3>
                    <p>Your score: {score} out of {questions.length}</p>
                    <button onClick={() => {
                        setCurrent(0);
                        setScore(0);
                        setShowResult(false);
                    }}>
                        Play Again
                    </button>
                </div>
            )}
        </div>    
    );
}
// TechStackGame.jsx
