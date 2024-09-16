import React from 'react'
import SearchBar from './SearchBar'

function HeroSection() {
  return (
    <div>
      <div className="main bg-[#eef0fe] md:h-[26rem] h-[27rem] flex flex-col justify-center items-center">
        {/* top */}
        <div className="div">
            <h1 className='text-lg pb-4 font-semibold hover:scale-110 transition-all'>Find Cars for sale and for rent near you </h1>
        </div>
        {/* middle */}
        <div className="div hover:scale-110 transition-all">
            <h className='md:text-6xl text-3xl font-bold leading-8 '>Find Your Dream Cars</h>
        </div>
        {/* button */}
        <div className="searchbar">
            <SearchBar/>            
        </div>
      </div>
      <div className="img flex justify-center relative bottom-8">
        <img className='h-[25rem] rounded-t-3xl' src="/car.png" alt="img" />
      </div>
    
         
    </div>
  )
}

export default HeroSection
