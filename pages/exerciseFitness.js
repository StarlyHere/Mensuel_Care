import Fitness from '@/components/Fitness'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function ExerciseFitness() {
  return (
    <div>
        <Navbar/>
        
        <a href='/exercise'>
        <img
        src="ebanner.png"
        style={{
          width: "1100px",
          height: "280px",
          display: "block",
          margin: "0 auto",
          marginTop: "200px",
          marginBottom: "300px",
        }}
      />
        </a>



      <Fitness/>
      
    </div>
  )
}
