import { createContext, useState } from "react";
import { Login } from "../page/Login/Login";
import RegisterForm from "./organisms/Register";

export const AuthContext = createContext({
  status: "login",
  changeStatus: () => {},
});

export const Authentication = () => {
  const [status, setStatus] = useState("login");

  const changeStatus = () => {
    if (status === "login") {
      setStatus("register");
    } else {
      setStatus("login");
    }
  };

  return (
    <AuthContext.Provider
      value={{ status: status, changeStatus: changeStatus }}
    >
      <div className="flex items-center justify-center h-screen w-[100%]">
        {status === "login" ? <Login /> : <RegisterForm />}
      </div>
      ;
    </AuthContext.Provider>
  );
};
