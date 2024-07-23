import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { ImListNumbered } from "react-icons/im";
import { PiStudentFill } from "react-icons/pi";
import { IoBook } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";

export default function Faculty() {
  return (
    <div className='w-full h-screen bg-[url("./components/images/stu.jpg")] bg-no-repeat bg-center bg-cover'>
          
          <div className='glass'>
            <div className='w-full text-center'>
                <h2 className=' text-2xl text-black font-medium'> Add Faculty</h2>
            </div>
            <form className='w-full'>
                  
                  <div className='flex flex-col border-b-black border-b-2 mx-5 my-7 py-1'>
                      <label htmlFor="f_code">Faculty Code</label>
                      <div className='flex'>
                        <input type="text" id='f_code' className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter your FAculty Code' />
                        <div className='w-2/12 flex items-center justify-center'>
                        <ImListNumbered className='text-xl'/>                  
                        </div>
                      </div>
                  </div>
                  
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter your Faculty Name' />
                      <div className='w-2/12 flex items-center justify-center'>
                      <FaUser className='text-xl'></FaUser>                    
                      </div>
                  </div>
              
                  <div className=' mx-5 my-7 py-2'>
                      <button className=' bg-black w-full h-[35px] rounded-sm text-white'> Add</button>
                  </div>
            </form>
          </div>
          
        
    </div>
  )
}

