import React from 'react';
import logo from '../../images/ttt.png';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  const homescreen = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='w-full bg-black sm:h-40 flex  sm:flex-row items-center justify-between p-2 sm:p-14'>
        <div className='flex'>
          <img src={logo} className=' w-12 h-12 m-auto  sm:w-20 sm:h-20 hover:cursor-pointer' alt='logo' />
          <div className=" w-6  h-20 sm:w-10 sm:h-20 border-l border-yellow-700 ml-4"></div>
          <span className='text-white text-center m-auto  text-xl sm:text-3xl tracking-normal tracking-wider sm:tracking-widest'>STORIES</span>
        </div>
        <div className='btn mt-4 sm:mt-0'>
          <button className="bg-yellow-500 rounded-md px-4 py-4 w-full  m-auto sm:w-40  sm:h-20 text-xl sm:text-2xl font-bold hover:bg-yellow-600" onClick={homescreen}>
            Users
          </button>
        </div>
      </div>
    </div>
  );
};
