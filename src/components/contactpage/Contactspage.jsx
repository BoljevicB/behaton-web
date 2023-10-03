import React from 'react'

const Contactspage = () => {
  return (
    <div className="md:h-screen lg:h-screen md:flex">
	<img src='https://images.unsplash.com/photo-1632316826599-6ebd57e890ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
		className="relative overflow-hidden md:flex  lg:rounded-md w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden"
	/>
    
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
    <div className="flex items-center justify-start p-4">
  <div className="mx-auto w-full max-w-lg">
    <h1 className="text-4xl font-medium"> Call us on <span className='text-blue-500'>+123456789</span> <br/> or fill in the form to start a conversation</h1>
    
    <form action="https://api.web3forms.com/submit" className="mt-10">
    
    {/* <!-- This is a working contact form. 
         Get your free access key from: https://web3forms.com/  --> */}

      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
        </div>
      </div>
      <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
    </form>
  </div>
</div>
</div>

</div>
  )
}

export default Contactspage