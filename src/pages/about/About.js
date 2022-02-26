/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Header from "../../components/header/Header";
import "./about.css";

import vector from "../../assets/about_vector.png";
import Footer from "../../components/footer/Footer";
import AboutAnimine from "../../assets/about_anime.gif";

import { saveAs } from "file-saver";

const About = () => {
  const saveFile = () => {
    saveAs(
      "https://res.cloudinary.com/amosmoyo/image/upload/v1645868685/avatar/portfolio/CV_sirlul.pdf",
      "RESUME.pdf"
    );
  };
  return (
    <div className="main-container">
      <Header
        heading={"About Me"}
        details={
          "Hey!, its Amos Moyo. I am a fullstack web developer (Full stack dev) from  Nairobi Kenya. I love web development."
        }
      />
      <div className="about-main">
        <div className="about-left">
          <>
            <p className="h3">Full stack Developer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut{" "}
             
            </p>
          </>
          <>
            <p className="h3">Data Analysis</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut{" "}
            </p>
          </>
          <>
            <p className="h3">Business Person</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut{" "}
              <br></br><br></br>
              <button className="btn btn-primary" onClick={saveFile}>Download Resume</button>
            </p>
          </>
        </div>
        <div className="about-right">
          <img src={AboutAnimine} alt="animation" className="animane" />
        </div>
      </div>
      <Footer phrase="Checkout my" link="projects" toAddress="projects" />
      <div className="vector-frame">
        <img src={vector} alt="vector" className="vector-img" />
      </div>
    </div>
  );
};

export default About;
