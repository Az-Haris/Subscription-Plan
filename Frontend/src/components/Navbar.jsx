import "../index.css";
import Logo from "./Logo";
import ThemeToggle from "../utils/ThemeToggle";
import { NavLink } from "react-router";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="navbar py-2 md:py-3 font-medium  shadow-xl fixed top-0 w-full z-10 bg-background dark:bg-background-dark">
      <div className="container mx-auto px-3 flex items-center justify-between">
        <Logo></Logo>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700 dark:text-gray-300 uppercase">
          <NavLink to={"/"} className="flex flex-col items-center gap-1">
            <p>Home</p>{" "}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to={"/ott-plans"} className="flex flex-col items-center gap-1">
            <p>OTT Plans</p>{" "}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to={"/brilliant-recharge"} className="flex flex-col items-center gap-1">
            <p>Brilliant Recharge</p>{" "}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to={"/about"} className="flex flex-col items-center gap-1">
            <p>About Us</p>{" "}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle></ThemeToggle>
          <BiMenuAltRight
            onClick={() => setVisible(true)}
            className="text-4xl sm:text-5xl cursor-pointer sm:hidden"
          />
        </div>



        {/* Sidebar menu for small screen */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white dark:bg-gray-800 transition-all z-10 min-h-screen ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="text-gray-600 dark:text-gray-300 mt-5 px-3">
            <div className="flex items-center justify-between border-b-2 pb-5 mb-10">
              <Logo></Logo>
              <button onClick={() => setVisible(false)}>
                <RxCross1 className="text-2xl text-red-500 font-bold cursor-pointer" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <NavLink
                onClick={() => setVisible(false)}
                to={"/"}
                className="py-2 pl-5 border"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                to={"/ott-plans"}
                className="py-2 pl-5 border"
              >
                OTT Plans
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                to={"/brilliant-recharge"}
                className="py-2 pl-5 border"
              >
                Brilliant Recharge
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                to={"/about"}
                className="py-2 pl-5 border"
              >
                About Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
