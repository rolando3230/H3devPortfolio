import React from "react";
import Layout from "../../Layouts/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";

const Welcome = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
    </Layout>
  );
};

export default Welcome;
