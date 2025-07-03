import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider.jsx';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const employees = userData?.employees || [];

  return (
    <div className='bg-[#1C1C1C] p-5 rounded mt-5'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>

      <div className='overflow-auto'>
        {employees.map((elem, idx) => (
          <div key={idx} className='bg-black-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-500'>{elem.taskStats.new}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-300'>{elem.taskStats.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskStats.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskStats.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
