import { createContext, useState, useEffect } from "react";

export const LoginInputContext = createContext();

export function LoginInputProvider({ children }) {
  const [userName, setUser] = useState(() => {
    const saved = localStorage.getItem("userName");
    return saved ? JSON.parse(saved) : "";
  });

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(userName));
  }, [userName]);

  return (
    <LoginInputContext.Provider
      value={{ userName, setUser, loginForm, setLoginForm }}
    >
      {children}
    </LoginInputContext.Provider>
  );
}
