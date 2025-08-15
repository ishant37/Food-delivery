import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import FoodItem from "../Food-item/FoodItem";
// import FoodItem from "./FoodItem";

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display">
      {food_list.map((item) => (
        <FoodItem
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default FoodDisplay;
