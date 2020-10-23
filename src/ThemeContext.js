import React from "react";

const ThemeContext = React.createContext();
// ThemeContext.displayName = "ThemeContext";
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer };
