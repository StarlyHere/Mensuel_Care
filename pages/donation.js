import React from 'react';
import Navbar from '@/components/Navbar';

const Donate = () => {
  return (
    <div>
      <Navbar/>
    
      <div className="flex justify-center"> {/* Centering container horizontally */}
        <div className="space-y-8" style={{ width: '70vw' }}> {/* Adjusted width */}
          {/* First Row */}
          <div className="flex items-center border rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-2/3 mr-4"> 
              <h1 className="text-3xl font-bold">PINKISHE FOUNDATION</h1>
              <br />
              <p className="mt-2 text-xl">
                Pinkishe Foundation is on a mission to end period poverty, 
                normalize menstruation, and promote menstrual literacy.
              </p>
              <button className="mt-10 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate</button>
            </div>
            <div className="w-1/3 flex justify-end"> 
              <img src="../d1.svg" alt="Image 1" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex items-center border rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-2/3 mr-4"> 
              <h1 className="text-3xl font-bold">CHETNA INDIA</h1>
              <br />
              <p className="mt-2 text-xl">
                CHETNA’s approach to health embraces the life cycle of gender equity within the wide cultural, economical and political environment. 
                CHETNA recognizes and addresses women’s health issues throughout her life cycle.
              </p>
              <button className="mt-10 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate</button>
            </div>
            <div className="w-1/4 flex justify-end"> 
              <img src="../d4.png" alt="Image 2" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          {/* Third Row */}
          <div className="flex items-center border rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-2/3 mr-4"> 
              <h1 className="text-3xl font-bold">CARE INDIA</h1>
              <br />
              <p className="mt-2 text-xl">
                CARE focuses on large scale interventions that build communities that are capable of empowering women and girls.
                Their programmes aim to amplify and channel the dialogue on marginalized women and girls in India.
              </p>
              <button className="mt-10 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate</button>
            </div>
            <div className="w-1/3 flex justify-end">
              <img src="../d3.svg" alt="Image 3" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="flex items-center border rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-2/3 mr-4"> 
              <h1 className="text-3xl font-bold">AZAD FOUNDATION</h1>
              <br />
              <p className="mt-2 text-xl">
                Azad Foundation’s mission is to equip resource-poor women with knowledge and skills so that they excel as professionals and entrepreneurs, and earn a “livelihood with dignity” in jobs and markets that had traditionally been closed to them.
              </p>
              <button className="mt-10 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate</button>
            </div>
            <div className="w-1/3 flex justify-end"> 
              <img src="../d5.png" alt="Image 4" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
