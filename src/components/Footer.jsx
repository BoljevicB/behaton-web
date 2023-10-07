import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">

    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <Link to="/" className="hover:text-gray-900">Pocetna</Link>
    <Link to="/products" className="hover:text-gray-900">Proizvodi</Link>
    <Link to="/services" className="hover:text-gray-900">Usluge</Link>
    <Link to="/references" className="hover:text-gray-900" >Reference</Link>
    <Link to="/blog" className="hover:text-gray-900">Blog</Link>
    <Link to="/about" className="hover:text-gray-900">O nama</Link>
    <Link to="/contact" class="hover:text-gray-900">Kontakt</Link>
    </nav>
    
    <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
    </div>
    
    <ul className='text-center'>
                    <li className="pb-2">
                        <a className="text-gray-800" href="#">Adresa, 9999 Podgorica</a>
                    </li>
                    <li className="">
                        <a className="text-gray-800" href="#">behamont@mail.com</a>
                    </li>
                </ul>
    
    <p className="text-center text-gray-700 font-medium">&copy; 2023 Behamont Ltd. All rights reservered.</p>
    </footer>
  )
}

export default Footer


