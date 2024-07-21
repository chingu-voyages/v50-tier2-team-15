import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <header>
      <div className=" flex items-center justify-center mb-8 mr-25 ml-25">
        <div className="ml-0 pl-8 pr-14">
        <a>logo</a>
        </div>
        <div className="flex items-center justify-center space-x-8 ml-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/foods">Our Foods</NavLink>
          <NavLink to="https://github.com/orgs/chingu-voyages/teams/v50-tier2-team-15">About</NavLink>
          <NavLink to="https://www.chingu.io/">Chingu</NavLink>
          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;