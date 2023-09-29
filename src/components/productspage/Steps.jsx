import React from 'react'
import Choice from '../../imgs/choice.png'
import Consult from '../../imgs/consult.png'
import Construct from '../../imgs/construct.png'

const Steps = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-4 px-4 sm:px-6 md:my-8 lg:my-8 lg:px-8 flex flex-col justify-between">

    <div className="text-center">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            STEPS
        </p>
        <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
            How it Works?
        </h3>

    </div>

    <div className="mt-20">
        <ul className="grid gap-5 md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

            <li className=" bg-gray-100 p-5 pb-10 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 relative top-0 -mt-16">
                        <img src={Consult}
                            className="flex items-center justify-center h-20 w-20 rounded-full text-white border-4 border-white text-xl font-semibold"
                        />
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg leading-6 font-semibold text-gray-900">Consult</h4>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </li>
            <li className=" bg-gray-100 p-5 pb-10 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 relative top-0 -mt-16">
                        <img src={Choice}
                            className="flex items-center justify-center h-20 w-20 rounded-full text-white border-4 border-white text-xl font-semibold"
                            />
                        
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg leading-6 font-semibold text-gray-900">Make Choice</h4>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </li>
            <li className=" bg-gray-100 p-5 pb-10 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 relative top-0 -mt-16">
                        <img src={Construct}
                            className="flex items-center justify-center h-20 w-20 rounded-full text-white border-4 border-white text-xl font-semibold"/>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg leading-6 font-semibold text-gray-900">We Construct</h4>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </li>

        </ul>
    </div>

</div>
  )
}

export default Steps