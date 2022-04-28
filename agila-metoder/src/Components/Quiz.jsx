import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "./Modal";
import Footer from "./Footer";

export default function QuizComponent() {
  const [state, setState] = useState();
  const url = "http://localhost:5002/quizData.json";
  const [points, setPoints] = useState(0);
  const [correctId, setCorrectId] = useState();
  let winMessage = "Grattis! Du klarade quizet!";
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
    if (item.answerOption.correct && points < 7) {
      setCorrectId(item.answerOption.id);
      setPoints(points + 1);
    }
  }
  return (
    <section id="quiz" className="scroller">
      <h4 className="addPoint">Poäng: {points}</h4>
      {points > 4 ? <Modal item={winMessage} modal={modal} /> : null}
      <section id="quiz-section">
        {state
          ? state.map((question, i) => (
              <section key={i} id="answers">
                <h4> {question.questionText} </h4>

                {question.answerOptions.map((answerOption, i) => (
                  <div
                    //vid klick kallas handlAnswerfunktionen, om correctId har fått en träff kallas ej funktionen.
                    onClick={
                      correctId !== answerOption.id
                        ? (e) => handleAnswer({ answerOption })
                        : null
                    }
                    key={i}
                    //om rätt svar så ändras klassnamnet
                    className={
                      correctId == answerOption.id ? "rightAnswer" : null
                    }
                  >
                    {i + 1}: {answerOption.answerText}
                  </div>
                ))}
              </section>
            ))
          : null}
      </section>
      <Footer />
    </section>
  );
}
