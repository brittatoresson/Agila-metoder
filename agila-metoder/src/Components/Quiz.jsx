import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "./Modal";
import Footer from "./Footer";

export default function QuizComponent() {
  const [state, setState] = useState();
  const url = "http://localhost:5002/quizData.json";
  const [points, setPoints] = useState(0);
  const [correct, setCorrect] = useState(false);
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
    //Om svaret är korrekt adderas att poäng till räknaren
    if (item.answerOption.correct) {
      setCorrect(true);
      setPoints(points + 1);
    } else {
      setCorrect(false);
    }
  }
  console.log(correct);
  return (
    <section id="quiz" className="scroller">
      {points > 0 ? (
        <p className={points ? "addPoint" : null} id="points">
          Poäng: {points}
        </p>
      ) : null}
      {points > 3 ? <Modal item={winMessage} modal={modal} /> : null}
      <section id="quiz-section">
        {state
          ? state.map((question, i) => (
              <section key={i} id="answers">
                <p> {question.questionText} </p>

                {question.answerOptions.map((answerOption, i) => (
                  <button
                    onClick={(e) => handleAnswer({ answerOption })}
                    key={i}
                  >
                    {answerOption.id}: {answerOption.answerText}
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
