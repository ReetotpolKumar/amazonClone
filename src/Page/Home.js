import React from 'react'
import Banner from '../Attom/Banner/Banner'
import Navbar from '../Component/Navbar/Navbar'
import Product from '../Component/Product/Product'
import TodaysDeals from '../Component/TodaysDeal/TodaysDeals'
import Footer from '../Component/Footer/Footter'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Product/>
      <TodaysDeals/>
      
      <Footer/>
    </div>
  )
}

export default Home
