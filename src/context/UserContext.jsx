import { createContext, useState } from "react";

import { checkLoginStatus } from "../api";

const UserContext = createContext(null);

function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({ username: checkLoginStatus() });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
