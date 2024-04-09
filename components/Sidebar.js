import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Set initial state to true

  return (
    <div>
      <Disclosure as="nav" open={isOpen} onChange={setIsOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 text-3xl text-pink-900 font-bold hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
                <p>☰</p>

            </Disclosure.Button>
            <Disclosure.Panel>
              <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                {/* Sidebar content */}
                <div className="flex flex-col justify-start item-center">
                    
                  <h1 className="text-xl text-center cursor-pointer font-bold border-b border-gray-100 pb-4 w-full">
                    DASHBOARD
                  </h1>
                  
                  <div className=" my-4 border-b border-gray-100 pb-4">
                    {/* Sidebar links */}
                    <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-pink-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <MdOutlineSpaceDashboard className="text-2xl  group-hover:text-white " />
                      <h3 className="text-base  group-hover:text-white font-semibold ">
                        Dashboard
                      </h3>
                    </div>
                    <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-pink-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <CgProfile className="text-2xl  group-hover:text-white " />
                      <h3 className="text-base  group-hover:text-white font-semibold ">
                        Profile
                      </h3>
                    </div>
                    <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-pink-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <FaRegComments className="text-2xl group-hover:text-white " />
                      <h3 className="text-base  group-hover:text-white font-semibold ">
                        My First Period Guide
                      </h3>
                    </div>
                    <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-pink-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <MdOutlineAnalytics className="text-2xl  group-hover:text-white " />
                      <h3 className="text-base  group-hover:text-white font-semibold ">
                        Analytics
                      </h3>
                    </div>
                    <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-pink-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <BiMessageSquareDots className="text-2xl  group-hover:text-white " />
                      <h3 className="text-base  group-hover:text-white font-semibold ">
                        Messages
                      </h3>
                    </div>
                    <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-pink-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <MdOutlineIntegrationInstructions className="text-2xl  group-hover:text-white " />
                      <h3 className="text-base group-hover:text-white font-semibold ">
                        Integration
                      </h3>
                    </div>
                  </div>
                  {/* setting */}
                  <div className=" my-4 border-b border-gray-100 pb-4">
                    <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-pink-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <MdOutlineSettings className="text-2xl  group-hover:text-white " />
                      <h3 className="text-base group-hover:text-white font-semibold ">
                        Settings
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Sidebar;
