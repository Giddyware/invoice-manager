import { useEffect, useState } from "react";
import Icon from "./Icon";

const ThemeModeToggler = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div onClick={handleThemeSwitch}>
      {theme === "dark" ? (
        <Icon className="" id="sun-icon" color="" size="" strokeWidth={""} />
      ) : (
        <Icon
          className=""
          // onClick={handleThemeSwitch}
          id="moon-icon"
          color=""
          size=""
          strokeWidth={""}
        />
      )}
    </div>
  );
};
export default ThemeModeToggler;
