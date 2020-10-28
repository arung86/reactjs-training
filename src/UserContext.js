// logged in
import React from "react";

const UserContext = React.createContext();
// todo name
UserContext.displayName = "UserContext";
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };
