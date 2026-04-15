"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const darkMode = true; // Hardcoded to always be in dark mode

  // Removed localStorage checks and setters to enforce dark mode

  const toggleTheme = () => {
    // No-op: Dark mode cannot be toggled off
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {/* dark class applied conditionally for Tailwind */}
      <div className={darkMode ? "dark" : ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Hook to use theme in any component
export const useTheme = () => useContext(ThemeContext);
