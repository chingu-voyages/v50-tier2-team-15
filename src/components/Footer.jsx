import logo from "../assets/logo-purple.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram, FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-between text-purple w-full font-para text-lg">
        <div className="flex justify-center gap-8 w-1/3">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaSquareInstagram /></a>
          <a href="#"><FaXTwitter /></a>
        </div>
        <div className="w-1/3 flex justify-center">
        <a href="#home"><img className="h-[150px] w-[150px]" src={logo} alt="Logo" /></a>
        </div>
        <ul className="flex justify-center gap-7 w-1/3">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#our-foods">Our Foods</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="https://github.com/orgs/chingu-voyages/teams/v50-tier2-team-15">
              Chingu
            </a>
          </li>
        </ul>
      </div>
      <div className="flex text-darkOrange justify-center pt-7">
      <p>Made with</p>
      <span className="text-red-600 pt-1 mx-2"><FaHeart /></span>
      <p>by Chingus</p>
      </div>
    </footer>
  );
};

export default Footer;
