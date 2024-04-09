import React from 'react';
import Navbar from '@/components/Navbar';

const Blogs = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex justify-center"> 
        <div className="space-y-8" style={{ width: '70vw' }}> 
          {/* First Row */}
          <div className="flex items-center border rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-2/3 mr-4"> 
              <h1 className="text-3xl font-bold">TOP 10 MENSTRUATION MYTHS!</h1>
              <br />
              <p className="mt-2 text-sm">
                Here are the ‘Top 10 Menstruation Myths’ that underpin this taboo. I routinely encounter them in the words and actions of people who menstruate, as well as their teachers, colleagues, community leaders, family, friends, and even doctors. It’s time for some more evidence-based myth busting!
              </p>
              <button className="mt-10 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"><a href="https://www.menstrual-matters.com/top-10-period-myths/">READ MORE</a></button>
            </div>
            <div className="w-1/3 flex justify-end"> 
              <img src="../b1.jpg" alt="Image 1" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex items-center border rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300 ">
            <div className="w-2/3 mr-4"> 
              <h1 className="text-3xl font-bold">PERIOD PAIN… WHAT’S NORMAL?</h1>
              <br />
              <p className="mt-2 text-sm">
                Is your period pain ‘normal’… or a sign of PMS, endometriosis, or fibroids? Yet again, the silence created by the menstrual taboo has led to unnecessary suffering, and confusion. Let’s bust some myths!
              </p>
              <button className="mt-10 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"><a href="https://www.menstrual-matters.com/period-pain-norm/">READ MORE</a></button>
            </div>
            <div className="w-1/4 flex justify-end"> 
              <img src="../b2.jpg" alt="Image 2" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          {/* Third Row */}
          <div className="flex items-center border rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-2/3 mr-4"> 
              <h1 className="text-3xl font-bold">TOP 10 MENSTRUATION MYTHS!</h1>
              <br />
              <p className="mt-2 text-sm">
                Here are the ‘Top 10 Menstruation Myths’ that underpin this taboo. I routinely encounter them in the words and actions of people who menstruate, as well as their teachers, colleagues, community leaders, family, friends, and even doctors. It’s time for some more evidence-based myth busting!
              </p>
              <button className="mt-10 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"><a href="https://www.menstrual-matters.com/top-10-period-myths/">READ MORE</a></button>
            </div>
            <div className="w-1/3 flex justify-end"> 
              <img src="../b1.jpg" alt="Image 1" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex items-center border rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300 ">
            <div className="w-2/3 mr-4"> 
              <h1 className="text-3xl font-bold">PERIOD PAIN… WHAT’S NORMAL?</h1>
              <br />
              <p className="mt-2 text-sm">
                Is your period pain ‘normal’… or a sign of PMS, endometriosis, or fibroids? Yet again, the silence created by the menstrual taboo has led to unnecessary suffering, and confusion. Let’s bust some myths!
              </p>
              <button className="mt-10 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"><a href="https://www.menstrual-matters.com/period-pain-norm/">READ MORE</a></button>
            </div>
            <div className="w-1/4 flex justify-end"> 
              <img src="../b2.jpg" alt="Image 2" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
