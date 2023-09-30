import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">

    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <Link to="/" className="hover:text-gray-900">Home</Link>
    <Link to="/products" className="hover:text-[#1A5DAD]">Products</Link>
    <Link to="/services" className="hover:text-[#1A5DAD]">Services</Link>
    <Link to="/references" className="hover:text-[#1A5DAD]" >Reference</Link>
        <a className="hover:text-gray-900" href="#">Blog</a>
        <a className="hover:text-gray-900" href="#">About</a>
        <a class="hover:text-gray-900" href="#">Contact</a>
    </nav>
    
    <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    
    <ul className='text-center'>
                    <li className="my-2">
                        <a className="text-gray-800" href="#">XXX XXXX, Floor 4 San Francisco, CA</a>
                    </li>
                    <li className="my-2">
                        <a className="text-gray-800" href="#">contact@company.com</a>
                    </li>
                </ul>
    
    <p className="text-center text-gray-700 font-medium">&copy; 2023 Company Ltd. All rights reservered.</p>
    </footer>
  )
}

export default Footer


