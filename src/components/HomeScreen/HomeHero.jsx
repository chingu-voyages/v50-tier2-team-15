import heroImage from "../../assets/HomeHero.svg";
import logoOrange from "../../assets/logo-orange.svg";
import { useNavigate } from "react-router-dom";


const HomeHero = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <section className="flex items-center justify-center mb-[150px] w-[100%]">
        <div className="w-1/2 flex justify-center">
          <img className="w-[65%]" src={heroImage} alt="plate of food" />
        </div>
        <div className="w-1/2 flex flex-col justify-end items-center">
          <div>
            <img
              className="w-[200px] -mb-12"
              src={logoOrange}
              alt="Orange logo"
            />
          </div>
          <h1 className="text-6xl font-bold text-center text-purple font-title mt-2">
            FlavorFinder
          </h1>
          <p className="text-xl text-center text-darkOrange mt-8 w-[50%]">
            Discover bold flavors and hidden culinary gems with FlavorFinder!
          </p>
          <div className="mt-7">
            <div className="mt-4">
              <button
                onClick={goToLogin}
                className="inline-block px-14 py-4 bg-darkOrange text-white rounded-full text-xl"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
