/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/SectionWrapper";

const TechCard = ({ group, index }) => {
  return (
    <Tilt w-full>
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <h3 className="text-white text-xl font-bold mb-4 text-center">
            {group.category}
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {group.items.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                />
                <p className="text-white text-sm mt-2">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tech Stack</p>
        <h2 className={styles.sectionHeadText}>Skills Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px] text-justify"
      >
        My technical toolkit spans across the following languages, frameworks,
        and platforms.
      </motion.p>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {technologies.map((group, index) => (
          <TechCard key={group.category} group={group} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
