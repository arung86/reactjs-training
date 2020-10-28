import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";

export default function ComponentC() {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <div>
      user: {user}, theme: {theme}
    </div>
  );
}
