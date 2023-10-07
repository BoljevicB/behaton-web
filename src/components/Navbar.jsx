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
    <div className='flex justify-between items-center p-2 max-w-[1240px] mx-auto' >
        <div className='flex flex-row gap-1'><img src={Logo} alt='logo' className='w-8 h-8'/> <Link to="/"><h1 className='text-3xl font-bold mr-2'>BEHAMONT</h1></Link></div>
        <ul className='hidden md:flex text-xl font-medium ml-4'>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/'>Pocetna</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/products'>Proizvodi</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/services'>Usluge</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/references'>Reference</Link></li> 
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/blog'>Blog</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/about'>O nama</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/contact'>Kontakt</Link></li>
        </ul>

    <div onClick={handleNav} className='block md:hidden'>
        { nav ? <SlArrowLeft size={25}/> : <SlMenu size={25}/> }
        
    </div>
    <div className={ nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-[100] lg:hidden md:hidden' : 'fixed left-[-155%]' } >
    <h1 className='text-3xl font-bold m-6 py-2' >BEHAMONT</h1>
       
        <ul className='uppercase p-4 '>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/'>Pocetna</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/products'>Proizvodi</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/services'>Usluge</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/references'>Reference</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/blog'>Blog</Link></li> 
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/about'>O nama</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/contact'>Kontakt</Link></li> 
        </ul>
    </div>
    </div>
  )
}

export default Navbar