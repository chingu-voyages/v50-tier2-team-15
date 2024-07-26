import { NavLink } from "react-router-dom";
import logo from "../assets/logo-purple.png";

import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
  navigate("/login");
};

  return (
    <header>
      <div className="flex items-center justify-center mb-8 mr-25 ml-25">
        <div className="ml-0 pl-8 pr-14">
          <NavLink to="/">
            <img className="w-[240px] h-[240px]" src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-14 ml-auto text-xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/foods">Our Foods</NavLink>
          <NavLink to="https://github.com/orgs/chingu-voyages/teams/v50-tier2-team-15">About</NavLink>
          <NavLink to="https://www.chingu.io/">Chingu</NavLink>
          <button className="text-darkOrange text-bold" onClick={goToLogin}>Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
