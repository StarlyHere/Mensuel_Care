import Navbar from "@/components/Navbar";
import React from "react";

export default function FirstPeriod() {
  return (
    <>
      <Navbar />
      <div className="image-container">
        <img
          src="guider.png"
          alt="Guide Image"
          style={{
            width: "1100px",
            height: "270px",
            display: "block",
            margin: "0 auto",
            marginTop: "130px",
          }}
        />
      </div>
      <div className="flex justify-center mt-10 p-10 text-5xl font-extrabold">
        MY FIRST PERIOD GUIDE
      </div>
      <div className="flex justify-center gap-24 mt-20"> {/* Main container */}
        <div
          className="max-w-md flex-shrink-0 h-full"
          style={{ marginTop: "200px" }} // Inline style for margin-top
        >
          <h1 className="text-5xl font-bold">HEY BESTIE!✨</h1>
          <br />
          <br />
          <p className="mt-20 text-xl font-semibold">
            Hey bestie! ✨ Ready for your first period journey? <br/><br/>From essentials
            to self-care tips, let's dive in together with love and sparkle!
            ✨ Explore, learn, and embrace this new chapter with confidence
            and grace. You've got this! "
          </p>
        </div>
        <div style={{ marginTop: "200px" }}> {/* Inline style for image */}
          <img
            style={{
              width: "550px",
              height: "550px",
              objectFit: "cover",
              marginBottom: "250px",
            }}
            src="one.png"
            alt="Women"
          />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        {/* Added relative positioning container */}
      </div>
      <div className="flex justify-evenly">
        <img src="gone.png" style={{ width: "270px", height: "270px" }} />
        <img src="gtwo.png" style={{ width: "270px", height: "270px" }} />
        <img src="gthree.png" style={{ width: "270px", height: "270px" }} />
      </div>
      <div className="flex justify-center mt-10 p-10 text-4xl font-extrabold" style={{ marginTop: "100px" }}> {/* Added inline style */}
         First Period Survival Guide: Welcome to the Club, Girl! 
      </div>
      
    </>
  );
}
