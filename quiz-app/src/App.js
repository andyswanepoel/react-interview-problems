import { useEffect, useState } from "react";
import Question from "./components/Question";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [correct, setCorrect] = useState(0);

  useEffect(() => {
    fetch("https://api.trivia.willfry.co.uk/questions?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setCurrentQuestion(0);
      });
  }, []);

  const goToNextQuestion = () => {
    setCurrentQuestion((prevState) => {
      if (prevState < questions.length - 1) return prevState + 1;
    });
  };
  return (
    <div>
      {questions.length === 0 && <div>Loading questions...</div>}
      {questions.length !== 0 &&
        questions.map((question, i) => {
          return (
            currentQuestion === i && (
              <Question key={question.id} questionData={question} />
            )
          );
        })}
      {questions.length !== 0 && currentQuestion !== questions.length - 1 && (
        <button onClick={goToNextQuestion}>Next question</button>
      )}
      {questions.length !== 0 && currentQuestion === questions.length - 1 && (
        <button onClick={() => {}}>Submit and see results!</button>
      )}
    </div>
  );
};

export default App;
