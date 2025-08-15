import { createContext, useState, useEffect } from "react";

// Create context with default values
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  // Get theme from localStorage if available, otherwise default to light
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  // Update theme in localStorage and document.body when theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);

    // Update meta theme-color
    const themeColorMeta = document.getElementById("theme-color");
    if (themeColorMeta) {
      themeColorMeta.setAttribute(
        "content",
        theme === "light" ? "#ffffff" : "#121212",
      );
    }
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
