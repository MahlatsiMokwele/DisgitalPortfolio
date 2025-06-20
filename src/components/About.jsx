/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px]" w-full>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px] text-justify"
      >
        I am an individual of high motivation and profound dedication, with an
        enthusiastic commitment to engaging in a variety of professional
        endeavors. My breadth of experience has cultivated a strong proficiency
        in goal-setting and executing decisive strategies to fulfill objectives
        effectively. As an innovative thinker, I am adept at devising
        imaginative solutions to address and surmount challenges, always with an
        eye towards inventive outcomes.
        <br />
        <br />
        My professional approach is characterized by an intrinsic sense of
        organization and an unwavering commitment to discipline. I tackle my
        responsibilities with a meticulous and conscientious mindset, ensuring
        that I consistently deliver outcomes of the highest caliber. My
        inherently confident and approachable demeanor facilitates the
        establishment of meaningful connections across diverse groups, enhancing
        my ability to adapt to multifaceted environments and manage demanding
        responsibilities with ease.
        <br />
        <br />
        In my previous roles as an Assistant Manager and Sales Assistant at
        TopCD (Menlyn), an Electoral Official at the Independent Electoral
        Commission (IEC), and through internships and junior developer positions
        at Sambe Consulting and Geo Intelligence Corp (GeoInt), respectively, as
        well as Full Stack Developer positions at SovTech and .Nerd Consulting,
        I have amassed a wealth of experience that has prepared me to make a
        substantial contribution to any team.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
