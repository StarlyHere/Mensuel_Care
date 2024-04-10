import React from "react";

export default function Landing() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-24 mt-20">
        <div className="max-w-md flex-shrink-0 h-full mt-20 md:mt-0">
          <h1 className="text-5xl font-bold text-center ml-12 md:text-left">Yes, we bleed.</h1>
          <br />
          <br />
          <p className="mt-2 ml-10 text-xl text-center md:text-left">
            Menstruation lasts for around two to seven days each month. People
            who menstruate will continue to bleed for 3,500 days in their lives,
            yet menstruation remains stigmatized
          </p>
        </div>
        <div>
          <img
            className="w-full md:w-550px h-auto mb-8 md:mb-0"
            src="no.png"
            alt="Women"
          />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          src="wave.png"
          alt="Wave"
          className="w-full h-auto"
          style={{ height: "450px" }}
        />
        <p
          style={{
            position: "absolute",
            top: "40%",
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
            fontSize: "15px",
          }}
        >
          ✨ Our website is like your ultimate bestie, here to help you conquer those period challenges! We're your go-to for all the tips and tricks to make your period a total breeze! 
        </p>
      </div>
      <div style={{ marginTop: "270px", fontWeight: "bolder", fontFamily: "sans-serif" }}>
        <h1 className="text-5xl flex justify-center">FEATURED PAGES</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-items-center mt-20">
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "270px", height: "270px" }}
            src="tile.png"
            alt="Tile 1"
          />
          <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold ">
            🎭
          </span>

        </div>
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "270px", height: "270px" }}
            src="darktile.png"
            alt="Tile 2"
          />
          <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold">
          📅
          </span>
          
        </div>
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "270px", height: "270px" }}
            src="tile.png"
            alt="Tile 3"
          />
          <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontSize: "80px", fontWeight: "bold" }}>
            📕
          </span>
        </div>
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "270px", height: "270px" }}
            src="darktile.png"
            alt="Tile 4"
          />
          <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontSize: "80px", fontWeight: "bold" }}>
            🏋️‍♀️
          </span>
        </div>
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "270px", height: "270px" }}
            src="tile.png"
            alt="Tile 5"
          />
          <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontSize: "80px", fontWeight: "bold" }}>
           🥗
          </span>
        </div>
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "270px", height: "270px" }}
            src="darktile.png"
            alt="Tile 6"
          />
          <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontSize: "80px", fontWeight: "bold" }}>
            🆘
          </span>
        </div>
      </div>
    </>
  );
}