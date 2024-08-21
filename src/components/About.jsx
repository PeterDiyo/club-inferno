import React from "react";
import aboutSvg from "../assets/aboutSvg.svg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">ABOUT US</h2>
      <div className="about-grid">
        <img src={aboutSvg} className="about-image" alt="About" />
        <article>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            molestias excepturi quam tenetur amet aspernatur, perferendis
            molestiae? Quasi ipsam sapiente laudantium, accusamus modi eaque
            veniam consequatur enim magni fugiat ipsa. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Odit, obcaecati? Numquam, cumque
            saepe! Quia eveniet possimus quo dignissimos ut iusto, ipsa qui
            laudantium deleniti vel repudiandae dolorem et veritatis voluptatum!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
