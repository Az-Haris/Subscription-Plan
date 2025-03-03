import "../index.css";
import Logo from "./Logo";
import ThemeToggle from "../utils/ThemeToggle";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar py-2 md:py-3 font-medium  shadow-xl fixed top-0 w-full z-10 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto px-3 flex items-center justify-between">
        <Logo></Logo>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700 dark:text-gray-300 uppercase">
          <NavLink to={"/"} className="flex flex-col items-center gap-1">
            <p>Home</p>{" "}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink
            to={"/about"}
            className="flex flex-col items-center gap-1"
          >
            <p>About Us</p>{" "}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
            <p>Contact Us</p>{" "}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          
      
        </ul>

        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
};

export default Navbar;
