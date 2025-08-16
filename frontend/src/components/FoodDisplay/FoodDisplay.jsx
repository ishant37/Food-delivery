import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from '../Food-item/FoodItem'


const FoodDisplay = ({catagory}) => {
  const { food_list, cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const filteredList = catagory && catagory !== "All" && catagory !== "menu"
    ? food_list.filter(item => item.category === catagory)
    : food_list;
  return (
    <div className='food-display' id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredList.map((item, index) => (
          <FoodItem
            key={item._id || index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            quantity={cartItems[item._id] || 0}
            addToCart={() => addToCart(item._id)}
            removeFromCart={() => removeFromCart(item._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay