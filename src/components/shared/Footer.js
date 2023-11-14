import React from 'react'
import logo from '../../images/ttt.png'

export const Footer = () => {
  return (
        <div>
          <div className='w-full bg-black h-24 flex  sm:flex-row items-center justify-between p-2 sm:p-14'>
            <div className='flex'>
              <img src={logo} className='w-12 h-12 m-auto' alt='logo' />
              <div className="w-10 h-20 border-l border-yellow-700 ml-4"></div>
              <span className='text-white text-center m-auto text-md sm:text-3xl tracking-normal sm:tracking-widest'>Created With ❤ By Aman Hussain</span>
            </div>
           
          </div>
        </div>
  )
}
