import homeBottom from "../../assets/home-bottom-image.svg";

const HomeBottom = () => {
  return (
    <>
      <section className="md:pt-40 pt-20 pb-20">
        <div className="md:flex justify-center items-center">
          <div className="md:w-1/4 md:text-left">
            <p className="text-2xl leading-10 text-darkGray">
              At FlavorFinder, we’re dedicated to exploring diverse culinary
              delights that tantalize your taste buds and celebrate the joy of
              food.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center pt-8 md:pt-0">
            <img src={homeBottom} alt="Explore" className="md:w-[90%]" />
          </div>
          <div className="md:w-1/4 md:ml-10 text-center pt-10 md:pt-0">
            <h2 className="md:text-4xl text-3xl font-bold leading-10" style={{ color: "#8B0000" }}>
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
