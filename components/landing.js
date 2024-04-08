import React from "react";

export default function Landing() {
  return (
    <>
      <div className="flex justify-center gap-24 mt-20">
        <div className="max-w-md flex-shrink-0 h-full mt-20">
          <h1 className="text-5xl font-bold">Yes, we bleed.</h1>
          <br />
          <br />
          <p className="mt-2 text-xl">
            Menstruation lasts for around two to seven days each month. People
            who menstruate will continue to bleed for 3,500 days in their lives,
            yet menstruation remains stigmatized.
          </p>
        </div>
        <div>
          <img
            style={{ width: "550px", height: "550px", objectFit: "cover", marginBottom: "250px" }}
            src="no.png"
            alt="Women"
          />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        {" "}
        {/* Added relative positioning container */}
        <img
          src="wave.png"
          alt="Wave"
          style={{ height: "450px", width: "1446px" }}
        />
        <p
          style={{
            position: "absolute",
            top: "40%", // Adjusted top position for the first paragraph
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          OUR VISION
        </p>
        <p
          style={{
            position: "absolute",
            top: "55%", 
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "20px",
          }}
        >
          hello guys
        </p>
      </div>
    </>
  );
}
