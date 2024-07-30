import React from "react";
import { intro } from "../data";
import IntroCard from "./IntroCard";
import introImg from "../assets/intro.svg";

const Intro = () => {
  return (
    <>
      <div className="intro-title" id="home">
        <h2>Empowering Innovations</h2>
      </div>
      <section className="intro">
        <div className="intro-elements">
          {intro.map((intros) => {
            return <IntroCard key={intros.id} {...intros} />;
          })}
        </div>
        <img src={introImg} alt="intro" />
      </section>
    </>
  );
};

export default Intro;
