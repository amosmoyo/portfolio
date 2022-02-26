import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SkillsVector from "../../assets/skills_vector.png";
import "./skills.css";
import { skillList } from "../../assets/skillsData";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="main-container">
      <Header heading="My Skills" details="I am passionate tech enthusiast" />
      <div className="skill-container">
        {skillList.map((skill) => (
          <SkillsCard skillName={skill?.skillName} url={skill?.skillUrl} />
        ))}
      </div>
      <Footer
        phrase="For more infomation"
        link="contact me"
        toAddress="contact"
      />
      <div className="skill-vector-frame">
        <img
          src={SkillsVector}
          alt="skill-vector-png"
          className="skill-vector-img"
        />
      </div>
    </div>
  );
};

export default Skills;
