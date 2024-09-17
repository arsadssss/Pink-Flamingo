import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Error = () => {
  return (
    <div className='w-full h-auto'>
      <Header />
      <div className='w-full h-auto flex justify-center items-center flex-col p-20'>
        <h1 className='text-3xl text-black font-extrabold'>404</h1>
        <p className='text-lg text-black font-semibold'>Page Not Found</p>
      </div>
      <Footer />
    </div>
  )
}

export default Error
