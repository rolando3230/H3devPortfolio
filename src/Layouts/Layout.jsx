import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <header className="fixed w-full shadow-xl top-0 left-0">
        <Navbar />
      </header>
      <main className="mt-16">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
