import React from 'react'
import blogdata from '../../blogdata'
import Carousel from '../Carousel';

const Blog = () => {

  const {dataBlog} = blogdata;

  return (
    <>

<div className="flex justify-center pt-10 px-6">
      
        <div className="flex flex-col justify-center items-center md:pr-8 xl:pr-0 lg:max-w-lg">
          
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              Blog
              <br className="hidden md:block" />
              o dekorativnoj{' '}
              <span className="inline-block">
              betonskoj galanteriji
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Saznajte vise o umetnosti poplocavanja i tehnologiji ugradnje betonske galanterije.
            </p>
          </div>
          
        </div>
        
      </div>
    


    <div className="px-6 py-8 mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3  lg:max-w-screen-xl md:px-4 lg:px-8 lg:py-8">

    {dataBlog.map((dataBlog) => (
      
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={dataBlog.image}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            
            <a
              href="/"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {dataBlog.title}
            </a>
            <p className="mb-2 text-gray-700">
              {dataBlog.textPreview}
            </p>
            <a
              href="/"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Read more
            </a>

          </div>
        </div>
      
      ))}
    </div>



    
    </>
  )
};

export default Blog