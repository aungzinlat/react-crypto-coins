import React, { useContext, useState } from "react";
import ThemeToggleComponents from "./ThemeToggle.components";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { UserContext } from "../contexts/AuthContext";

const NavBarComponents = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className=" rounded-div flex justify-between items-center h-20 font-bold">
      <div>
        <Link to="/">
          <h1 className="text-2xl">Cryptobase</h1>
        </Link>
      </div>
      <div className=" hidden md:block">
        <ThemeToggleComponents />
      </div>{" "}
      {user?.email ? (
        <div className=" hidden md:block">
          <Link className=" p-4 hover:text-accent" to={"/account"}>
            Account
          </Link>
          <button
            onClick={handleSignOut}
            className=" border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className=" hidden md:block">
          <Link to={"/signin"} className=" p-4 hover:text-accent">
            Sign In
          </Link>
          <Link
            to={"/signup"}
            className=" bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            Sign Up
          </Link>
        </div>
      )}
      {/* Menu Icon */}
      <div onClick={handleNav} className=" block md:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? " flex flex-col fixed md:hidden left-0 top-20 items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className=" w-full p-4">
          <li className=" border-b py-6">
            <Link>Home</Link>
          </li>{" "}
          <li className=" border-b py-6">
            <Link to={'/account'}>Account</Link>
          </li>{" "}
          <li className=" py-6">
            <ThemeToggleComponents />
          </li>
        </ul>
        <div className=" flex flex-col w-full p-4">
          <Link to={"/signin"}>
            <button className=" w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl">
              Sign In
            </button>
          </Link>

          <Link to={"/signup"}>
            <button className=" w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarComponents;
