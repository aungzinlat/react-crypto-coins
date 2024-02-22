import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeToggleComponents = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      {theme === "dark" ? (
        <div
          className=" flex items-center cursor-pointer"
          onClick={handleToggle}
        >
          <HiSun className=" text-primary text-2xl mr-2" /> Light Mode
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={handleToggle}
        >
          <HiMoon className=" text-primary text-2xl mr-2" /> Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggleComponents;
