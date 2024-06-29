import React from "react";
import Header from "./Header";
import Home from "./Home";
import bg from "../assets/images/bg.svg";

const Layout: React.FC = () => {
  return (
    <div
      style={{
        background: `url(${bg})no-repeat center/cover`,
        height: "100vh",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        backgroundSize: "100%",
      }}
    >
      <Header />
      <Home />
    </div>
  );
};

export default Layout;
