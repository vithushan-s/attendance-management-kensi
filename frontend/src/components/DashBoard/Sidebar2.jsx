import React from 'react'
import { FaUserGraduate } from "react-icons/fa6";
import { AiFillRead } from "react-icons/ai";
import { FaTable } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import { MdSummarize } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Sidebar2 = () => {
  return (
    <div className='w-48 bg-gray-800 h-screen px-4 py-2'>
        <div className="my-2 mb-4">
            <h1 className="text-2x text-white font-bold m-2"> Admin DashBoard</h1>
        </div>
        <hr />
        <ul className="mt-3 text-white font-bold">

        <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <TiHome className="inline-block w-6 h-5 ml-2 -mt-2"> </TiHome>
                <Link to='/' className="px-3">Home</Link>
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <FaUserGraduate className="inline-block w-6 h-5 ml-2 -mt-2"></FaUserGraduate>
            <Link to='/faculty' className="px-3">Faculty</Link>
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <FaUserGraduate className="inline-block w-6 h-5 ml-2 -mt-2"></FaUserGraduate>
            <Link to='/department' className="px-3">Department</Link>
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <FaUserGraduate className="inline-block w-6 h-5 ml-2 -mt-2"></FaUserGraduate>
            <Link to='/student' className="px-3">Student</Link>
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <FaUserPen className="inline-block w-6 h-5 ml-2 -mt-2"></FaUserPen>
            <Link to='/lecturer' className="px-3">Lecturer</Link>
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <AiFillRead className="inline-block w-6 h-5 ml-2 -mt-2"/>
            <Link to='/courses' className="px-3">Courses</Link>
                
                
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <FaTable className="inline-block w-6 h-5 ml-2 -mt-2"></FaTable>
            <Link to='/timetable' className="px-3">Time Table</Link>
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <MdSubject className="inline-block w-6 h-5 ml-2 -mt-2"></MdSubject>
            <Link to='/subject' className="px-3">Subject</Link>
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <MdSummarize className="inline-block w-6 h-5 ml-2 -mt-2"></MdSummarize>
                <a href="" className="px-3">Attendance </a>
            </li>
        </ul>

    </div>
  )
}

export default Sidebar2