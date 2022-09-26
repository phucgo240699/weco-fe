import { createContext, useState } from "react";

export const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [ auth, setAuth ] = useState(undefined);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
