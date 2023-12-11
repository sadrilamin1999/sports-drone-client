"use client";

import { useState } from "react";
import { IoIosClose, IoIosMenu, IoMdFootball } from "react-icons/io";
import Buttton from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  let Links = [
    { name: "Home", link: "/" },
    { name: "Product", link: "/" },
    { name: "About", link: "/" },
    { name: "News", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const toggleOpen = () => {
    setOpen(!open); // Toggles the state between true and false
  };

  return (
    <header className="h-20 w-full fixed top-0 left-0 shadow-md">
      <div className=" h-full w-full md:flex items-center justify-between bg-white py-4 md:px-10">
        <div className="font-bold flex text-2xl cursor-pointer items-center text-gray-800">
          <sapn className="text-3xl text-indigo-800 mr-1 pt-2">
            <IoMdFootball />
          </sapn>
          Sports Drone
        </div>
        <div className="md:hidden absolute right-8 top-6 cursor-pointer text-3xl">
          <button onClick={toggleOpen}>
            {open ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 pl-7 md:pl-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto gap-5 uppercase transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-490px opacity-0 md:opacity-100"
          }`}
        >
          {Links.map((Link) => {
            return (
              <li className="text-xs md:my-0 my-7" key={Link.name}>
                <a href={Link.link}>{Link.name}</a>
              </li>
            );
          })}
          <Buttton text="Register" />
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
