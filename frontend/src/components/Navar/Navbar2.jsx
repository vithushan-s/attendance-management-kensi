import React from 'react'
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";

const Navbar2 = () => {
  return (
    <nav className=' bg-gray-800 px-4 py-3 flex justify-between'>
        <div className='flex items-center text-xl'>
        <FaBars className="text-white me-4 cursor-pointer" />
        <span className="text-white font-semibold">Attendance Managment System</span>
        </div>
        <div className="flex items-center gap-x-5">
            <div className="relative md:w-65">
                <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2"><button className="p-1 focus:outline-none text-white md:text-black"><FaSearch /></button></span>
                <input type="text" className=" w-full px-4 pl-12 rounded shadow outline-none hidden md:block"/>
            </div>

            <div className="text-white">
            <FaBell className="w-6 h-6"/> 
            </div>

            <div>

            </div>

        </div>
    </nav>
  )
}

export default Navbar2