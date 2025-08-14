import React from "react";
import "./ExploreMenu.css";

import { menu_list } from "../../assets/assets";

const ExploreMenu = ({catagory,setcatagory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Menu</h1>
      <p className="explore-menu-text">Choose whatever you want to Choose</p>
      <div className="explore-menu-list">
  {menu_list.map((item, index) => {
    return (
      <div onClick={()=>setcatagory(prev=>prev===item.menu_name?"menu":item.menu_name)} key={index} className="explore-menu-list-items">
<img
  className={catagory === item.menu_name ? "active" : ""}
  src={item.menu_image}
  alt={item.menu_name}
/>

        <p>{item.menu_name}</p>
      </div>
    );
  })}
</div>

    </div>
  );
};

export default ExploreMenu;
