import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/infoSection/Data";
import Services from "../components/services";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
