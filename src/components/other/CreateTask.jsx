import React, { useState, useContext, useEffect } from 'react';
import {  AuthContext } from '../../context/AuthProvider.jsx'


const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

//   console.log("CreateTask render — userData:", userData);

  const [title, setTitle] = useState('');
  useEffect(() => {
  console.log("userData changed in CreateTask:", userData); // 🔍 log 2
}, [userData]);


  const [serverDescription, setServerDescription] = useState('');
  const [date, setDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
  e.preventDefault();

  if (!userData?.employees) {
    console.log('userData is not ready yet');
    return;
  }

  const newTaskObj = {
    title,
    serverDescription,
    date,
    category,
    assignTo,
    ActiveXObject: false,
    newTask: true,
    completed: false,
    failed: true
  };

  // 🔁 Create a new array immutably
  const updatedEmployees = userData.employees.map(emp => {
  if (emp.firstName === assignTo) {
    return {
      ...emp,
      tasks: [...emp.tasks, newTaskObj],
      taskStats: {
        ...emp.taskStats,
        new: emp.taskStats.new + 1,
        total: emp.taskStats.total + 1
      }
    };
  }
  return emp;
});

setUserData({ employees: updatedEmployees });


  // ✅ Only update if data actually changed
  const oldDataStr = JSON.stringify(userData.employees);
  const newDataStr = JSON.stringify(updatedEmployees);

  if (oldDataStr !== newDataStr) {
    setUserData({ employees: updatedEmployees });
    console.log("Updated employee list:", updatedEmployees);
  }

  // Reset form
  setTitle('');
  setServerDescription('');
  setDate('');
  setAssignTo('');
  setCategory('');
};


  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Make UI Design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={serverDescription}
            onChange={(e) => setServerDescription(e.target.value)}
            className="w-full h-44 text-sm py-1 px-2 rounded outline-none bg-transparent border border-gray-400 mb-4"
          />
        </div>
        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
