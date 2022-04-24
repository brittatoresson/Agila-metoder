import React, { useState } from "react";
import Navbar from "./TopNav";
import Modal from "./Modal";

export default function QuizComponent() {
  const questions = [
    {
      questionText: "Vad är en User Story?",
      answerOptions: [
        { answerText: "Klagomål från användaren", correct: false },
        {
          answerText: "Behov och värde för användare",
          correct: true,
        },
        { answerText: "Beskrivning av arbetsprocessen", correct: false },
        { answerText: "Önskemål från användaren", correct: false },
      ],
    },
    {
      questionText: "Hur lång är en sprint?",
      answerOptions: [
        { answerText: "1 h", correct: false },
        { answerText: "Teamet bestämmer längden", correct: true },
        { answerText: "Oftast 2 veckor", correct: true },
        { answerText: "Olika för varje medlem i teamet", correct: false },
      ],
    },
    {
      questionText: "Vad är en skillnad mellan backlog och sprint backlog?",
      answerOptions: [
        { answerText: "Färgen", correct: true },
        { answerText: "Formen", correct: false },
        { answerText: "Längden", correct: true },
      ],
    },
    {
      questionText: "Vad räknas inte som en cermoni i Scrum?",
      answerOptions: [
        { answerText: "Sprint", correct: false },
        { answerText: "Value Points", correct: true },
        { answerText: "Stand up", correct: false },
        { answerText: "Sprint eview", correct: false },
      ],
    },
    {
      questionText: "Vad ingår inte i det agila manifestet??",
      answerOptions: [
        {
          answerText:
            "Bäst arkitektur, krav och design växer fram med självorganiserande team",
          correct: false,
        },
        {
          answerText: "Fungerande programvara är främsta måttet på framsteg.",
          correct: false,
        },
        { answerText: "Produktägaren besämmer över processen", correct: true },
        {
          answerText:
            "Enkelhet – konsten att maximera mängden arbete som inte görs – är grundläggande. ",
          correct: false,
        },
      ],
    },
  ];

  const [points, setPoints] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false);
  let winMessage = "Grattis! Du klarade quizen!";
  let modal = true;

  function handleAnswer(item) {
    let correct = item.answerOption.correct;
    console.log(item.answerOption.correct);

    if (correct) {
      setPoints(points + 1);
    }
    // if (points > 3) {
    //   winMessage = "Grattis! Du klarade quizen!";
    // }
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
        {/* <h1>{winMessage}</h1> */}
        {questions.map((question, i) => (
          <section key={i}>
            <p> {question.questionText} </p>

            {question.answerOptions.map((answerOption, i) => (
              <button onClick={(e) => handleAnswer({ answerOption })} key={i}>
                {answerOption.answerText}
              </button>
            ))}
          </section>
        ))}
      </section>
    </section>
  );
}
