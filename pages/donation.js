import React from 'react';
import Navbar from '@/components/Navbar';

const Donate = () => {
  return (
    <div>
      <Navbar/>
    
      <div className="space-y-8">
        {/* First Row */}
        <div className="flex items-center border rounded-lg p-4 shadow-lg">
          <div className="w-2/3 mr-4"> 
            <p className="text-lg font-semibold mb-2">Text Content 1</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris id elit et risus
              dignissim tempor.
            </p>
            <button className="mt-10 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate</button>
          </div>
          <div className="w-1/3 flex justify-end"> 
            <img src="../d1.svg" alt="Image 1" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex items-center border rounded-lg p-4 shadow-lg">
          <div className="w-2/3 mr-4"> 
            <p className="text-lg font-semibold mb-2">Text Content 2</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris id elit et risus
              dignissim tempor.
            </p>
            <button className="mt-10 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate</button>
          </div>
          <div className="w-1/4 flex justify-end"> 
            <img src="../d4.png" alt="Image 2" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Third Row */}
        <div className="flex items-center border rounded-lg p-4 shadow-lg">
          <div className="w-2/3 mr-4"> 
            <p className="text-lg font-semibold mb-2">Text Content 3</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris id elit et risus
              dignissim tempor.
            </p>
            <button className="mt-10 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate</button>
          </div>
          <div className="w-1/3 flex justify-end">
            <img src="../d3.svg" alt="Image 3" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Fourth Row */}
        <div className="flex items-center border rounded-lg p-4 shadow-lg">
          <div className="w-2/3 mr-4"> 
            <p className="text-lg font-semibold mb-2">Text Content 4</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris id elit et risus
              dignissim tempor.
            </p>
            <button className="mt-10 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate</button>
          </div>
          <div className="w-1/3 flex justify-end"> 
            <img src="../d5.png" alt="Image 4" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
