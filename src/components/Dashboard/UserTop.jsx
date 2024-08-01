import chickenAvatar from "../../assets/chicken-avatar.svg";
import { useEffect, useState } from "react";

const UserTop = () => {
  const [categories, setCategories] = useState({});
  const [restaurantCount, setRestaurantCount] = useState(0);
  const [dishCount, setDishCount] = useState(0);

  useEffect(() => {
    fetch("../../../public/fooddata.json") // Adjust the path if necessary
      .then((response) => response.json())
      .then((foodData) => {
        setCategories(foodData);

        const restaurantSet = new Set();
        const dishSet = new Set();

        Object.keys(foodData).forEach((categoryKey) => {
          if (Array.isArray(foodData[categoryKey])) {
            foodData[categoryKey].forEach((item) => {
              restaurantSet.add(item.name);
              dishSet.add(item.dsc);
            });
          }
        });

        setRestaurantCount(restaurantSet.size);
        setDishCount(dishSet.size);
      })
      .catch((error) => console.error("Error fetching the JSON data:", error));
  }, []);

  return (
    <>
      <section className="bg-purple">
        <img src={chickenAvatar} alt="chicken avatar" />
      </section>
      <section>
        <div>
          <h1>Restaurant and Dish Information</h1>
          <p>Number of Restaurants: {restaurantCount}</p>
          <p>Number of Dishes: {dishCount}</p>
        </div>
      </section>
      <section></section>
      <section></section>
    </>
  );
};

export default UserTop;
