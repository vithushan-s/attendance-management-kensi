import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Faculty() {

// Display all faculty informations
const [faculty,setFaculty] = useState([]);

useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/faculties');
      setFaculty(response.data);
    } catch (error) {
      console.error('Error fetching data',error);
    }
  }
  fetchData();
},[])


// Handle and Save form data
const [formData, setFormData] = useState({
  code:'',
  name:'',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({...formData,[name]: value,});
};

// Display Success message
const [message,setMessage] = useState('');


const handleSubmit = async (e) =>{
  e.preventDefault();
  // console.log(formData)
  try {
    const response = await axios.post('http://localhost:5000/api/faculty/new',formData);
    setMessage(response.data.message);
    console.log(response.data);
  } catch (error) {
      console.error(error);
  }
}

  return (
    <div className=' h-full w-full bg-[url("./components/images/stu.jpg")] bg-no-repeat bg-center bg-cover p-2'>
        <div className='glass w-1/2 p-3 flex flex-col gap-5'>
            <h1 className='text-xl font-bold border-b-2 border-gray-400'>Manage Faculty</h1>
            {/* Form field */}
            <div className='flex justify-center'>
              <form onSubmit={handleSubmit} className='w-3/4 flex flex-col gap-2'>
                <div className='flex flex-col'>
                  <label className='text-sm font-medium' htmlFor="fcode">Faculty Code</label>
                  <input type="text" id='fcode' name='code' value={formData.fcode} onChange={handleChange} className='p-1 outline-none focus:ring-2 rounded-md w-1/2' />
                </div>
                <div className='flex flex-col'>
                  <label className='text-sm font-medium' htmlFor="fname">Faculty Name</label>
                  <input type="text" id='fname' name='name' value={formData.fname} onChange={handleChange} className='p-1 outline-none focus:ring-2 rounded-md' />
                </div>
                <button type='submit' className='bg-blue-950 p-1 w-full rounded-md mt-4 text-white font-bold hover:bg-blue-900'>Save</button>
              </form>
            </div>
              {message && <p className='text-green-500 font-medium'>{message}</p>}

            {/* Display inserted Data */}
            <div className='w-full flex justify-center'>
              <table className='w-full text-sm' >
                <thead>
                  <tr className='bg-gray-50'>
                    <th className='text-left py-1'>Code</th>
                    <th className='text-left py-1'>Name</th>
                    <th className='py-1'>Action</th>
                  </tr>
                </thead>

                <tbody className='divide-y-2 divide-gray-400'>
                  {
                    faculty.map((faculty)=>(
                      <tr className='odd:bg-gray-200' key={faculty.id}>
                        <td>{faculty.code}</td>
                        <td>{faculty.name}</td>
                        <td className='text-center'><button className='bg-blue-950 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-900'>Edit</button></td>
                      </tr>
                    ))
                  }
                </tbody>
                  
              </table>
            </div>
        </div>
    </div>
  )
}

