import React from 'react'
import { Link } from 'react-router-dom'

const Homereferences = () => {
  return (
    <div className="px-4 pt-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-12 lg:py-12">
      <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Our Work</h2>

                <p className="hidden max-w-screen-sm text-gray-500 md:block">This is a section of some simple filler text,
                    also known as placeholder text. It shares some characteristics of a real written text.</p>
            </div>

            <Link to="/references"
                className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More</Link>
        </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-lg">
            <img
              className="object-cover object-center transition duration-200 hover:scale-110 w-full h-56 md:h-64 xl:h-80"
              src="https://arming.rs/uploads/2016/02/15.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-20">
              <p className="text-sm font-medium tracking-wide text-white">
                Sed ut perspiciatis unde omnis iste natus error
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-lg">
            <img
              className="object-cover object-center transition duration-200 hover:scale-110 w-full h-56 md:h-64 xl:h-80"
              src="http://behaton-ruma.com/wp-content/gallery/galerija-radova-1/IM006568.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-20">
              <p className="text-sm font-medium tracking-wide text-white">
                Leverage agile frameworks to provide a robust synopsis
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden  bg-gray-100 rounded-lg shadow-lg ">
            <img
              className="object-cover object-center transition duration-200 hover:scale-110 w-full h-56 md:h-64 xl:h-80"
              src="http://behaton-ruma.com/wp-content/gallery/galerija-radova-1/IM006473.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-20">
              <p className="text-sm font-medium tracking-wide text-white">
                Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-lg ">
            <img
              className="object-cover object-center transition duration-200 hover:scale-110 w-full h-56 md:h-64 xl:h-80"
              src="https://www.behaton-steingarten.com/zips/betonske-ploce-smederevo-beograd-zrenjanin-i-velika-plana-gallery/bigs/IMG-0288ba6515774ac9cd11c12b66b2fa48-V.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-20">
              <p className="text-sm font-medium tracking-wide text-white">
                Rough pomfret lemon shark plownose chimaera
              </p>
            </div>
          </div>
        </a>
      </div>
      
    </div>
  )
}

export default Homereferences
