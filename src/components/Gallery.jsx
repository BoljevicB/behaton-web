import React from 'react'

const Gallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://images.unsplash.com/photo-1542372222-f1e6e40d054e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://images.unsplash.com/photo-1580398562556-d33329a0f29b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://images.unsplash.com/photo-1599031628962-1f6755a3b1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1042&q=80" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://images.unsplash.com/photo-1520000341792-2cbd0b8098a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://images.unsplash.com/flagged/photo-1622363405079-da46534ce5ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://images.unsplash.com/photo-1665625724520-bcad39e61735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" />
      </div>
    </div>
  </div>
</div>
  )
}

export default Gallery