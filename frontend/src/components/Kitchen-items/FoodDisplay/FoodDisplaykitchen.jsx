import React, { useContext } from 'react';
import { kitchen_items } from '../../../assets/assets';
import FoodItem from '../Food-Items/FoodItems';
import { StoreContext } from '../../Context/StoreContext';

const FoodDisplayKitchen = ({ catagory }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const filteredList = catagory && catagory !== "All" && catagory !== "menu"
    ? kitchen_items.filter(item => (item.catagory || item.category) === catagory)
    : kitchen_items;
  return (
    <div className='food-display' id="food-display">
      <h2>Kitchen Items</h2>
      <div className="food-display-list">
        {filteredList.map((item, index) => {
          const itemId = item._id || item.id;
          return (
            <FoodItem
              key={itemId || index}
              id={itemId}
              name={item.name}
              description={item.weight || item.description || ''}
              price={item.price}
              image={item.image}
              quantity={cartItems[itemId] || 0}
              addToCart={() => addToCart(itemId)}
              removeFromCart={() => removeFromCart(itemId)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplayKitchen;