import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
const Home = () => {

  const [catagory,setcatagory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu  catagory={catagory} setcatagory={setcatagory}  />
    </div>
  )
}

export default Home
