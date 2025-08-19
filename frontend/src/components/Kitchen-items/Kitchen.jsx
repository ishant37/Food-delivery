import React, { useState } from 'react'
import Explorekitchen from './Explore/Explorekitchen'
import FoodDisplayKitchen from './FoodDisplay/FoodDisplaykitchen'

const Kitchen = () => {
      const [catagory,setcatagory]=useState("All")
          
  return (
    <div>
      <Explorekitchen catagory={catagory} setcatagory={setcatagory}/>
      <FoodDisplayKitchen catagory={catagory} />
    </div>
  )
}

export default Kitchen
