/* eslint-disable space-before-function-paren */
import { useState } from "react";
import { MyGlobalContext } from "./utils/context";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Recovery from "./pages/Recovery";
import OTPInput from "./pages/OTPInput";
import Reset from "./pages/Reset";
import Contact from "./pages/Contact";
import Requests from "./pages/Requests";

import { useSnackbar } from "notistack";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import MyBookings from "./pages/MyBookings";

export type tokenUserI = {
  type: "cse_staff" | "non_cse_staff" | "hdr_student" | "admin";
  zid: string;
  email: string;
  name: string;
  userId: string;
} | null;

const App = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [token, setToken] = useState<tokenUserI>(
    localStorage.getItem("token") && JSON.parse(localStorage.getItem("token")!)
  );
  const [otp, setOTP] = useState(
    localStorage.getItem("otp") && JSON.parse(localStorage.getItem("otp")!)
  );
  const [email, setEmail] = useState(
    localStorage.getItem("email") && JSON.parse(localStorage.getItem("email")!)
  );
  const [admin, setAdmin] = useState(
    localStorage.getItem("admin") && JSON.parse(localStorage.getItem("admin")!)
  );

  const displayError = (msg: string) =>
    enqueueSnackbar(msg, { variant: "error" });

  const displaySuccess = (msg: string) =>
    enqueueSnackbar(msg, { variant: "success" });

  const displayWarning = (msg: string) =>
    enqueueSnackbar(msg, { variant: "warning" });

  const displayInfo = (msg: string) =>
    enqueueSnackbar(msg, { variant: "info" });

  const handleToken = (token: tokenUserI) => {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  };
  const removeToken = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const handleOTP = (code: number) => {
    setOTP(code);
    localStorage.setItem("otp", JSON.stringify(code));
  };
  const removeOTP = () => {
    setOTP(null);
    localStorage.removeItem("otp");
  };

  const handleEmail = (email: string) => {
    setEmail(email);
    localStorage.setItem("email", JSON.stringify(email));
  };
  const removeEmail = () => {
    setEmail(null);
    localStorage.removeItem("email");
  };

  const handleAdmin = () => {
    setAdmin(true);
    localStorage.setItem("admin", JSON.stringify(true));
  };
  const removeAdmin = () => {
    setAdmin(false);
    localStorage.setItem("admin", JSON.stringify(false));
  }

  const globalVars = {
    displayError,
    displaySuccess,
    displayWarning, 
    displayInfo,
    handleToken,
    removeToken,
    token,
    handleOTP,
    removeOTP,
    otp,
    handleEmail,
    removeEmail,
    email,
    handleAdmin,
    removeAdmin,
    admin
  };

  return (
    <>
      <BrowserRouter>
        <MyGlobalContext.Provider value={globalVars}>
          <ResponsiveAppBar />
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Navigate to="/login" replace={true} />} />
            <Route path="login" element={<Login />} />
            <Route path="myBookings" element={<MyBookings />} />
            <Route path="recovery" element={<Recovery />} />
            <Route path="OTP" element={<OTPInput />} />
            <Route path="reset-password" element={<Reset />} />
            <Route path="*" element={<h1> Page Not Found</h1>} />
            <Route path="contact" element={<Contact />}/>
            <Route path="requests" element={<Contact />}/>
          </Routes>
        </MyGlobalContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
