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


      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">The Surprise Arrival 🎁</h1>
      <p className="text-lg mb-4">So, one day you're minding your own business, and BAM! There it is, your first period. It might catch you off guard, but it's totally normal. Embrace the moment - you're officially part of the menstruation squad!</p>

      <h1 className="text-3xl font-bold mb-4">What to Expect 🤔</h1>
      <p className="text-lg mb-4">Your body's doing its thing, and it might feel like a rollercoaster of emotions and physical changes. Cramps, mood swings, and spotting are all part of the package. But hey, it's all temporary, and you're tougher than you think!</p>

      <h1 className="text-3xl font-bold mb-4">Gear Up 💪</h1>
      <p className="text-lg mb-4">Time to stock up on the essentials. Grab some pads or tampons - whatever floats your boat. And don't forget chocolate - it's practically a first period requirement.</p>

      <h1 className="text-3xl font-bold mb-4">Dealing with Cramps 😖</h1>
      <p className="text-lg mb-4">Ugh, cramps can be a real buzzkill. But fear not! Heat packs, gentle exercise, and cozying up with Netflix can be your allies in battling those pesky pains.</p>

      <h1 className="text-3xl font-bold mb-4">Talk About It 🗣️</h1>
      <p className="text-lg mb-4">Don't keep it all bottled up! Talk to someone you trust - whether it's your mom, a sister, or a friend. Chances are, they've been through it too and can offer some sage advice.</p>

      <h1 className="text-3xl font-bold mb-4">Period Positivity 🌈</h1>
      <p className="text-lg mb-4">Your period isn't a curse; it's a superpower! It's a sign that your body's doing its thing, and that's pretty darn amazing. So embrace your period with pride!</p>

      <h1 className="text-3xl font-bold mb-4">Stay Prepared 🎒</h1>
      <p className="text-lg mb-4">Always keep some period supplies handy, whether you're at school, hanging out with friends, or chilling at home. You never know when Aunt Flo might decide to make another surprise appearance.</p>

      <h1 className="text-3xl font-bold mb-4">Self-Care 💖</h1>
      <p className="text-lg mb-4">Your period is a great excuse for some self-indulgence. Treat yourself to a bubble bath, binge-watch your favorite show, or whip up some comfort food. You deserve it!</p>

      <p className="text-lg">Remember, girl, you've got this! Your first period might seem like a big deal now, but soon it'll be just another part of your fabulous life. So rock those pads, slay those cramps, and own your period like the queen you are! 🌟</p>
    </div>
      
    </>
  );
}
