import * as React from "react";

const ThemeContext = React.createContext(null);
const SetThemeContext = React.createContext(null);
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useThemeMode();
  const modeValue = React.useMemo(() => mode, [mode]);
  const setModeValue = React.useMemo(() => setMode, [setMode]);
  return React.createElement(
    ThemeContext.Provider,
    { value: modeValue },
    React.createElement(
      SetThemeContext.Provider,
      { value: setModeValue },
      children
    )
  );
};
function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context == null) {
    throw new ReferenceError(`useTheme must be used in a ThemeProvider`);
  }
  return context;
}
function useSetTheme() {
  const context = React.useContext(SetThemeContext);
  if (context == null) {
    throw new ReferenceError(`useSetTheme must be used in a ThemeProvider`);
  }
  return context;
}
// only these 3 exported functions below are for app usage
export { useTheme, useSetTheme, ThemeProvider };
////////////////////////////////////////
////                              /////
//////////////////////////////////////
const preferDarkQuery = "(prefers-color-scheme: dark)";
/**
 * This hook is not for the user.
 * It exists only for the theme provider
 *
 * @returns readonly [ThemeMode, React.Dispatch<React.SetStateAction<ThemeMode>>]
 */
function useThemeMode() {
  const [mode, setMode] = React.useState(() => {
    const value = window.localStorage.getItem("theme-mode");
    if (value) {
      return value === "dark" ? "dark" : "light";
    } else {
      return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
    }
  });
  React.useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      setMode(mediaQuery.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  React.useEffect(() => {
    window.localStorage.setItem("mode", mode);
    document.documentElement.setAttribute("data-mode", mode);
  }, [mode]);
  // we're doing it this way instead of as an effect so we only
  // set the localStorage value if they explicitly change the default
  return [mode, setMode];
}
