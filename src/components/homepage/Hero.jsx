import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://images.unsplash.com/photo-1515179314943-a93af721c8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-40"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center md:items-start lg:items-start lg:ml-52 h-full text-center p-4">
    <h1 className="text-5xl font-bold leading-tight mb-4">BEHAMONT</h1>
    <p className="text-center md:text-left lg:text-left text-lg text-gray-200 mb-8">Mi se bavimo proizvodnjom, <br/> projektovanjem i ugradnjom <br/> ekskluzivne betonske galanterije <br/> sa širokom paletom proizvoda.<br/> Našu gamu proizvoda čine: <br/> behaton ploče, ivičnjaci, kanalice, raster parkinzi. </p>
    <Link to="/contact" className="bg-white  text-gray-900 hover:bg-black hover:text-white py-2 px-6 rounded-lg border border-gray-400 text-lg font-semibold transition duration-300 transform hover:shadow-lg hover:border-gray-500">Contact Us</Link>
  </div>
</div>

  )
}

export default Hero