import React, {useState} from 'react'
import {SlMenu, SlArrowLeft} from 'react-icons/sl';
import {Link} from 'react-router-dom'
import Logo from '../imgs/logo.png'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto' >
        <div className='flex flex-row gap-1'><img src={Logo} alt='logo' className='w-8 h-8'/> <h1 className='w-full text-3xl font-bold mr-2'>BEHAMONT</h1></div>
        <ul className='hidden md:flex text-xl font-medium ml-4'>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/'>Home</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/products'>Products</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/services'>Services</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/references'>Reference</Link></li> 
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/blog'>Blog</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/about'>About</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/contact'>Contact</Link></li>
        </ul>

    <div onClick={handleNav} className='block md:hidden'>
        { nav ? <SlArrowLeft size={25}/> : <SlMenu size={25}/> }
        
    </div>
    <div className={ nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-[100] lg:hidden md:hidden' : 'fixed left-[-155%]' } >
    <h1 className='text-3xl font-bold m-6 py-2' >BEHAMONT</h1>
       
        <ul className='uppercase p-4 '>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/'>Home</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/products'>Products</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/services'>Services</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/references'>Reference</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/blog'>Blog</Link></li> 
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/about'>About</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/contact'>Contact</Link></li> 
        </ul>
    </div>
    </div>
  )
}

export default Navbar