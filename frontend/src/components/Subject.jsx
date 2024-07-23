import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { ImListNumbered } from "react-icons/im";
import { PiStudentFill } from "react-icons/pi";
import { IoBook } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";

export default function Subject() {
  return (
    <div className='w-full h-screen bg-[url("./components/images/stu.jpg")] bg-no-repeat bg-center bg-cover'>
          
          <div className='glass'>
            <div className='w-full text-center'>
                <h2 className=' text-2xl text-black font-medium'>Add Subject</h2>
            </div>
            <form className='w-full'>
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter Subejct ID' />
                      <div className='w-2/12 flex items-center justify-center'>
                      <PiStudentFill className='text-xl'/>                   
                      </div>
                  </div>
                  
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter Subject Code' />
                      <div className='w-2/12 flex items-center justify-center'>
                      <ImListNumbered className='text-xl'/>                  
                      </div>
                  </div>
                  
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter Subject Name' />
                      <div className='w-2/12 flex items-center justify-center'>
                      <FaUser className='text-xl'></FaUser>                    
                      </div>
                  </div>
              
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter Subject Credit' />
                      <div className='w-2/12 flex items-center justify-center'>
                      <MdMarkEmailUnread className='text-xl' />                  
                      </div>
                  </div>
                  
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter Semester' />
                      <div className='w-2/12 flex items-center justify-center'>
                  <IoBook className='text-xl'/>                  
                      </div>
                  </div>
                  
                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter Academic Year' />
                      <div className='w-2/12 flex items-center justify-center'>
                      <FaBookReader className='text-xl'/>                  
                      </div>
                  </div>

                  <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                      <input type="text" className=' w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter Course Id' />
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

