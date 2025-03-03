import React from 'react'
import logo from '../../assets/imgs/logo.png'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
  <div className=' text-white bg-[#263b74fe] w-full  h-[80px]   fixed top-0 left-0 right-0 z-10'>
   <div className='w-[1336px] mx-auto flex justify-between items-center pt-2'>
    <div className="logo flex gap-2">
      <img className='w-[20px] h-[20px]' src={logo} alt="" />
      <h1 className='font-bold'>Elite Estates</h1>
    </div>
    <ul className='flex gap-4 font-semibold'>
      <li> 
      <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/aboutus'>  About Us</NavLink>
      </li>
      <li>
        <NavLink to='/services'>Services</NavLink>
      </li>
      <li>
        <NavLink to='/properities'>Properities</NavLink>
      </li>
      <li>
      <NavLink to='/agents'>Agents</NavLink>
      </li>
      <li>
       <NavLink to='/login'>Login</NavLink>
      </li>
    </ul>

{/* <Link to=''>mmm</Link> */}
    <button className='w-fit px-3 py-2 border-1 rounded-xs border-white cursor-pointer'>
        Find A House
    </button>
  </div>
  </div>
    </>
  )
}

