import Ctegories from '@/components/categories/Ctegories'
import Navbar from '@/components/header/Navbar'
import HeroSection from '@/components/heroSection/HeroSection'
import MostSearchCar from '@/components/mostSearchCar/MostSearchCar'
import React from 'react'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>   
         <Ctegories/> 
         <MostSearchCar/> 
    </div>
  )
}

export default Home
