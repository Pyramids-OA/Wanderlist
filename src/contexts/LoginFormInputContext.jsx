import { createContext, useState } from "react";

export const LoginInputContext = createContext();

export function LoginInputProvider({ children }) {
  const [userName, setUser] = useState("");

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  return (
    <LoginInputContext.Provider value={{ userName, setUser, loginForm, setLoginForm }}>
      {children}
    </LoginInputContext.Provider>
  );
}
