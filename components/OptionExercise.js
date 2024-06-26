import React from 'react'

export default function OptionExercise() {
  return (
    <div className='flex justify-evenly mb-20'>
        <a href='/exerciseReleif'><img src='tabOne.png'
        style={{
            height: "500px",
            width: "375",
            border: "5px",
            borderBlockColor: "#ac1e44",
        }}
        className="transition-transform transform-gpu hover:scale-110"
        /></a>
        

        <a href='/exerciseFitness'><img src='tabTwo.png'
        style={{
            height: "500px",
            width: "375",
        }}
        className="transition-transform transform-gpu hover:scale-110"
        /></a>

        
    </div>
  )
}
