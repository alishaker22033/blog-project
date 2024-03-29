import React from 'react'
import { images } from '../constants'

const NavItem = () => {
return  <li className='relative group'>
<a href="/" className='px-4 py-2 '>
  Home
  </a>
  <span className='text-blue-500 absolute translate-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>
    /
  </span>
</li>
}

const Header = () => {
  return (
    <section>
      <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
        <div>
          <img src={images.Logo} alt="logo" /> 
        </div>
        <div className='flex gap-x-9 items-center'>
          <ul className='flex gap-x-5 font-semibold'>
           
            <li>
              <a href="/">Aricles</a>
            </li>
            <li>
              <a href="/">Pages</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Faq</a>
            </li>
          </ul>
          <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white hover:text-white transition-all duration-300'>Sign in</button>
        </div>
      </header>
    </section>
  )
}

export default Header