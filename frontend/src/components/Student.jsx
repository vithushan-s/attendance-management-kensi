import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { ImListNumbered } from "react-icons/im";
import { PiStudentFill } from "react-icons/pi";
import { IoBook } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";

export default function Student() {
  return (
    <div className='w-full h-screen bg-[url("./components/images/stu.jpg")] bg-no-repeat bg-center bg-cover'>
          
          <div className='glass'>
            <div className='w-full text-center'>
                <h2 className=' text-2xl text-black font-medium'> Register Student</h2>
            </div>
            <form className='w-full'>
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter your ID' />
                      <div className='w-2/12 flex items-center justify-center'>
                      <PiStudentFill className='text-xl'/>                   
                      </div>
                  </div>
                  
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter your Index No' />
                      <div className='w-2/12 flex items-center justify-center'>
                      <ImListNumbered className='text-xl'/>                  
                      </div>
                  </div>
                  
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter your full Name' />
                      <div className='w-2/12 flex items-center justify-center'>
                      <FaUser className='text-xl'></FaUser>                    
                      </div>
                  </div>
              
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter your Email' />
                      <div className='w-2/12 flex items-center justify-center'>
                      <MdMarkEmailUnread className='text-xl' />                  
                      </div>
                  </div>
                  
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter your Course ID' />
                      <div className='w-2/12 flex items-center justify-center'>
                  <IoBook className='text-xl'/>                  
                      </div>
                  </div>
                  
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter your Batch ID' />
                      <div className='w-2/12 flex items-center justify-center'>
                      <FaBookReader className='text-xl'/>                  
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

