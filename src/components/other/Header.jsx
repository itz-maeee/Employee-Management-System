import React, { useEffect, useState } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('User');

  useEffect(() => {
    // If props.data exists, prefer that
    if (props.data?.firstName) {
      setUsername(props.data.firstName);
    } else {
      // Fallback: get from localStorage
      const loggedIn = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
      if (loggedIn?.data?.firstName) {
        setUsername(loggedIn.data.firstName);
      } else if (loggedIn?.role === 'admin') {
        setUsername('Admin');
      }
    }
  }, [props.data]);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-lg font-medium text-white py-2 px-5 rounded-small'
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
