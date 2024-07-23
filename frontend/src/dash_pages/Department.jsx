import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Department() {

// Load faculty names into Dropdown 
const [options,setOptions] = useState([]);
const [selectedOption, setSelectedOption] = useState('')

useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/faculties');
      setOptions(response.data);
    } catch (error) {
      console.error('Error fetching data',error);
    }
  }
  fetchData();
},[])

const handleChange = (e) => {
  setSelectedOption(e.target.value)
  console.log(selectedOption);
}

// Inserting data into Department Database
// Handle and Save form data
const [formData, setFormData] = useState({
  code:'',
  name:'',
});

const handleFormChange = (e) => {
  const { name, value } = e.target;
  setFormData({...formData,[name]: value,});
};

// Display Success message
const [message,setMessage] = useState('');


const handleSubmit = async (e) =>{
  e.preventDefault();
  // console.log(formData)
  try {
    const response = await axios.post('http://localhost:5000/api/department/new',formData);
    setMessage(response.data.message);
    console.log(response.data);
  } catch (error) {
      console.error(error);
  }
}

    
  return (
    <div className=' h-full w-full bg-[url("./components/images/stu.jpg")] bg-no-repeat bg-center bg-cover p-2'>
        <div className='glass w-1/2 p-3 flex flex-col gap-5'>
            <h1 className='text-xl font-bold border-b-2 border-gray-400'>Manage Department</h1>
            {/* Form field */}
            <div className='flex justify-center'>
              <form onSubmit={handleSubmit} className='w-3/4 flex flex-col gap-2'>
                {/*  */}
                <div className='flex flex-col'>
                  <label className='text-sm font-medium' htmlFor="code">Department Code</label>
                  <input type="text" id='code' name='code' className='p-1 outline-none focus:ring-2 rounded-md w-1/2' />
                </div>

                {/* Selection dropdown */}
                <div className='flex flex-col'>
                  <label className='text-sm font-medium' htmlFor="faculty">Faculty</label>
                  <select name="faculty" id='faculty' value={selectedOption} onChange={handleChange} className='p-1 outline-none focus:ring-2 rounded-md'>
                    <option value={0}>Choose faculty</option>
                    {
                      options.map((option)=>(
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))
                    }
                  </select>
                </div>
                
                <div className='flex flex-col'>
                  <label className='text-sm font-medium' htmlFor="name">Department Name</label>
                  <input type="text" id='name' name='name' className='p-1 outline-none focus:ring-2 rounded-md' />
                </div>
                
                <button type='submit' className='bg-blue-950 p-1 w-full rounded-md mt-4 text-white font-bold hover:bg-blue-900'>Save</button>
              </form>
            </div>

            {/* Table */}
            <div className='flex justify-center border'>
              <table className='w-full text-sm' >
                <thead>
                  <tr className='bg-gray-50'>
                    <th className='text-left py-1'>Code</th>
                    <th className='text-left py-1'>Faculty</th>
                    <th className='text-left py-1'>Name</th>
                    <th className='py-1'>Action</th>
                  </tr>
                </thead>

                <tbody className='divide-y-2 divide-gray-400'>
                  <tr className='odd:bg-gray-200 '>
                    <td>DCS</td>
                    <td>FAS</td>
                    <td>Department of Computer Science</td>
                    <td className='text-center'><button className='bg-blue-950 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-900'>Edit</button></td>
                  </tr>
                </tbody>
                  
              </table>
            </div>
        </div>
    </div>
  )
}

