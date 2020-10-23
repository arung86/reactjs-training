/*
1. create  - done
2. provide
3. consume // 
*/
/* 
1. create  - done
2. provide

*/

import React from "react";
const UserContext = React.createContext();
// UserContext.displayName = "UserContext";
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };
