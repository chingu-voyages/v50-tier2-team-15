import { useEffect, useState } from "react";
import AddTokens from "./AddTokens";
import { useSelector } from "react-redux";

const UserTop = () => {
  const [categories, setCategories] = useState({});
  const [restaurantCount, setRestaurantCount] = useState(0);
  const [dishCount, setDishCount] = useState(0);

  const { username, tokens, avatar } = useSelector((state) => state.auth.userInfo) || {};

  useEffect(() => {
    fetch("../../../public/fooddata.json")
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
      <div className="flex h-96 w-full gap-3 my-9 m-auto p-auto justify-center align-middle">
        <section className="bg-purple flex flex-col align-middle justify-center rounded-2xl py-5 flex-none w-[270px]">
          <img
            className="w-40 p-auto m-auto"
            src={avatar}
            alt="chicken avatar"
          />
          <h3 className="text-white text-2xl font-bold">{username}</h3>
          <p className="text-white text-lg font-normal">{tokens}</p>
          <div className="my-10 flex gap-5 justify-center text-lg">
            <AddTokens />
          </div>
        </section>
        <div>
          <div className="h-60 flex gap-3">
            <section className="bg-darkOrange rounded-xl ">
              <h4 className="text-4xl text-white font-bold pt-4 pb-20 px-6 text-left">
                Restaurants: {restaurantCount}
              </h4>
            </section>
            <section className="bg-darkRed rounded-xl">
              <h4 className="text-4xl text-white font-bold pt-4 pb-24 px-12 text-left">
                Dishes: {dishCount}
              </h4>
            </section>
          </div>
          <section className="bg-lightOrange rounded-xl mt-3 h-32">
            <h4 className="text-white text-3xl text-left font-bold pt-4 pb-14 px-6">
              The most delicious foods at your fingertips
            </h4>
          </section>
        </div>
      </div>
    </>
  );
};

export default UserTop;
