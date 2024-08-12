import heroImage from "../../assets/HomeHero.svg";
import logoOrange from "../../assets/logo-orange.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAsGuest } from "../../slices/authSlice"; // Adjust the import path as needed
import LoginModal from "../LoginModal";
import { useState } from "react";

const HomeHero = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleLoginModal = () => {
    setShowLoginModal(prevState => !prevState);
  };

  const signInAsGuestHandler = () => {
    dispatch(loginAsGuest());
    navigate("/user");
  };

  return (
    <>
      <section className="flex items-center justify-center mb-[150px] w-full max-w-[100%] mx-auto">
        <div className="hidden md:flex w-1/2 md:justify-between justify-center">
          <img className="w-[60%]" src={heroImage} alt="plate of food" />
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2">
          <div className="md:hidden mb-4">
            <img
              className="w-[200px] -mb-12"
              src={logoOrange}
              alt="Orange logo"
            />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-center text-purple font-title mt-2">
            FlavorFinder
          </h1>
          <p className="text-lg lg:text-xl text-center text-darkOrange mt-8 w-[90%] lg:w-[50%]">
            Discover bold flavors and hidden culinary gems with FlavorFinder!
          </p>
          <div className="mt-7">
            <div className="mt-4">
              <button
                onClick={toggleLoginModal}
                className="inline-block px-8 py-3 lg:px-14 lg:py-4 bg-darkOrange text-white rounded-full text-lg lg:text-xl"
              >
                Get Started
              </button>
            </div>
            <div className="mt-4">
              <button
                onClick={signInAsGuestHandler}
                className="inline-block px-8 py-3 lg:px-14 lg:py-4 bg-lightGray text-darkOrange rounded-full text-lg lg:text-xl"
              >
                Sign in as Guest
              </button>
            </div>
          </div>
        </div>
      </section>
      {showLoginModal && <LoginModal toggler={toggleLoginModal} />}
    </>
  );
};

export default HomeHero;
