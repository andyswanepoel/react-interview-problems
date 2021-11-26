const Question = ({ questionData }) => {
  const { category, question, correctAnswer, incorrectAnswers } = questionData;

  const randomizeArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  };

  return (
    <div>
      <h1>{question}</h1>
      <h2>Category: {category}</h2>
    </div>
  );
};

export default Question;
