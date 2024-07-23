import React from "react";
import { Icon } from "@iconify/react";
import diagonalArrowRightUpFill from "@iconify-icons/eva/diagonal-arrow-right-up-fill";
import categoriesLeft from "../../assets/categories-left.svg";
import categoriesRight from "../../assets/categories-right.svg";
import categoriesBackground from "../../assets/categories-background.svg";

const HomeCategories = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${categoriesBackground})`,
          backgroundRepeat: "no-repeat",
        }}
        className="pb-[200px] my-14 bg-center"
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold text-purple items-start mt-[100px]">
            Our Categories
          </h2>
          <span className="block center w-[16%] h-0.5 bg-darkRed mt-9 mx-auto"></span>
        </div>
        <div
          className="flex justify-between items-center mx-auto"
        //   style={{ maxWidth: "1200px" }}
        >
          <div className="flex-shrink-0 w-1/4 px-6">
            <img src={categoriesLeft} alt="Image of Steak" className="" />
          </div>
          <div className="flex-grow text-left px-8">
            <ul className="grid grid-cols-2 gap-10 text-2xl">
              <li className="flex justify-between items-center">
                <a
                  href="#bbq"
                  className="flex-grow text-darkGray border-b-2 border-darkRed"
                >
                  BBQ
                </a>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-darkRed -ml-6"
                />
              </li>
              <li className="flex justify-between items-center">
                <a
                  href="#chocolate"
                  className="flex-grow text-darkGray border-b-2 border-darkRed"
                >
                  Chocolate
                </a>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-darkRed -ml-6"
                />
              </li>
              <li className="flex justify-between items-center">
                <a
                  href="#bread"
                  className="flex-grow text-darkGray border-b-2 border-darkRed"
                >
                  Bread
                </a>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-darkRed -ml-6"
                />
              </li>
              <li className="flex justify-between items-center">
                <a
                  href="#desserts"
                  className="flex-grow text-darkGray border-b-2 border-darkRed"
                >
                  Desserts
                </a>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-darkRed -ml-6"
                />
              </li>
              <li className="flex justify-between items-center">
                <a
                  href="#burgers"
                  className="flex-grow text-darkGray border-b-2 border-darkRed"
                >
                  Burgers
                </a>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-darkRed -ml-6"
                />
              </li>
              <li className="flex justify-between items-center">
                <a
                  href="#drinks"
                  className="flex-grow text-darkGray border-b-2 border-darkRed"
                >
                  Drinks
                </a>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-darkRed -ml-6"
                />
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-1/4 px-6">
            <img src={categoriesRight} alt="Image of hamburger" className="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCategories;
