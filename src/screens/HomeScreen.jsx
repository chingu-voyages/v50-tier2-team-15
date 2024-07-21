import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFoodData } from "../slices/foodDataApiSlice";
import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import FoodRibbon from "../components/FoodRibbon";
import FoodMenu from "../components/FoodMenu";
import { Icon } from "@iconify/react";
import diagonalArrowRightUpFill from "@iconify-icons/eva/diagonal-arrow-right-up-fill";
import heroImage from "../assets/HomeHero.svg";
import categoriesLeft from "../assets/categories-left.jpg";
import categoriesRight from "../assets/categories-right.jpg";
import Footer from "../components/Footer";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-[#FB8B24]">
      <Navbar />
      <section className="flex items-center justify-between py-10">
        <div className="w-1/4">
          <img src={heroImage} alt="Hero" className="" />
        </div>
        <div className="w-3/4   pr-4">
          <h1 className="text-5xl font-bold  text-center flex-col text-purple-900 mt-4">
            FlavorFinder
          </h1>
          <p className="text-xl text-center flex-col text-orange-600 mt-2">
            Discover bold flavors and hidden culinary gems with FlavorFinder!
          </p>
          <div className="mt-4">
            <div className="flex justify-end items-center space-x-4">
              <button className="bg-gray-300 rounded-full p-2">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <FoodRibbon onCategorySelect={setSelectedCategory} />
              <button className="bg-gray-300 rounded-full p-2">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4 ">
              <a
                href="your-link-url"
                className="inline-block px-6 py-2 bg-white text-orange-600 rounded-full"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 text-left">
        <h2
          className="text-3xl font-bold  items-start mx-10 mb-6"
          style={{ color: "#8B0000" }}
        >
          FlavorFinder Specialties
        </h2>
        <div className="flex justify-between items-center mx-4">
          <div className="w-1/4 ml-4">
            <img
              src="src/assets/specialties-left.png"
              alt="Specialty 1"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/2 text-left px-10">
            <p className="text-lg">
              Our menu doesn’t stop there. We offer a wide range of
              deliciousness!
            </p>
            <a href="#all" className="text-red-700 underline mt-4 block">
              View All!
            </a>
          </div>
          <div className="w-1/4 mr-4">
            <img
              src="src\assets\specialties-right.png"
              alt="Specialty 2"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      ;
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold mb-6" style={{ color: "#8B0000" }}>
          Our Categories
        </h2>
        <div
          className="flex justify-between items-center mx-auto"
          style={{ maxWidth: "1200px" }}
        >
          <div className="flex-shrink-0 w-1/4 px-4">
            <img src={categoriesLeft} alt="Image of Steak" className="" />
          </div>
          <div className="flex-grow text-left px-4">
            <ul className="grid grid-cols-2 gap-4 text-lg">
              <li className="flex justify-between items-center">
                <a
                  href="#bbq"
                  className="flex-grow text-black border-b-2 border-red-700"
                >
                  BBQ
                </a>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-red-700"
                />
              </li>
              <li className="flex justify-between items-center">
                <a
                  href="#chocolate"
                  className="flex-grow text-black border-b-2 border-red-700"
                >
                  Chocolate
                </a>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-red-700"
                />
              </li>
              <li className="flex justify-between items-center">
                <a
                  href="#bread"
                  className="flex-grow text-black border-b-2 border-red-700"
                >
                  Bread
                </a>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-red-700"
                />
              </li>
              <li className="flex justify-between items-center">
                <a
                  href="#desserts"
                  className="flex-grow text-black border-b-2 border-red-700"
                >
                  Desserts
                </a>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-red-700"
                />
              </li>
              <li className="flex justify-between items-center">
                <a
                  href="#burgers"
                  className="flex-grow text-black border-b-2 border-red-700"
                >
                  Burgers
                </a>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-red-700"
                />
              </li>
              <li className="flex justify-between items-center">
                <a
                  href="#drinks"
                  className="flex-grow text-black border-b-2 border-red-700"
                >
                  Drinks
                </a>
                <Icon
                  icon={diagonalArrowRightUpFill}
                  className="text-red-700"
                />
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-1/4 px-4">
            <img src={categoriesRight} alt="Image of hamburger" className="" />
          </div>
        </div>
      </section>
      <section className="text-center py-10">
        <h2
          className="text-3xl font-bold mb-6 relative inline-block"
          style={{ color: "#8B0000" }}
        >
          Our Locations
        </h2>
        <span className="block w-16 h-1 bg-[#8B0000] mt-2 mx-auto"></span>
        <div className="map-container mx-auto w-2/3 h-64">
          <img
            src="src/assets/image 3.jpg"
            alt="Map"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="py-10">
        <div className="flex justify-center items-center">
          <div className="w-1/4 text-left">
            <p className="text-lg font-bold">
              At FlavorFinder, we’re dedicated to exploring diverse culinary
              delights that tantalize your taste buds and celebrate the joy of
              food.
            </p>
          </div>
          <div className="w-1/4 flex justify-center">
            <img
              src="src/assets/Group 20.jpg"
              alt="Explore"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/4 ml-10 text-left">
            <h2 className="text-2xl font-bold" style={{ color: "#8B0000" }}>
              What are you waiting for?
            </h2>

            <a
              href="your-link-url"
              className="inline-block px-6 py-2 bg-white text-orange-600 rounded-full mt-4"
            >
              Explore Here!
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomeScreen;
