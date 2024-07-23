import React from "react";
import homeBottom from "../../assets/home-bottom-image.svg";

const HomeBottom = () => {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="flex justify-center items-center">
          <div className="w-1/4 text-left">
            <p className="text-2xl leading-10 text-darkGray">
              At FlavorFinder, we’re dedicated to exploring diverse culinary
              delights that tantalize your taste buds and celebrate the joy of
              food.
            </p>
          </div>
          <div className="w-1/3 flex justify-center">
            <img src={homeBottom} alt="Explore" className="w-[90%]" />
          </div>
          <div className="w-1/4 ml-10 text-center">
            <h2 className="text-4xl font-bold leading-10" style={{ color: "#8B0000" }}>
              What are you waiting for?
            </h2>

            <a
              href="your-link-url"
              className="inline-block px-14 py-4 bg-white text-darkOrange text-xl rounded-full mt-14 font-bold"
            >
              Explore Here!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBottom;
