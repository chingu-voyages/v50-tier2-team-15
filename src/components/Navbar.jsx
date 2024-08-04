import { NavLink } from "react-router-dom";
import logo from "../assets/logo-purple.png";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../slices/authSlice";
import { resetCart } from "../slices/cartSlice";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToLogin = () => {
    navigate("/login");
  };

    const logoutHandler = () => {
    try {
      dispatch(logout());
      dispatch(resetCart());
      console.log("Logged out!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header>
      <div className="flex items-center justify-center mb-8 mr-25 ml-25">
        <div className="ml-0 pl-8 pr-14">
          <NavLink to="/">
            <img className="w-[240px] h-[240px]" src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-14 ml-auto text-xl">
          {userInfo ? <NavLink to="/user">Dashboard</NavLink> : <NavLink to="/">Home</NavLink>}
          <NavLink to="/foods">Our Foods</NavLink>
          <NavLink to="https://github.com/orgs/chingu-voyages/teams/v50-tier2-team-15">
            About
          </NavLink>
          <NavLink to="#locations">Locations</NavLink>
          {userInfo ? <button className="text-darkOrange text-bold" onClick={logoutHandler}>Log Out</button> : <button className="text-darkOrange text-bold" onClick={goToLogin}>
            Get Started
          </button>}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
