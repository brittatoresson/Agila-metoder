import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./TopNav";
import Modal from "./Modal";
import Footer from "./Footer";

export default function QuizComponent() {
  const [state, setState] = useState();
  const url = "http://localhost:5002/quizData.json";
  const [points, setPoints] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false);
  let winMessage = "Grattis! Du klarade quizen!";
  let modal = true;

  //Fetcha data
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  //Funktion som hanterar val av svar från avndändaren
  function handleAnswer(item) {
    let correct = item.answerOption.correct;
    //Om svaret är korrekt adderas att poäng till räknaren
    if (correct) {
      setPoints(points + 1);
    }
  }

  return (
    <section id="quiz">
      <Navbar />
      {points > 0 ? (
        <p className={points ? "addPoint" : null} id="points">
          Poäng: {points}
        </p>
      ) : null}
      {points > 3 ? <Modal item={winMessage} modal={modal} /> : null}
      <section id="quiz-section">
        {state
          ? state.map((question, i) => (
              <section key={i}>
                <p> {question.questionText} </p>

                {question.answerOptions.map((answerOption, i) => (
                  <button
                    onClick={(e) => handleAnswer({ answerOption })}
                    key={i}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </section>
            ))
          : null}
      </section>
      <Footer />
    </section>
  );
}
