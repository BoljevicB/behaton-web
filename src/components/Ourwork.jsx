import React from 'react'

const Ourwork = () => {
  return (
    <section>
    <div className="relative items-center w-full px-4 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
    
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-4">
        <div className="lg:pt-6">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 lg:text-5xl lg:max-w-7xl">
                  Who are we  <br className="hidden lg:block"/>
                  and what we do
                </h1>
                </div>

            <div className="p-6">
                <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://images.unsplash.com/photo-1579691792591-9a0736cc7080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="blog"/>
                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-2xl">Producing tiles</h1>
                <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="mt-4">
                    <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
            <div className="p-6">
                <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://images.unsplash.com/photo-1529267372240-e9a679a81f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="blog"/>
                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-2xl">Preparing work</h1>
                <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="mt-4">
                    <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
            <div className="p-6">
                <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://images.unsplash.com/photo-1633983224634-2244a7bef3b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="blog"/>
                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-2xl">Consult clients</h1>
                <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="mt-4">
                    <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Ourwork