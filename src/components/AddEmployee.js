import React from 'react';

import EmployeeService from '../services/EmployeeService';

import { useState } from 'react';

const AddEmployee = () => {

    const [employee, setemployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:""
    });

    const handleChange = (e) => {

        const value = e.target.value;

        setemployee({...employee , [e.target.name] : value});
    }

    const saveEmployee = (e) => {

       // e.preventDefault();

       
        
        EmployeeService.saveEmployee(employee)
        .then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })

    }



  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className=' font-thin text-2xl tracking-wider'>
                 <h1>
                    Add New Employee
                 </h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4'>
                <label className='block text-gray-600 text-sm font-normal'> First name</label>
                <input type='text'  name="firstName" onChange={(e) => handleChange(e)} value={employee.firstName} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4'>
                <label className='block text-gray-600 text-sm font-normal'> Last name</label>
                <input type='text' name="lastName"  value={employee.lastName} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4'>
                <label className='block text-gray-600 text-sm font-normal'> Email</label>
                <input type='email'  name="emailId" onChange={(e) => handleChange(e)}  value={employee.emailId} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full  my-4 space-x-4 pt-4'>
                <button onClick={saveEmployee} className='rounded text-white  font-semibold bg-green-600 py-2 px-2 hover:bg-green-700'>
                    Save
                </button>
                <button className='rounded text-white  font-semibold bg-red-600 py-2 px-2 hover:bg-red-700'>
                    Clear
                </button>
            </div>

        </div>

    </div>
  )
}

export default AddEmployee