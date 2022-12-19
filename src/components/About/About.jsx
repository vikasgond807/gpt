import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import image from "../../assests/Wintech.jpeg";
const About = () => {
  const abouts = [
    {
      title: "Women in Technology",
      ImgUrl:
        "https://girlpowertalk.com/wp-content/uploads/2022/02/Group-132-1-min.png",
    },
    {
      title: "Diversity & Inclusion",
      ImgUrl:
        "https://girlpowertalk.com/wp-content/uploads/2022/02/home-about-girl-power-talk-min.png",
    },
    {
      title: "Entrepreurial Culture",
      ImgUrl: "https://girlpowertalk.com/wp-content/uploads/2022/07/nitya-gupta.png",
    },
    {
      title: "Generate Impact",
      ImgUrl:'https://girlpowertalk.com/wp-content/uploads/2022/06/PH.png'
    },
  ];
  return (
    <div>
      <div className="text-container">
        <h2 className="head-text">
          {" "}
          <span>
            #WE ARE <span style={{ color: "red" }}>GIRLPOWERTALK</span>
          </span>
        </h2>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.ImgUrl} alt={about.title} />

            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
