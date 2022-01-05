import React from "react";
import Footer from "./Footer/Footer";
import FooterInfo from "./Footer/FooterInfo";
import Header from "./Header/Header";
import MainSection from "./Main/Main";
import Navbar from "./Navbar/Navbar";

function Main() {
  return (
    <div>
      <Navbar />
      <Header />
      <MainSection />
      <FooterInfo />
      <Footer />
    </div>
  );
}

export default Main;
