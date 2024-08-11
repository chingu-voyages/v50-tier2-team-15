import { Icon } from "@iconify/react";
import diagonalArrowRightUpFill from "@iconify-icons/eva/diagonal-arrow-right-up-fill";
import categoriesLeft from "../../assets/categories-left.svg";
import categoriesRight from "../../assets/categories-right.svg";
import categoriesBackground from "../../assets/categories-background.svg";
import { NavLink } from "react-router-dom"; // Import NavLink

const HomeCategories = () => {
  return (
    <>
<section
        style={{
          backgroundImage: 'none',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="md:bg-cover md:bg-center md:bg-[url('../../assets/categories-background.svg')] md:pb-[200px] my-14"
      >
        <div className="md:flex md:flex-col justify-center items-center">
          <h2 className="lg:text-5xl text-3xl font-bold text-purple items-start mt-[100px] mb-8">
            Our Categories
          </h2>
          <span className="hidden md:block center w-[16%] h-0.5 bg-darkRed mt-9 mx-auto"></span>
        </div>
        <div className="flex justify-between items-center mx-auto">
          <div className="flex-shrink-0 md:w-1/4 px-6 hidden md:block">
            <img src={categoriesLeft} alt="Image of Steak" className="" />
          </div>
          <div className="md:flex-grow text-center p-auto m-auto md:px-8">
            <ul className="md:grid md:grid-cols-2 md:gap-10 text-2xl">
              <li className="flex justify-between items-center py-4">
                <NavLink
                  to="/foods#bbqs"
                  className="flex-grow text-darkGray border-b-2 border-darkRed px-24"
                >
                  BBQ
                </NavLink>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-darkRed -ml-6"
                />
              </li>
              <li className="flex justify-between items-center py-4">
                <NavLink
                  to="/foods#chocolates"
                  className="flex-grow text-darkGray border-b-2 border-darkRed"
                >
                  Chocolate
                </NavLink>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-darkRed -ml-6"
                />
              </li>
              <li className="flex justify-between items-center py-4">
                <NavLink
                  to="/foods#breads"
                  className="flex-grow text-darkGray border-b-2 border-darkRed"
                >
                  Bread
                </NavLink>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-darkRed -ml-6"
                />
              </li>
              <li className="flex justify-between items-center py-4">
                <NavLink
                  to="/foods#desserts"
                  className="flex-grow text-darkGray border-b-2 border-darkRed"
                >
                  Desserts
                </NavLink>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-darkRed -ml-6"
                />
              </li>
              <li className="flex justify-between items-center py-4">
                <NavLink
                  to="/foods#burgers"
                  className="flex-grow text-darkGray border-b-2 border-darkRed"
                >
                  Burgers
                </NavLink>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-darkRed -ml-6"
                />
              </li>
              <li className="flex justify-between items-center py-4">
                <NavLink
                  to="/foods#drinks"
                  className="flex-grow text-darkGray border-b-2 border-darkRed"
                >
                  Drinks
                </NavLink>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-darkRed -ml-6"
                />
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0 md:w-1/4 px-6 hidden md:block">
            <img src={categoriesRight} alt="Image of hamburger" className="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCategories;
