import React from 'react'
import Navbar2 from '../Navar/Navbar'
import Sidebar2 from '../DashBoard/Sidebar2'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../Home'
import Student from '../Student'
import Timetable from '../Timetable'
import Subject from '../Subject'
import Lecturer from '../Lecturer'
import Cousres from '../Courses'
import Faculty from '../../dash_pages/Faculty'
import Department from '../../dash_pages/Department'


function Dashboard2() {
  return (
    <BrowserRouter>
    <div className='flex flex-col'>
        <div>
            <Navbar2/>
        </div>
        
        <div className='flex'>
            <div>
                <Sidebar2/>
            </div>

            <div className='w-full'>
                <Routes>
                    <Route path='/' Component={Home}></Route>
                    <Route path='/student' Component={Student}></Route>
                    <Route path='/timetable' Component={Timetable}></Route>
                    <Route path='/subject' Component={Subject}></Route>
                    <Route path='/lecturer' Component={Lecturer}></Route>
                    <Route path='/courses' Component={Cousres}></Route>
                    <Route path='/faculty' Component={Faculty}></Route>
                    <Route path='/department' Component={Department}></Route>
                </Routes>
            </div>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default Dashboard2
