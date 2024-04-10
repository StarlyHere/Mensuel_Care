import React, { useState } from 'react';


const ButtonCounter = () => {
  const initialButtonValues = [
    { value: 1, name: "Cramps" },
    { value: 2, name: "Bloating" },
    { value: 3, name: "Breast Tenderness" },
    { value: 4, name: "Fatigue" },
    { value: 5, name: "Mood Swings" },
    { value: 6, name: "Headaches" },
    { value: 7, name: "Nausea" },
    { value: 8, name: "Diarrhea" },
    { value: 9, name: "Acne" },
    { value: 10, name: "Back Pain" }
  ];
  const [initialButtons, setInitialButtons] = useState(initialButtonValues);
  const [clickedButtons, setClickedButtons] = useState([]);
  
  const handleButtonClick = (button) => {
    setInitialButtons(prevButtons => prevButtons.filter(btn => btn.value !== button.value));
    setClickedButtons(prevButtons => [...prevButtons, button]);
  };

  const handleReset = () => {
    setInitialButtons(initialButtonValues);
    setClickedButtons([]);
  };

  const renderMessage = () => {
    let message = "";

    const numClickedButtons = clickedButtons.length;

    if (numClickedButtons === 0) {
      message = "No Pain";
    } else if (numClickedButtons === 1) {
      message = "Mild Pain";
    } else if (numClickedButtons === 2) {
      message = "Discomforting";
    } else if (numClickedButtons === 3) {
      message = "Uncomfortable";
    } else if (numClickedButtons === 4) {
      message = "Moderate Pain";
    } else if (numClickedButtons === 5) {
      message = "Distressing";
    } else if (numClickedButtons === 6) {
      message = "Severe Pain";
    } else if (numClickedButtons === 7) {
      message = "Very Severe Pain";
    } else if (numClickedButtons === 8) {
      message = "Agonizing pain";
    } else if (numClickedButtons === 9) {
      message = "Unbearable Pain";
    } else if (numClickedButtons === 10) {
      message = "Unimaginable Pain";
    } else {
      message = "All dying";
    }

    return (
      <div className="bg-gray-100 rounded-md p-4 mt-4 text-center">
        <p className="text-lg">{message}</p>
      </div>
    );
  };

  const renderInitialButtons = () => {
    const buttonsInFirstLine = initialButtons.slice(0, 5);
    const buttonsInSecondLine = initialButtons.slice(5, 10);

    return (
      <div>
        
        <div className="flex justify-center">
          {buttonsInFirstLine.map(button => (
            <button
              key={button.value}
              onClick={() => handleButtonClick(button)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none mr-2 mb-2"
            >
              {button.name}
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {buttonsInSecondLine.map(button => (
            <button
              key={button.value}
              onClick={() => handleButtonClick(button)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none mr-2 mb-2"
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
    );
  };
  

  const renderClickedButtons = () => {
    return clickedButtons.map(button => (
      <button
        key={button.value}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none mr-2 mt-2"
      >
        {button.name}
      </button>
    ));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      {renderInitialButtons()}
      <div className="flex justify-center mt-4">
        {renderClickedButtons()}
      </div>
      <div>
        {renderMessage()}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handleReset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none">Reset</button>
      </div>
    </div>
    
  );
};

export default ButtonCounter;
