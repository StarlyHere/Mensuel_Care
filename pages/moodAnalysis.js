import Navbar from '@/components/navbar';
import Banner from '@/components/banner';
import React, { useState, useEffect } from 'react';
import Sentiment from 'sentiment';

export default function MoodAnalysis() {
  const sentiment = new Sentiment();
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState();
  const [backgroundClass, setBackgroundClass] = useState("");
  const [placeholderSize, setPlaceholderSize] = useState("text-xl");

  useEffect(() => {
    const tempResult = sentiment.analyze(inputText);
    setResult(tempResult);
    setBackgroundClass(tempResult.score < 0 ? 'bg-red-200' : tempResult.score > 0 ? 'bg-green-200' : '');
    setPlaceholderSize(inputText.length > 0 ? 'text-lg' : 'text-xl');
  }, [inputText]);

  return (
    <>
      <Navbar />
      <Banner />
      <div className={`MoodAnalysis-header mt-8 mb-20 ${backgroundClass}`}>
        <div className="mb-4">
          <p className='icon'> {result?.score === 0 ? '😐' : result?.score < 0 ? '😞' : '🙂'}</p>
          <div className="score">
            <p className="font-bold text-xl text-[#ac1e44]">Score: {result?.score}</p>
          </div>
        </div>
        <input 
          type="text" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
          placeholder='Enter text here' 
          className={`bg-pink-500 ${placeholderSize} w-full h-12`} // Adjust width and height of the placeholder
        />
        <div className='result'>
          {
            result?.negative.map((item, index) => <span className='negative' key={index}>{item}</span>)
          }
          {
            result?.positive.map((item, index) => <span className='positive' key={index}>{item}</span>)
          }
        </div>
      </div>
    </>
  )
}
