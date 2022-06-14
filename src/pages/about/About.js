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
      "https://res.cloudinary.com/amosmoyo/image/upload/v1655184951/documents/CV_24_xza0lf.pdf",
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
              I am a passionate software developer. Mostly I am a web oriented
              developer. I have worked with several web technologies. My main
              languages are JavaScript and Python. I have worked with; Raact,
              Angular, NodeJs, Bootstrap, HTML, CSS, Django, PostMan(API
              Manegment), MongoDB and MySQL.{" "}
            </p>
          </>
          <>
            <p className="h3">Data Analysts</p>
            <p>
              I have with python in several of Machine Learning and Data
              Analysis. Though i am  still an intermidiate. The tools i have used inclued Python, SQL, Microsoft Exel and Google Sheets{" "}
            </p>
          </>
          <>
            <p className="h3">Business Person</p>
            <p>
             I am business minded person. I have worked as a sale person and a brand ambassador for several companies in Nairobi.  <br></br>
              <br></br>
              <button className="btn btn-primary" onClick={saveFile}>
                Download Resume
              </button>
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
