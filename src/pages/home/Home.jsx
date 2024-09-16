import Ctegories from '@/components/categories/Ctegories'
import Navbar from '@/components/header/Navbar'
import HeroSection from '@/components/heroSection/HeroSection'
import React from 'react'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>   
         <Ctegories/>  
    </div>
  )
}

export default Home
