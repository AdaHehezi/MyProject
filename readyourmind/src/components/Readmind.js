import React, { useState } from 'react';


const Readmind = () => {

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const numberLists = [
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63],
    [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63],
    [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63],
    [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63],
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
    [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
  ].map(shuffleArray);

  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [guessedNumber, setGuessedNumber] = useState(null);
  const [userResponses, setUserResponses] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartClick = () => {
    setGameStarted(true);
  };

  const handleYesClick = () => {
    const currentList = numberLists[currentListIndex];
    const smallestNumber = Math.min(...currentList);
    setUserResponses([...userResponses, smallestNumber]);
    setCurrentListIndex(currentListIndex + 1);
  };

  const handleNoClick = () => {
    setCurrentListIndex(currentListIndex + 1);
  };

  const calculateChosenNumber = () => {
    const chosenNumber = userResponses.reduce((sum, num) => sum + num, 0);
    setGuessedNumber(chosenNumber);
  };

  const resetGame = () => {
    setCurrentListIndex(0);
    setGuessedNumber(null);
    setUserResponses([]);
    setGameStarted(false);
  };

  return (
    <div className="container mt-4">

      <h1>Read your mind Game</h1>

      <h2>Think of a number between 1 and 63, but don't share it with anyone. I'll discover your chosen number by asking you six yes-or-no questions.</h2>
      
      {!gameStarted ? (
        <button type="button" className="btn btn-danger mx-4 mt-3" onClick={handleStartClick}>Start</button>
      ) : currentListIndex < numberLists.length ? (
        <div className="mt-4 mb-4">
          <h4>Is your chosen number in the current list?</h4>
          <h5>Current List: {numberLists[currentListIndex].join(', ')}</h5>
          <button type="button" className="btn btn-success mx-4 mt-3 mb-4" onClick={handleYesClick}>Yes</button>
          <button type="button" className="btn btn-warning mx-4 mt-3 mb-4" onClick={handleNoClick}>No</button>
        </div>
      ) : (
        <div className="container mt-4">
          <h5>You have answered all the questions.</h5>
          <h5>Your chosen number is: {guessedNumber}</h5>
        </div>
      )}
      {currentListIndex === numberLists.length && (
        <>
        <button type="button" className="btn btn-outline-primary mx-3 mt-3 mb-4" onClick={calculateChosenNumber}>Click to see the chosen number</button>
        <button type="button" className="btn btn-outline-primary mt-3 mb-4 mx-4" onClick={resetGame}>Play Again</button>
        </>
      )}
      
    </div>
  );
};


export default Readmind;