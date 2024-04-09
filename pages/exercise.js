import Banner from "@/components/Banner";
import Fitness from "@/components/Fitness";
import Navbar from "@/components/Navbar";
import OptionExercise from "@/components/OptionExercise";
import Releif from "@/components/Releif";
import React from "react";

export default function Exercise() {
  return (
    <div>
      <Navbar />
      <img
        src="ebanner.png"
        style={{
          width: "1100px",
          height: "280px",
          display: "block",
          margin: "0 auto",
          marginTop: "200px",
          marginBottom: "400px",
        }}
      />

      <OptionExercise/>
      

    </div>
  );
}
