import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Themeswitch() {
  const [theme, settheme] = useState(false);

  useEffect(() => {
    if (window.matchMedia("theme:dark").matches) {
      settheme("dark");
    } else {
      settheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handletheme = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="fixed left-5 right-0 top-5 md:top-5 md:right-4 z-[999]">
      <button onClick={handletheme}>
        {theme === "dark" ? (
          <FaMoon className="text-yellow-500" />
        ) : (
          <FaSun className="dark:text-white" />
        )}
      </button>
    </div>
  );
}
