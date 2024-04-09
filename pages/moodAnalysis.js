import Navbar from '@/components/Navbar';
import Banner from '@/components/banner';
import React,{useState,useEffect} from 'react'
import Sentiment
 from 'sentiment'
export default function MoodAnalysis() {

  const sentiment = new Sentiment();
  const [inputText,setInputText] = useState("");
  const [result,setResult] = useState();

  useEffect(()=>{
    const tempResult = sentiment.analyze(inputText);
    setResult(tempResult)
    console.log(tempResult);
  },[inputText])

  return (
    <>
    <Navbar/>
    <Banner/>
    <div className='MoodAnalysis-header'>
        <p className='icon'> {result?.score === 0 ? '😐' : result?.score < 0 ? '😞' :'🙂'}</p>
        <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} placeholder='Enter text here' />
        <div className='result'>
          {
            result?.negative.map((item,index)=><span className='negative'>{item}</span>)
          }
          {
            result?.positive.map((item,index)=><span className='positive'>{item}</span>)
          }
        </div>
    </div>
  </>
  )
}
