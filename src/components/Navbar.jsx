import { useState } from "react"; 
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo-purple.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { resetCart } from "../slices/cartSlice";
import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = ({ toggler }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false); 

  const logoutHandler = () => {
    try {
      dispatch(logout());
      dispatch(resetCart());
      console.log("Logged out!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <header>
      <div className="flex items-center justify-between px-8 py-3">
        <NavLink to="/">
          <img className="md:w-[160px] md:h-[160px] w-[120px] h-[120px]" src={logo} alt="Logo" />
        </NavLink>
        {/* Hamburger button */}
        <div className="md:hidden cursor-pointer z-20" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes size={24} /> // Close icon when menu is open
          ) : (
            <FaBars size={24} /> // Hamburger icon when menu is closed
          )}
        </div>
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col items-center justify-center gap-6 fixed inset-0 bg-white md:static md:flex md:flex-row md:gap-14 text-xl z-10`}
        >
          {userInfo ? (
            <NavLink to="/user" onClick={toggleMenu}>
              Dashboard
            </NavLink>
          ) : (
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          )}
          <div className="flex justify-center align-middle gap-1 text-purple">
            <FaShoppingCart className="mt-1" />
            {cartItems.length > 0 && (
              <div style={{ marginLeft: "5px" }}>
                {cartItems.reduce(
                  (accumulator, item) => accumulator + item.qty,
                  0
                )}
              </div>
            )}
          </div>
          <NavLink to="/foods" onClick={toggleMenu}>
            Our Foods
          </NavLink>
          <NavLink
            to="https://github.com/orgs/chingu-voyages/teams/v50-tier2-team-15"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <a href="#locations" onClick={toggleMenu}>
            Locations
          </a>
          {userInfo ? (
            <button
              className="text-darkOrange text-bold"
              onClick={() => {
                logoutHandler();
                toggleMenu();
              }}
            >
              Log Out
            </button>
          ) : (
            <button
              className="text-darkOrange text-bold"
              onClick={() => {
                toggler();
                toggleMenu();
              }}
            >
              Get Started
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  toggler: PropTypes.func.isRequired,
};

export default Navbar;
