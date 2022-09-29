import React from 'react'
import logo from 'images/haven-logo.jpg'

export default function Navbar() {
  return (
    <div>
        <nav className='bg-white h-16  sticky top-0 w-full p-2 '>
            <ul className='flex justify-evenly text-black font-Syne font-bold text-xl w-full	 '>
                <li ><img className='h-7 pl-2 ' src={logo} alt="" /> </li>
                <li ><a href="#"> About</a> </li>
                <li ><a href="#"> Online Store</a> </li>
                <li ><a href="#"> Contact Us</a> </li>
                
            </ul>
        </nav>
    </div>
  )
}

