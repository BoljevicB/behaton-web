import React from 'react';
import data from '../../productdata.js'


const Prodcards = () => {
    const {productItems} = data;
    

  return (

    <div className='mx-auto max-w-screen-2xl '>
    <div className=" py-2 px-4 mb-4 flex items-center justify-center gap-8 md:py-4 lg:py-6 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12 mt-10">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Our Products</h2>

                <p className="max-w-screen-sm text-gray-500 md:block">This is a section of some simple filler text,
                    also known as placeholder text. It shares some characteristics of a real written text.</p>
            </div>
        </div>
        
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 justify-items-center mx-auto gap-4 px-10 ">

            {productItems.map((productItems) =>(

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
        <a href="#">
            <img className="rounded-t-lg " src={productItems.image}  alt="tile-image" />
        </a>
        <div className="p-5 ">
            <div className=' flex justify-between p-4'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productItems.name}</h5>
    
                <a href="#" className="inline-flex items-center text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                 <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            </div>
            <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">{productItems.productDescription}</p>
        </div>
        </div>
    ))}
    </div>
    </div>
  )
};

export default Prodcards