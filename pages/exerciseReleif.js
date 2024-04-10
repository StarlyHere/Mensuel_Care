import Navbar from '@/components/navbar'
import Releif from '@/components/Releif'
import React from 'react'

export default function ExerciseReleif() {
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
        className="transition-transform transform-gpu hover:scale-105"
      />
        </a>
      <Releif/>
    </div>
  )
}
