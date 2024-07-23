import React, { useState } from 'react'
import { FaUserGraduate } from "react-icons/fa6";
import { AiFillRead } from "react-icons/ai";
import { FaTable } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import { MdSummarize } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? " hidden " : " block "}w-64 bg-gray-800 fixed h-full px-4 py-2`}>
        <div className="my-2 mb-4">
            <h1 className="text-2x text-white font-bold m-2"> Admin DashBoard</h1>
        </div>
        <hr />
        <ul className="mt-3 text-white font-bold">

        <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <TiHome className="inline-block w-6 h-5 ml-2 -mt-2"> </TiHome>
                <a href="" className="px-3">Home</a>
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <FaUserGraduate className="inline-block w-6 h-5 ml-2 -mt-2"></FaUserGraduate>
                <a href="" className="px-3">Student</a>
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <FaUserPen className="inline-block w-6 h-5 ml-2 -mt-2"></FaUserPen>
                <a href="" className="px-3">Lectures </a>
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <AiFillRead className="inline-block w-6 h-5 ml-2 -mt-2"/>
                <a href="" className="px-3">Cousres</a>
                
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <FaTable className="inline-block w-6 h-5 ml-2 -mt-2"></FaTable>
                <a href="" className="px-3">Time table </a>
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <MdSubject className="inline-block w-6 h-5 ml-2 -mt-2"></MdSubject>
                <a href="" className="px-3">Subject </a>
            </li>

            <li className="mb-5 rounded hover:shadow hover:bg-blue-500 py-2">
            <MdSummarize className="inline-block w-6 h-5 ml-2 -mt-2"></MdSummarize>
                <a href="" className="px-3">Attendance </a>
            </li>
        </ul>

    </div>
  )
}

export default Sidebar