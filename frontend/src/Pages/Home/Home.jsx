import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
// import AppDownlode from '../../components/AppDownlode/AppDownlode'
import Footer from '../../components/Footer/Footer'
import CuisinesPage from '../../components/Info/CuisinesPage'
const Home = () => {

  const [catagory,setcatagory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu  catagory={catagory} setcatagory={setcatagory}  />
      <FoodDisplay catagory={catagory}/>
      <CuisinesPage/>
      {/* <AppDownlode/> */}
      <Footer/>
    </div>
  )
}

export default Home
