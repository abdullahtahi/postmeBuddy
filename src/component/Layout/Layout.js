import React from "react";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div
        style={{
          margin: "7rem 2rem 0 2rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
