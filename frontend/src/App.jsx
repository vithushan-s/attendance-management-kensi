import React, { useState } from 'react';

import Sidebar from './components/DashBoard/Sidebar';
import Dashboard from './components/DashBoard/Dashboard';
import Dashboard2 from './components/DashBoard/Dashboard2';


function App(){
  // const[sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div>
  
    {/* <Sidebar sidebarToggle={sidebarToggle}/>
    <Dashboard sidebarToggle={sidebarToggle}
    setSidebarToggle={setSidebarToggle}/> */}

        <Dashboard2/>
    </div>
  );
};

export default App;
