import React, { createContext, useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPref = window.localStorage.getItem("color-theme");
    if (typeof storedPref == "string") {
      return storedPref;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme:dark)");
    console.log(userMedia);
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    window.localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// import React, { createContext, useEffect, useState } from "react";

// const getInitialTheme = () => {
//   if (typeof window !== "undefined" && window.localStorage) {
//     const storedPref = window.localStorage.getItem("color-theme");
//     if (typeof storedPref === "string") {
//       return storedPref;
//     }

//     const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
//     if (userMedia.matches) {
//       return "dark";
//     }
//   }
//   return "light";
// };

// export const ThemeContext = createContext();

// export const ThemeContextProvider = ({ initialTheme, children }) => {
//   const [theme, setTheme] = useState(() => getInitialTheme()); // Initialize state with a function

//   const rawSetTheme = (theme) => {
//     const root = window.document.documentElement;
//     const isDark = theme === "dark";

//     root.classList.remove(isDark ? "light" : "dark");
//     root.classList.add(theme);

//     window.localStorage.setItem("color-theme", theme);
//   };

//   useEffect(() => {
//     const storedTheme = window.localStorage.getItem("color-theme");
//     if (storedTheme) {
//       setTheme(storedTheme);
//     }
//   }, []);

//   useEffect(() => {
//     rawSetTheme(theme);
//   }, [theme]);

//   useEffect(() => {
//     if (initialTheme) {
//       rawSetTheme(initialTheme);
//     }
//   }, [initialTheme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
