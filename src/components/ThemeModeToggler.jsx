// import { useEffect, useState } from "react";
// import Icon from "./Icon";

// const ThemeModeToggler = () => {
//   const [theme, setTheme] = useState(null);

//   useEffect(() => {
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   }, []);

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   const handleThemeSwitch = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };
//   return (
//     <div onClick={handleThemeSwitch} className="cursor-pointer">
//       {theme === "dark" ? (
//         <Icon className="" id="sun-icon" color="" size="" strokeWidth={""} />
//       ) : (
//         <Icon
//           className=""
//           // onClick={handleThemeSwitch}
//           id="moon-icon"
//           color=""
//           size=""
//           strokeWidth={""}
//         />
//       )}
//     </div>
//   );
// };
// export default ThemeModeToggler;

import classNames from "classnames";
import { useSetTheme, useTheme } from "../context/Theme";
import Icon from "./Icon";

const ThemeButton = () => {
  const theme = useTheme();
  const setTheme = useSetTheme();
  const isdarkTheme = theme === "dark";

  return (
    <button
      type="button"
      title="Toggle Theme"
      className={classNames(
        "aspect-square w-8 bg-cover bg-no-repeat",
        theme === "light" ? (
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
        )
      )}
      onClick={() => setTheme(isdarkTheme ? "light" : "dark")}
    >
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
};

export { ThemeButton };
