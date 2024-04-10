import React, { useState } from "react";

export default function Fitness() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleButtonClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <div>
      <div className="flex justify-center">
        <button onClick={() => handleButtonClick("uKEPTDLgSWs")} className="mr-4 border-2 bg-[#ac1e44] border-gray-400 px-6 py-3 rounded-lg text-white hover:bg-gray-200 hover:text-[#ac1e44] transition-transform transform-gpu hover:scale-105">Fun Dance</button>
        <button onClick={() => handleButtonClick("OFibSNpw2hE")} className="mr-4 border-2 bg-[#ac1e44] border-gray-400 px-6 py-3 rounded-lg text-white hover:bg-gray-200 hover:text-[#ac1e44] transition-transform transform-gpu hover:scale-105">Fat Burner</button>
        <button onClick={() => handleButtonClick("Ub0eQBe54dU")} className="mr-4 border-2 bg-[#ac1e44] border-gray-400 px-6 py-3 rounded-lg text-white hover:bg-gray-200 hover:text-[#ac1e44] transition-transform transform-gpu hover:scale-105">HIIT Workout</button>
        <button onClick={() => handleButtonClick("ramrjR8pCZ0")} className="mr-4 border-2 bg-[#ac1e44] border-gray-400 px-6 py-3 rounded-lg text-white hover:bg-gray-200 hover:text-[#ac1e44] transition-transform transform-gpu hover:scale-105">Cardio</button>
      </div>
      <br />
      <br />
      <br />
      <br />

      {selectedVideo && (
        <div className="flex justify-center">
          <iframe
            width="1000"
            height="500"
            src={`https://www.youtube.com/embed/${selectedVideo}?si=USnMy082-Xd6hIdv`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ border: "5px solid #ac1e44", borderRadius:"10px" }}
          ></iframe>
        </div>
      )}
    </div>
  );
}
